import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Users, Building, Compass, FileText } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-sce-black text-sce-white py-10">
          <div className="sce-container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">О Фонде <span className="text-sce-blue">SCE</span></h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Фонд SCE (SCE Foundation; от англ. Secure, Control, Explore — «Обезопасить, Контролировать, Исследовать» или Special Cosmic Expeditions — «Специальные Космические Экспедиции»)
            </p>
          </div>
        </div>

        <div className="sce-container py-10">
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Обзор</span>
              </TabsTrigger>
              <TabsTrigger value="personnel" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Персонал</span>
              </TabsTrigger>
              <TabsTrigger value="facilities" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                <span>Объекты</span>
              </TabsTrigger>
              <TabsTrigger value="expeditions" className="flex items-center gap-2">
                <Compass className="h-4 w-4" />
                <span>Экспедиции</span>
              </TabsTrigger>
              <TabsTrigger value="protocols" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Протоколы</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="sce-card">
                <h2 className="text-2xl font-semibold sce-title mb-4">Фонд SCE</h2>
                <p className="mb-4">
                  Во вселенной SCE Foundation Фонд является международной организацией, миссия которой — обеспечивать глобальную безопасность, 
                  осуществлять контроль над аномальными явлениями и проводить научные исследования необъяснимых феноменов. Фонд SCE работает как 
                  на Земле, так и в космическом пространстве, изучая объекты и явления, выходящие за рамки современной науки.
                </p>
                <p className="mb-4">
                  Фонд располагает широкой сетью исследовательских центров, лабораторий и экспедиционных баз по всему миру и за его пределами. 
                  Благодаря поддержке ведущих мировых правительств, Фонд имеет доступ к передовым технологиям и ресурсам, необходимым для 
                  выполнения своей миссии.
                </p>
                <p>
                  Работа Фонда SCE включает в себя обнаружение, изучение и контроль аномальных объектов, а также проведение исследовательских 
                  экспедиций в отдаленные и труднодоступные места Земли и космоса. Каждый изучаемый объект классифицируется по уровню потенциальной 
                  опасности и научной ценности.
                </p>
              </div>
              
              <div className="sce-card">
                <h2 className="text-2xl font-semibold sce-title mb-4">Документация Фонда</h2>
                <p className="mb-4">
                  Фонд SCE ведет обширную документацию по каждому исследуемому объекту, включая протоколы взаимодействия, результаты экспериментов 
                  и отчеты экспедиций. Эта информация доступна сотрудникам согласно их уровню допуска.
                </p>
                <p>
                  Помимо самого Фонда, существуют другие организации, проявляющие интерес к аномальным явлениям. Некоторые из них являются 
                  партнерами Фонда, в то время как другие преследуют собственные, иногда противоречащие миссии SCE, цели. Среди них: 
                  "Глобальный Альянс Исследователей" — международная группа независимых ученых; "Корпорация Нова" — частная компания, 
                  стремящаяся использовать аномальные технологии в коммерческих целях; и "Хранители Бездны" — таинственная группа, 
                  защищающая древние аномальные артефакты от изучения и возможного использования.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="personnel">
              <div className="sce-card">
                <h2 className="text-2xl font-semibold sce-title mb-4">Структура персонала Фонда SCE</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Класс А - Совет Директоров</h3>
                    <p>Высшее руководство Фонда SCE, принимающее стратегические решения и определяющее приоритеты исследований.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Класс B - Администрация</h3>
                    <p>Руководители исследовательских центров и координаторы проектов, отвечающие за ежедневные операции.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Класс C - Научные сотрудники</h3>
                    <p>Ученые, исследователи и аналитики, изучающие аномальные объекты и разрабатывающие технологии.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Класс D - Полевые агенты</h3>
                    <p>Специалисты по обнаружению и первичному взаимодействию с аномалиями, участники экспедиций.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Класс E - Служба безопасности</h3>
                    <p>Сотрудники, обеспечивающие защиту объектов, персонала и данных Фонда.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="facilities">
              <div className="sce-card">
                <h2 className="text-2xl font-semibold sce-title mb-4">Объекты Фонда SCE</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Исследовательские центры</h3>
                    <p>Комплексы лабораторий и технических помещений для изучения аномальных объектов в контролируемых условиях.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Экспедиционные базы</h3>
                    <p>Мобильные и стационарные базы для организации полевых исследований и экспедиций в отдаленные регионы.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Космические станции</h3>
                    <p>Орбитальные и дальние космические платформы для наблюдения и исследования космических аномалий.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Хранилища</h3>
                    <p>Специализированные сооружения для безопасного хранения аномальных объектов и артефактов.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="expeditions">
              <div className="sce-card">
                <h2 className="text-2xl font-semibold sce-title mb-4">Экспедиции Фонда SCE</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Земные экспедиции</h3>
                    <p>Операции по исследованию аномальных зон и объектов на поверхности Земли, включая глубоководные и подземные экспедиции.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Космические миссии</h3>
                    <p>Экспедиции за пределы Земли для изучения аномальных космических объектов и явлений.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Исследовательские группы</h3>
                    <p>Специализированные команды ученых и агентов, формируемые для конкретных исследовательских проектов.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Операции по извлечению</h3>
                    <p>Миссии по безопасному обнаружению и транспортировке аномальных объектов в исследовательские центры Фонда.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="protocols">
              <div className="sce-card">
                <h2 className="text-2xl font-semibold sce-title mb-4">Протоколы Фонда SCE</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Протоколы безопасности</h3>
                    <p>Процедуры, обеспечивающие защиту персонала и объектов Фонда при взаимодействии с аномалиями.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Научные протоколы</h3>
                    <p>Методики исследования и документирования аномальных объектов, гарантирующие достоверность данных.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Протоколы контроля</h3>
                    <p>Системы мониторинга и управления для предотвращения непредвиденных последствий при изучении аномалий.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Протоколы информационной защиты</h3>
                    <p>Меры по обеспечению конфиденциальности информации о деятельности Фонда и изучаемых объектах.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Глобальные протоколы реагирования</h3>
                    <p>Планы действий в случае крупномасштабных аномальных явлений или происшествий планетарного масштаба.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;