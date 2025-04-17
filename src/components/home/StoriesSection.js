import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Примеры историй из вселенной SCE
const featuredStories = [
  {
    id: "1",
    title: "Загадка Эффекта Юпитера",
    author: "Д-р Климов",
    date: "10.05.2023",
    excerpt: "Экспедиционная группа SCE-7 обнаруживает аномальные гравитационные колебания вокруг одного из спутников Юпитера...",
  },
  {
    id: "2",
    title: "Проект 'Голубой горизонт'",
    author: "Исследователь Андреева",
    date: "23.07.2023",
    excerpt: "Отчет о первом контакте с внеземной формой разумной жизни и непредвиденных последствиях установления коммуникации...",
  },
  {
    id: "3",
    title: "Хроники экспедиции SCE-19",
    author: "Командир Веселов",
    date: "14.09.2023",
    excerpt: "Документированный отчет о подводной экспедиции к аномальному объекту на дне Марианской впадины...",
  }
];

const StoriesSection = () => {
  return (
    <section className="sce-section">
      <div className="sce-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold sce-title mb-2">Экспедиционные отчеты</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Документированные экспедиции, исследования и отчеты полевых групп Фонда SCE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredStories.map((story) => (
            <Card key={story.id} className="border-sce-blue/20 h-full flex flex-col">
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
                  to={`/expeditions/${story.id}`}
                  className="text-sce-blue hover:text-sce-darkblue font-medium"
                >
                  Читать далее →
                </Link>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button className="bg-sce-blue hover:bg-sce-darkblue text-white">
            <Link to="/expeditions">Все отчеты</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;