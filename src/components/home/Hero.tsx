import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-sce-black text-sce-white py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center"></div>
      <div className="sce-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <Shield className="h-16 w-16 text-sce-red mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            SCE <span className="text-sce-red">Foundation</span>
          </h1>
          <p className="text-2xl font-semibold mb-2">
            Обезопасить. Удержать. Исследовать.
          </p>
          <div className="w-24 h-1 bg-sce-red my-6"></div>
          <p className="text-lg md:text-xl max-w-3xl mb-8 text-gray-300">
            Фонд SCE — секретная организация, занимающаяся изучением и 
            содержанием аномальных объектов, существ и явлений, представляющих 
            угрозу для человечества.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button size="lg" className="bg-sce-red hover:bg-sce-darkred text-white">
              <Link to="/objects">Исследовать объекты</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-sce-red text-sce-white hover:text-sce-red">
              <Link to="/about">О Фонде</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;