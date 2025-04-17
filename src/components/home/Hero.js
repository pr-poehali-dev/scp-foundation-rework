import { FileText, Lock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden sce-gradient-bg text-sce-white">
      {/* Фоновые декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-sce-red/30"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-sce-red/30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-sce-red/10"></div>
        </div>
        
        {/* Угловые декоративные элементы */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-sce-red/20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-sce-red/20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-sce-red/20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-sce-red/20"></div>
      </div>
      
      <div className="sce-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-sce-red/10 mb-6 border border-sce-red/30">
            <FileText className="h-10 w-10 text-sce-red" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            SCE <span className="text-sce-red">Foundation</span>
          </h1>
          
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-[2px] bg-sce-red/60"></div>
            <p className="text-2xl font-semibold text-gray-300">
              Обезопасить. Контролировать. Исследовать.
            </p>
            <div className="w-8 h-[2px] bg-sce-red/60"></div>
          </div>
          
          <p className="text-lg md:text-xl max-w-3xl mb-10 text-gray-300 leading-relaxed">
            Фонд SCE — международная организация, обеспечивающая безопасность человечества 
            путем контроля и изучения аномальных явлений и объектов, представляющих 
            научный интерес и потенциальную угрозу.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <Button size="lg" className="bg-sce-red hover:bg-sce-darkred text-white font-semibold transition-colors duration-300">
              <Search className="mr-2 h-5 w-5" />
              <Link to="/objects">Изучить объекты</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-sce-red text-sce-white hover:text-sce-red hover:bg-sce-red/10 font-semibold transition-colors duration-300">
              <Lock className="mr-2 h-5 w-5" />
              <Link to="/about">О Фонде</Link>
            </Button>
          </div>
          
          {/* Маленький декоративный элемент внизу */}
          <div className="mt-16 border border-sce-red/20 rounded-full w-12 h-12 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-sce-red/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;