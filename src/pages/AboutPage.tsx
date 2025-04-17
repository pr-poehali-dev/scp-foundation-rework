import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Users, Building, BookOpenText, FileWarning } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-sce-black text-sce-white py-10">
          <div className="sce-container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">О Фонде <span className="text-sce-red">SCE</span></h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Фонд SCE (SCE Foundation; от англ. Secure, Contain, Examine — «Обезопасить, Удержать, Исследовать» или Special Containment Expeditions — «Особые Экспедиции Сдерживания»)
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
              <TabsTrigger value="groups" className="flex items-center gap-2">
                <BookOpenText className="h-4 w-4" />
                <span>Организации</span>
              </TabsTrigger>
              <TabsTrigger value="protocols" className="flex items-center gap-2">
                <FileWarning className="h-4 w-4" />
                <span>Протоколы</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="sce-card">
                <h2 className="text-2xl font-semibold sce-title mb-4">Фонд SCE</h2>
                <p className="mb-4">
                  Во вселенной SCE Foundation Фонд является секретной организацией, цель которой — заниматься поиском, захватом, содержанием и изучением 
                  (иногда — уничтожением) аномальных предметов, существ, мест, явлений и прочих объектов. Для этого организация наделена соответствующими 
                  полномочиями большинства основных правительств Земли. Несдерживаемые SCE-объекты чаще всего представляют угрозу для человечества или, 
                  по крайней мере, нормальности этого мира.
                </p>
                <p className="mb-4">
                  Фонд держит в секрете своё существование (равно как и аномальных объектов), чтобы предотвратить массовую панику и связанный с ней хаос 
                  и позволить человеческой цивилизации нормально функционировать. При обнаружении новой аномалии Организация высылает одну из своих МОГ 
                  (мобильных оперативных групп) для захвата и транспортировки объекта в соответствующую зону Фонда или для его содержания на месте 
                  обнаружения, если транспортировка не представляется возможной.
                </p>
                <p>
                  Захваченные SCE-объекты подвергаются тщательному изучению. Приобретённые Организацией заключённые тюрем, являющиеся в большинстве своём 
                  приговорёнными к смертной казни, именуются сотрудниками класса D и используются для взаимодействия с SCE-объектами в качестве расходного материала.
                </p>
              </div>
              
              <div className="sce-card">
                <h2 className="text-2xl font-semibold sce-title mb-4">Документация Фонда</h2>
                <p className="mb-4">
                  У Фонда имеется документация о каждом содержащемся SCE-объекте, которая может включать ссылки на связанные доклады и файлы. 
                  Эти документы описывают объекты и включают инструкции по их безопасному содержанию.
                </p>
                <p>
                  Помимо самого Фонда, существует множество конкурирующих организаций, которые также знают о существовании паранормальных явлений и 
                  взаимодействуют с ними для различных целей. Например, «Повстанцы Хаоса» — отделившаяся от Фонда террористическая группа — пытаются 
                  захватить объекты SCE, чтобы использовать их против своих противников; «Глобальная Оккультная Коалиция» (ГОК), секретное военизированное 
                  агентство Организации Объединённых Наций, специализируется на уничтожении сверхъестественных угроз, а не на их сдерживании; и «Длань Змея», 
                  боевая группа, которая защищает права аномальных существ, сопротивляясь усилиям Фонда и ГОК.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="personnel">
              <div className="sce-card">
                <h2 className="text-2xl font-semibold sce-title mb-4">Структура персонала Фонда SCE</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Класс А - Совет О5</h3>
                    <p>Высшее руководство Фонда SCE, состоящее из 13 человек. Они принимают глобальные решения и имеют доступ к любой информации.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Класс B - Администрация</h3>
                    <p>Старшие сотрудники, руководители зон содержания и исследовательских центров.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Класс C - Исследователи</h3>
                    <p>Учёные и специалисты, занимающиеся изучением аномальных объектов.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Класс D - Расходный персонал</h3>
                    <p>Заключенные, используемые для опасных экспериментов и взаимодействия с опасными SCE-объектами.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Класс E - Охрана и МОГ</h3>
                    <p>Сотрудники службы безопасности и члены мобильных оперативных групп.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="facilities">
              <div className="sce-card">
                <h2 className="text-2xl font-semibold sce-title mb-4">Объекты Фонда SCE</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Зоны содержания</h3>
                    <p>Специальные объекты для содержания аномалий. Варьируются от небольших хранилищ до огромных подземных комплексов.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Исследовательские центры</h3>
                    <p>Лаборатории и научные центры, где изучаются свойства аномалий и разрабатываются технологии для их содержания.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Административные центры</h3>
                    <p>Офисы и штаб-квартиры для управления операциями Фонда.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Места содержания на месте</h3>
                    <p>Некоторые аномалии невозможно переместить, поэтому Фонд устанавливает контроль над их местом нахождения.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="groups">
              <div className="sce-card">
                <h2 className="text-2xl font-semibold sce-title mb-4">Связанные организации</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Повстанцы Хаоса</h3>
                    <p>Отколовшаяся от Фонда группа, стремящаяся использовать аномалии для изменения мира.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Глобальная Оккультная Коалиция (ГОК)</h3>
                    <p>Секретное подразделение ООН, занимающееся уничтожением аномалий вместо их содержания.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Длань Змея</h3>
                    <p>Группа, защищающая права аномальных существ и людей с паранормальными способностями.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Церковь Разбитого Бога</h3>
                    <p>Религиозная организация, поклоняющаяся механическому божеству и некоторым SCE-объектам.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="protocols">
              <div className="sce-card">
                <h2 className="text-2xl font-semibold sce-title mb-4">Протоколы Фонда SCE</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Протоколы содержания</h3>
                    <p>Процедуры, обеспечивающие безопасное содержание аномальных объектов.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Протоколы исследования</h3>
                    <p>Правила и методы исследования аномалий без риска для персонала и окружающей среды.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Протоколы реагирования</h3>
                    <p>Действия в случае нарушения условий содержания или обнаружения новых аномалий.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Протоколы амнезии</h3>
                    <p>Процедуры по стиранию памяти у гражданских лиц, столкнувшихся с аномалиями или деятельностью Фонда.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Протоколы ликвидации</h3>
                    <p>Крайние меры по уничтожению особо опасных аномалий, которые невозможно безопасно содержать.</p>
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