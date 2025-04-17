import { Link } from "react-router-dom";
import { FileText, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sce-black text-sce-white border-t border-sce-red/50">
      <div className="sce-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <FileText className="h-6 w-6 text-sce-red" />
              <span className="text-xl font-bold">SCE <span className="text-sce-red">Foundation</span></span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Фонд SCE (SCE Foundation; от англ. Secure, Control, Explore — «Обезопасить, Контролировать, Исследовать») — организация, занимающаяся изучением и сдерживанием аномальных объектов и явлений.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sce-red transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sce-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 sce-title">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-sce-red transition-colors">Главная</Link></li>
              <li><Link to="/objects" className="text-gray-400 hover:text-sce-red transition-colors">Объекты SCE</Link></li>
              <li><Link to="/expeditions" className="text-gray-400 hover:text-sce-red transition-colors">Экспедиции</Link></li>
              <li><Link to="/research" className="text-gray-400 hover:text-sce-red transition-colors">Исследования</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-sce-red transition-colors">О Фонде</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 sce-title">Категории объектов</h3>
            <ul className="space-y-2">
              <li><Link to="/objects/safe" className="text-gray-400 hover:text-sce-red transition-colors">Безопасные</Link></li>
              <li><Link to="/objects/supervised" className="text-gray-400 hover:text-sce-red transition-colors">Наблюдаемые</Link></li>
              <li><Link to="/objects/restricted" className="text-gray-400 hover:text-sce-red transition-colors">Ограниченные</Link></li>
              <li><Link to="/objects/omega" className="text-gray-400 hover:text-sce-red transition-colors">Омега</Link></li>
              <li><Link to="/objects/terminus" className="text-gray-400 hover:text-sce-red transition-colors">Терминус</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 sce-title">Для исследователей</h3>
            <ul className="space-y-2">
              <li><Link to="/guide" className="text-gray-400 hover:text-sce-red transition-colors">Руководство</Link></li>
              <li><Link to="/protocols" className="text-gray-400 hover:text-sce-red transition-colors">Протоколы</Link></li>
              <li><Link to="/clearance" className="text-gray-400 hover:text-sce-red transition-colors">Уровни допуска</Link></li>
              <li><Link to="/forum" className="text-gray-400 hover:text-sce-red transition-colors">Форум</Link></li>
              <li><Link to="/submit" className="text-gray-400 hover:text-sce-red transition-colors">Подать отчет</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-sce-red/30 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} SCE Foundation. Все материалы доступны по лицензии CC BY-SA 3.0.</p>
          <p className="mt-2">
            SCE Foundation — вымышленная организация и все материалы на этом сайте являются художественным вымыслом.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;