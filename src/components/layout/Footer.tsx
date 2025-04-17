import { Link } from "react-router-dom";
import { Shield, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sce-black text-sce-white border-t border-sce-red/50">
      <div className="sce-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-sce-red" />
              <span className="text-xl font-bold">SCE <span className="text-sce-red">Foundation</span></span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Фонд SCE (SCE Foundation; от англ. Secure, Contain, Examine — «Обезопасить, Удержать, Исследовать» или Special Containment Expeditions — «Особые Экспедиции Сдерживания»)
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sce-red">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sce-red">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 sce-title">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-sce-red">Главная</Link></li>
              <li><Link to="/objects" className="text-gray-400 hover:text-sce-red">Объекты SCE</Link></li>
              <li><Link to="/tales" className="text-gray-400 hover:text-sce-red">Рассказы</Link></li>
              <li><Link to="/canons" className="text-gray-400 hover:text-sce-red">Каноны</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-sce-red">О Фонде</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 sce-title">Категории объектов</h3>
            <ul className="space-y-2">
              <li><Link to="/objects/safe" className="text-gray-400 hover:text-sce-red">Безопасные</Link></li>
              <li><Link to="/objects/euclid" className="text-gray-400 hover:text-sce-red">Евклид</Link></li>
              <li><Link to="/objects/keter" className="text-gray-400 hover:text-sce-red">Кетер</Link></li>
              <li><Link to="/objects/thaumiel" className="text-gray-400 hover:text-sce-red">Таумиэль</Link></li>
              <li><Link to="/objects/apollyon" className="text-gray-400 hover:text-sce-red">Апполион</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 sce-title">Для авторов</h3>
            <ul className="space-y-2">
              <li><Link to="/guide" className="text-gray-400 hover:text-sce-red">Руководство</Link></li>
              <li><Link to="/rules" className="text-gray-400 hover:text-sce-red">Правила</Link></li>
              <li><Link to="/sandbox" className="text-gray-400 hover:text-sce-red">Песочница</Link></li>
              <li><Link to="/forum" className="text-gray-400 hover:text-sce-red">Форум</Link></li>
              <li><Link to="/submit" className="text-gray-400 hover:text-sce-red">Отправить статью</Link></li>
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