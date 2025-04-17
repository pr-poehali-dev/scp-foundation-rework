import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileWarning, Lock, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4 bg-sce-gradient-bg">
        <div className="text-center max-w-md bg-white dark:bg-sce-gray p-8 rounded-md shadow-xl border border-sce-red/20">
          <div className="flex justify-center mb-6">
            <div className="bg-sce-red/10 p-6 rounded-full">
              <FileWarning className="h-16 w-16 text-sce-red" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-2 sce-title">Доступ запрещен</h1>
          <div className="flex justify-center mb-4">
            <div className="px-3 py-1 bg-sce-red/10 border border-sce-red/20 rounded-full text-sce-red font-mono">
              Код ошибки: 404
            </div>
          </div>
          
          <div className="bg-sce-black/5 dark:bg-sce-black/20 p-4 rounded-md border-l-4 border-sce-red mb-6">
            <div className="flex items-start">
              <Lock className="h-5 w-5 text-sce-red mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-600 dark:text-gray-300 text-left">
                У вас недостаточный уровень допуска для просмотра запрашиваемого файла или зоны.
                Данное взаимодействие было зарегистрировано системой безопасности.
              </p>
            </div>
          </div>
          
          <Button className="bg-sce-red hover:bg-sce-darkred text-white">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Вернуться на главную
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;