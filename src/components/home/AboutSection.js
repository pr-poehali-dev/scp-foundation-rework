import { Lock, Search, Shield, FileText, Compass, Globe, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="sce-section bg-gray-100 dark:bg-sce-gray relative">
      {/* Фоновые декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-10 -left-10 w-80 h-80 rounded-full bg-sce-red/5"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-sce-red/5"></div>
        </div>
      </div>
      
      <div className="sce-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-sce-red/50"></div>
            <span className="mx-4 text-sce-red font-medium uppercase text-sm tracking-wider">О нас</span>
            <div className="h-[1px] w-12 bg-sce-red/50"></div>
          </div>
          
          <h2 className="text-3xl font-bold sce-title mb-4">О Фонде SCE</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Фонд SCE — международная организация, занимающаяся безопасностью, контролем и изучением аномальных явлений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="sce-card flex flex-col items-center text-center hover:border-sce-red/50 transition-colors">
            <div className="w-16 h-16 bg-sce-red/10 rounded-full flex items-center justify-center mb-6 border border-sce-red/20">
              <Shield className="h-8 w-8 text-sce-red" />
            </div>
            <h3 className="text-xl font-semibold mb-4 sce-title">Обезопасить</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Фонд SCE обеспечивает защиту человечества от потенциально опасных 
              аномальных явлений и объектов, угрожающих глобальной безопасности через 
              протоколы сдерживания и нейтрализации.
            </p>
          </Card>

          <Card className="sce-card flex flex-col items-center text-center hover:border-sce-red/50 transition-colors">
            <div className="w-16 h-16 bg-sce-red/10 rounded-full flex items-center justify-center mb-6 border border-sce-red/20">
              <Lock className="h-8 w-8 text-sce-red" />
            </div>
            <h3 className="text-xl font-semibold mb-4 sce-title">Контролировать</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Для каждого объекта SCE разрабатываются специализированные протоколы содержания и контроля, 
              предотвращающие нежелательные проявления аномальных свойств.
            </p>
          </Card>

          <Card className="sce-card flex flex-col items-center text-center hover:border-sce-red/50 transition-colors">
            <div className="w-16 h-16 bg-sce-red/10 rounded-full flex items-center justify-center mb-6 border border-sce-red/20">
              <Search className="h-8 w-8 text-sce-red" />
            </div>
            <h3 className="text-xl font-semibold mb-4 sce-title">Исследовать</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Фонд проводит экспедиции, эксперименты и научные исследования для 
              понимания природы аномалий, их происхождения и возможностей применения.
            </p>
          </Card>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="sce-card">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-sce-red mr-3" />
              <h3 className="text-xl font-semibold sce-title">Классификация объектов SCE</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="sce-object-safe mr-3 flex-shrink-0 mt-1"></span>
                <div>
                  <h4 className="font-semibold">Безопасный</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Объекты, которые полностью поняты и безопасны при соблюдении стандартных процедур содержания.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="sce-object-supervised mr-3 flex-shrink-0 mt-1"></span>
                <div>
                  <h4 className="font-semibold">Наблюдаемый</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Объекты, требующие постоянного мониторинга и особых условий содержания.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="sce-object-restricted mr-3 flex-shrink-0 mt-1"></span>
                <div>
                  <h4 className="font-semibold">Ограниченный</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Объекты с высоким потенциалом опасности, доступ к которым строго ограничен.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="sce-object-omega mr-3 flex-shrink-0 mt-1"></span>
                <div>
                  <h4 className="font-semibold">Омега</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Объекты, используемые Фондом для контроля других аномалий или исследований.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="sce-object-terminus mr-3 flex-shrink-0 mt-1"></span>
                <div>
                  <h4 className="font-semibold">Терминус</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Объекты катастрофического уровня, способные вызвать глобальные катастрофы.</p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="sce-card">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-6 w-6 text-sce-red mr-3" />
              <h3 className="text-xl font-semibold sce-title">Уровни допуска</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold flex items-center">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-full mr-2 flex items-center justify-center">
                    <span className="text-xs font-bold text-green-700 dark:text-green-500">1</span>
                  </div>
                  Уровень 1 — Общая информация
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm ml-8">Базовые сведения, доступные для всего персонала.</p>
              </div>
              
              <div>
                <h4 className="font-semibold flex items-center">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 border border-blue-500 rounded-full mr-2 flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-500">2</span>
                  </div>
                  Уровень 2 — Ограниченный доступ
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm ml-8">Расширенная информация для исследователей.</p>
              </div>
              
              <div>
                <h4 className="font-semibold flex items-center">
                  <div className="w-6 h-6 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-500 rounded-full mr-2 flex items-center justify-center">
                    <span className="text-xs font-bold text-yellow-700 dark:text-yellow-500">3</span>
                  </div>
                  Уровень 3 — Секретный
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm ml-8">Детальная информация для руководителей проектов.</p>
              </div>
              
              <div>
                <h4 className="font-semibold flex items-center">
                  <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 border border-orange-500 rounded-full mr-2 flex items-center justify-center">
                    <span className="text-xs font-bold text-orange-700 dark:text-orange-500">4</span>
                  </div>
                  Уровень 4 — Совершенно секретный
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm ml-8">Полный доступ для администраторов объектов.</p>
              </div>
              
              <div>
                <h4 className="font-semibold flex items-center">
                  <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-full mr-2 flex items-center justify-center">
                    <span className="text-xs font-bold text-red-700 dark:text-red-500">5</span>
                  </div>
                  Уровень 5 — Высший совет
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm ml-8">Эксклюзивный доступ для Совета O5.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;