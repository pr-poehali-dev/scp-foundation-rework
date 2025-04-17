import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, FileText, AlertTriangle, Shield, Maximize } from "lucide-react";

// Примеры объектов SCE
const featuredObjects = [
  {
    id: "173",
    title: "SCE-173",
    class: "restricted",
    description: "Статуя из бетона и арматуры, способная перемещаться с невероятной скоростью, когда не находится в прямом поле зрения. При наблюдении абсолютно неподвижна.",
    image: "/placeholder.svg",
    containment: "Объект содержится в запечатанном контейнере из армированного стекла размером 5×5×2.5м.",
    icon: <AlertTriangle className="h-5 w-5" />,
    color: "sce-red"
  },
  {
    id: "096",
    title: "SCE-096",
    class: "supervised",
    description: "Гуманоидная сущность высотой около 2.4 метра с непропорционально длинными конечностями. Реагирует агрессивно, если кто-либо видит его лицо, даже по фотографии.",
    image: "/placeholder.svg",
    containment: "Объект содержится в стальной камере размером 5×5×5м с дистанционным наблюдением.",
    icon: <Shield className="h-5 w-5" />,
    color: "yellow-600"
  },
  {
    id: "682",
    title: "SCE-682",
    class: "terminus",
    description: "Крупное земноводное существо с высокими регенеративными способностями и адаптацией. Проявляет крайнюю враждебность ко всем формам жизни.",
    image: "/placeholder.svg",
    containment: "Объект содержится в резервуаре с кислотой с постоянным мониторингом и готовностью к нейтрализации.",
    icon: <Lock className="h-5 w-5" />,
    color: "black"
  },
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

const ObjectCard = ({ object }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <Card className="overflow-hidden border-sce-red/20 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 bg-sce-gray overflow-hidden sce-image-container">
        <img 
          src={object.image} 
          alt={object.title} 
          className="w-full h-full object-cover sce-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sce-black/80 to-transparent"></div>
        <div className="absolute bottom-3 left-3 flex items-center space-x-2">
          <div className={`w-8 h-8 rounded-full bg-${object.color}/10 flex items-center justify-center border border-${object.color}/30`}>
            {object.icon}
          </div>
          <span className={getClassBadge(object.class)}>
            {getClassName(object.class)}
          </span>
        </div>
      </div>
      
      <CardHeader className="p-4 pb-2 border-b border-sce-red/10">
        <CardTitle className="text-xl font-bold flex items-center">
          <FileText className="h-5 w-5 mr-2 text-sce-red" />
          {object.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className={`prose-sm dark:prose-invert ${isExpanded ? "" : "line-clamp-3"}`}>
          <p>{object.description}</p>
          {isExpanded && (
            <div className="mt-4">
              <Badge variant="outline" className="mb-2 border-sce-red/30 text-sce-red">Протокол содержания</Badge>
              <p className="text-sm text-gray-600 dark:text-gray-400">{object.containment}</p>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-sce-red hover:text-sce-darkred hover:bg-sce-red/5 p-0"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Свернуть" : "Подробнее"}
          <Maximize className={`ml-1 h-3 w-3 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
        </Button>
        
        <Link to={`/objects/${object.id}`} className="text-sm font-medium text-sce-red hover:underline">
          Полное досье →
        </Link>
      </CardFooter>
    </Card>
  );
};

const FeaturedObjects = () => {
  return (
    <section className="sce-section relative bg-white dark:bg-sce-black">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-sce-red/5"></div>
          <div className="absolute bottom-40 left-40 w-64 h-64 rounded-full border border-sce-red/5"></div>
        </div>
      </div>
      
      <div className="sce-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-sce-red/50"></div>
            <span className="mx-4 text-sce-red font-medium uppercase text-sm tracking-wider">База данных</span>
            <div className="h-[1px] w-12 bg-sce-red/50"></div>
          </div>
          
          <h2 className="text-3xl font-bold sce-title mb-4">Избранные объекты SCE</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Познакомьтесь с некоторыми из наиболее интересных аномалий, изучаемых Фондом SCE.
            Обратите внимание, что доступ к полной информации требует соответствующего уровня допуска.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredObjects.map((object) => (
            <ObjectCard key={object.id} object={object} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-sce-red hover:bg-sce-darkred text-white font-semibold px-8 py-6 h-auto">
            <Link to="/objects" className="flex items-center">
              <Search className="mr-2 h-5 w-5" />
              Просмотреть все объекты
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedObjects;