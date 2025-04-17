import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Shield, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-sce-black border-b border-sce-blue/50">
      <div className="sce-container">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-sce-blue" />
              <span className="text-2xl font-bold text-sce-white">SCE <span className="text-sce-blue">Foundation</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-sce-white hover:text-sce-blue">
                Объекты SCE <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-sce-gray rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link to="/objects" className="block px-4 py-2 text-sm text-sce-white hover:bg-sce-lightgray">Все объекты</Link>
                <Link to="/objects/safe" className="block px-4 py-2 text-sm text-sce-white hover:bg-sce-lightgray">Безопасные</Link>
                <Link to="/objects/supervised" className="block px-4 py-2 text-sm text-sce-white hover:bg-sce-lightgray">Наблюдаемые</Link>
                <Link to="/objects/restricted" className="block px-4 py-2 text-sm text-sce-white hover:bg-sce-lightgray">Ограниченные</Link>
              </div>
            </div>
            <Link to="/expeditions" className="text-sce-white hover:text-sce-blue">Экспедиции</Link>
            <Link to="/research" className="text-sce-white hover:text-sce-blue">Исследования</Link>
            <Link to="/about" className="text-sce-white hover:text-sce-blue">О Фонде</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-sce-blue" />
              <Input 
                placeholder="Поиск" 
                className="pl-8 bg-sce-gray border-sce-blue/30 text-sce-white w-64"
              />
            </div>
            <Button variant="outline" className="border-sce-blue text-sce-white hover:text-sce-blue">
              <User className="mr-2 h-4 w-4" />
              Войти
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-sce-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-sce-blue/30">
            <div className="relative mb-4">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-sce-blue" />
              <Input 
                placeholder="Поиск" 
                className="pl-8 bg-sce-gray border-sce-blue/30 text-sce-white w-full"
              />
            </div>
            <Link 
              to="/objects" 
              className="block py-2 text-sce-white hover:text-sce-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Объекты SCE
            </Link>
            <Link 
              to="/expeditions" 
              className="block py-2 text-sce-white hover:text-sce-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Экспедиции
            </Link>
            <Link 
              to="/research" 
              className="block py-2 text-sce-white hover:text-sce-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Исследования
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-sce-white hover:text-sce-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              О Фонде
            </Link>
            <div className="mt-4 pt-4 border-t border-sce-blue/30">
              <Button variant="outline" className="w-full border-sce-blue text-sce-white hover:text-sce-blue">
                <User className="mr-2 h-4 w-4" />
                Войти
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;