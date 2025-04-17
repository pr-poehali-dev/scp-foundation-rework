import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileWarning } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-sce-blue/10 p-4 rounded-full">
              <FileWarning className="h-16 w-16 text-sce-blue" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2 sce-title">Доступ запрещен</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">Код ошибки: 404</p>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            У вас недостаточный уровень допуска для просмотра запрашиваемого файла или зоны.
            Данное взаимодействие было зарегистрировано системой безопасности.
          </p>
          <Button className="bg-sce-blue hover:bg-sce-darkblue text-white">
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;