import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FileText, Calendar, User, Clock, ArrowRight } from "lucide-react";

// Примеры историй из вселенной SCE
const featuredStories = [
  {
    id: "1",
    title: "Экспедиция к объекту SCE-2317",
    author: "Д-р Андрей Климов",
    date: "10.05.2023",
    readTime: "12 мин",
    type: "Отчет экспедиции",
    clearance: "2",
    excerpt: "Экспедиционная группа обнаружила руины древнего сооружения, предположительно связанного с объектом SCE-2317. При первичном исследовании были зафиксированы аномальные гравитационные колебания...",
  },
  {
    id: "2",
    title: "Инцидент с объектом SCE-096-Б",
    author: "Исследователь Марина Андреева",
    date: "23.07.2023",
    readTime: "18 мин",
    type: "Отчет о происшествии",
    clearance: "3",
    excerpt: "В 04:32 система наблюдения зафиксировала нарушение протокола содержания объекта SCE-096-Б. Персонал безопасности был немедленно мобилизован. В результате инцидента пострадало три сотрудника...",
  },
  {
    id: "3",
    title: "Протокол исследования SCE-3008",
    author: "Командир Игорь Веселов",
    date: "14.09.2023",
    readTime: "15 мин",
    type: "Исследовательский протокол",
    clearance: "2",
    excerpt: "После обнаружения портала, ведущего в аномальное пространство, была инициирована серия контролируемых экспериментов с использованием оборудованных дронов и D-класса персонала...",
  }
];

const StoryCard = ({ story }) => {
  const clearanceColors = {
    "1": "green",
    "2": "blue",
    "3": "yellow",
    "4": "orange",
    "5": "red"
  };
  
  const color = clearanceColors[story.clearance] || "gray";
  
  return (
    <Card className="sce-card hover:border-sce-red/50 transition-all duration-300 flex flex-col h-full">
      <CardHeader className="pb-2 border-b border-sce-red/10">
        <div className="flex justify-between items-start mb-3">
          <Badge variant="outline" className="bg-sce-red/5 text-sce-red border-sce-red/20">
            {story.type}
          </Badge>
          <div className={`w-6 h-6 bg-${color}-100 dark:bg-${color}-900/30 border border-${color}-500 rounded-full flex items-center justify-center`}>
            <span className={`text-xs font-bold text-${color}-700 dark:text-${color}-500`}>{story.clearance}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold line-clamp-2">{story.title}</h3>
        
        <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
          <div className="flex items-center">
            <User className="h-3.5 w-3.5 mr-1 text-sce-red/70" />
            <span>{story.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1 text-sce-red/70" />
            <span>{story.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1 text-sce-red/70" />
            <span>{story.readTime}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="py-4 flex-grow">
        <p className="text-gray-600 dark:text-gray-400 line-clamp-4">
          {story.excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="pt-2 border-t border-sce-red/10">
        <Link 
          to={`/expeditions/${story.id}`}
          className="text-sm font-medium text-sce-red hover:text-sce-darkred flex items-center"
        >
          <FileText className="h-4 w-4 mr-1" />
          Читать полный отчет
          <ArrowRight className="h-3.5 w-3.5 ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

const StoriesSection = () => {
  return (
    <section className="sce-section relative">
      {/* Декоративные элементы фона */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-sce-red/10"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-sce-red/10"></div>
      
      <div className="sce-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-sce-red/50"></div>
            <span className="mx-4 text-sce-red font-medium uppercase text-sm tracking-wider">Документация</span>
            <div className="h-[1px] w-12 bg-sce-red/50"></div>
          </div>
          
          <h2 className="text-3xl font-bold sce-title mb-4">Экспедиционные отчеты</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Документированные экспедиции, происшествия и исследования полевых групп Фонда SCE.
            Доступ к полным отчетам ограничен уровнем допуска.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-sce-red hover:bg-sce-darkred text-white font-semibold px-8 py-6 h-auto">
            <Link to="/expeditions" className="flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Просмотреть все отчеты
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;