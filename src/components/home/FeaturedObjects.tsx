import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

// Примеры объектов SCE
const featuredObjects = [
  {
    id: "173",
    title: "SCE-173",
    class: "euclid",
    description: "Антропоморфная скульптура из бетона и арматуры, способная двигаться на сверхвысоких скоростях, но только когда не находится под прямым наблюдением.",
    image: "/placeholder.svg"
  },
  {
    id: "096",
    title: "SCE-096",
    class: "euclid",
    description: "Гуманоидная сущность высокого роста, впадающая в состояние сильного расстройства при взгляде на её лицо.",
    image: "/placeholder.svg"
  },
  {
    id: "682",
    title: "SCE-682",
    class: "keter",
    description: "Крупное рептилиевидное существо с высочайшей регенеративной способностью, невероятной силой и высоким интеллектом.",
    image: "/placeholder.svg"
  },
  {
    id: "049",
    title: "SCE-049",
    class: "euclid",
    description: "Гуманоид, одетый в костюм средневекового чумного доктора, который считает себя лекарем, но превращает своих пациентов в зомби.",
    image: "/placeholder.svg"
  },
  {
    id: "106",
    title: "SCE-106",
    class: "keter",
    description: "Гуманоидная сущность, способная проходить сквозь твёрдые материалы и перемещать жертв в своё \"карманное измерение\".",
    image: "/placeholder.svg"
  }
];

// Функция для получения цвета бейджа класса объекта
const getClassBadge = (objectClass: string) => {
  switch (objectClass) {
    case "safe":
      return "sce-object-safe";
    case "euclid":
      return "sce-object-euclid";
    case "keter":
      return "sce-object-keter";
    case "thaumiel":
      return "sce-object-thaumiel";
    case "apollyon":
      return "sce-object-apollyon";
    default:
      return "sce-object-euclid";
  }
};

// Функция для получения названия класса на русском языке
const getClassName = (objectClass: string) => {
  switch (objectClass) {
    case "safe":
      return "Безопасный";
    case "euclid":
      return "Евклид";
    case "keter":
      return "Кетер";
    case "thaumiel":
      return "Таумиэль";
    case "apollyon":
      return "Апполион";
    default:
      return "Евклид";
  }
};

const FeaturedObjects = () => {
  return (
    <section className="sce-section">
      <div className="sce-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold sce-title mb-2">Избранные объекты SCE</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Познакомьтесь с некоторыми из наиболее известных аномалий, содержащихся Фондом SCE.
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
                <Card className="overflow-hidden border-sce-red/20 h-full">
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
          <Button className="bg-sce-red hover:bg-sce-darkred text-white">
            <Link to="/objects">Просмотреть все объекты</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedObjects;