import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

// Примеры объектов SCE
const featuredObjects = [
  {
    id: "173",
    title: "SCE-173",
    class: "restricted",
    description: "Необычный метеорит с изменяющейся массой и гравитационным полем. Иногда перемещается самостоятельно, когда не находится под наблюдением приборов.",
    image: "/placeholder.svg"
  },
  {
    id: "096",
    title: "SCE-096",
    class: "supervised",
    description: "Неземная форма жизни, обнаруженная в Антарктиде. Реагирует агрессивно на определенные звуковые частоты.",
    image: "/placeholder.svg"
  },
  {
    id: "682",
    title: "SCE-682",
    class: "restricted",
    description: "Металлоорганический компаунд с высокой адаптивностью, способный перестраивать свою молекулярную структуру для противодействия внешним угрозам.",
    image: "/placeholder.svg"
  },
  {
    id: "049",
    title: "SCE-049",
    class: "supervised",
    description: "Древний артефакт, излучающий неизвестную форму энергии, влияющую на когнитивные функции людей, находящихся поблизости.",
    image: "/placeholder.svg"
  },
  {
    id: "106",
    title: "SCE-106",
    class: "restricted",
    description: "Устройство неизвестного происхождения, создающее локальные искажения пространства-времени, позволяющие перемещаться между измерениями.",
    image: "/placeholder.svg"
  }
];

// Функция для получения цвета бейджа класса объекта
const getClassBadge = (objectClass) => {
  switch (objectClass) {
    case "safe":
      return "sce-object-safe";
    case "supervised":
      return "sce-object-supervised";
    case "restricted":
      return "sce-object-restricted";
    case "omega":
      return "sce-object-omega";
    case "terminus":
      return "sce-object-terminus";
    default:
      return "sce-object-supervised";
  }
};

// Функция для получения названия класса на русском языке
const getClassName = (objectClass) => {
  switch (objectClass) {
    case "safe":
      return "Безопасный";
    case "supervised":
      return "Наблюдаемый";
    case "restricted":
      return "Ограниченный";
    case "omega":
      return "Омега";
    case "terminus":
      return "Терминус";
    default:
      return "Наблюдаемый";
  }
};

const FeaturedObjects = () => {
  return (
    <section className="sce-section">
      <div className="sce-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold sce-title mb-2">Избранные объекты SCE</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Познакомьтесь с некоторыми из наиболее интересных аномалий, изучаемых Фондом SCE.
          </p>
        </div>

        <ScrollArea className="w-full whitespace-nowrap pb-6">
          <div className="flex space-x-6">
            {featuredObjects.map((object) => (
              <Link 
                to={`/objects/${object.id}`} 
                key={object.id}
                className="min-w-[300px] max-w-[300px] transition-transform hover:scale-105"
              >
                <Card className="overflow-hidden border-sce-blue/20 h-full">
                  <div className="h-40 bg-sce-gray overflow-hidden">
                    <img 
                      src={object.image} 
                      alt={object.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl font-bold">{object.title}</CardTitle>
                      <span className={getClassBadge(object.class)}>
                        {getClassName(object.class)}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="line-clamp-3 text-gray-600 dark:text-gray-400">
                      {object.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </ScrollArea>
        
        <div className="text-center mt-8">
          <Button className="bg-sce-blue hover:bg-sce-darkblue text-white">
            <Link to="/objects">Просмотреть все объекты</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedObjects;