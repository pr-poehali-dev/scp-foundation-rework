import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Примеры историй из вселенной SCE
const featuredStories = [
  {
    id: "1",
    title: "День, когда мир погас",
    author: "Д-р Волков",
    date: "10.05.2023",
    excerpt: "Исследовательская группа SCE сталкивается с необъяснимым феноменом — исчезновением солнечного света в отдельных регионах...",
  },
  {
    id: "2",
    title: "Эксперимент ТВ-7",
    author: "Исследователь Петрова",
    date: "23.07.2023",
    excerpt: "Тайная запись о катастрофическом провале попытки использовать аномальные объекты для создания нового вида оружия...",
  },
  {
    id: "3",
    title: "Последний допрос",
    author: "Агент Соколов",
    date: "14.09.2023",
    excerpt: "Отчет о допросе представителя Повстанцев Хаоса, пойманного при попытке проникновения в Зону 19...",
  }
];

const StoriesSection = () => {
  return (
    <section className="sce-section">
      <div className="sce-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold sce-title mb-2">Истории из архивов</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Документированные случаи, отчёты и рассказы персонала Фонда SCE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredStories.map((story) => (
            <Card key={story.id} className="border-sce-red/20 h-full flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{story.title}</CardTitle>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex justify-between">
                  <span>{story.author}</span>
                  <span>{story.date}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 dark:text-gray-400">
                  {story.excerpt}
                </p>
              </CardContent>
              <div className="p-4 pt-0 mt-auto">
                <Link 
                  to={`/tales/${story.id}`}
                  className="text-sce-red hover:text-sce-darkred font-medium"
                >
                  Читать далее →
                </Link>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button className="bg-sce-red hover:bg-sce-darkred text-white">
            <Link to="/tales">Все истории</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;