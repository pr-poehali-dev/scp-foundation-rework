import { Shield, Compass, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="sce-section bg-gray-100 dark:bg-sce-gray">
      <div className="sce-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold sce-title mb-2">О Фонде SCE</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Фонд SCE — международная организация, занимающаяся безопасностью, контролем и изучением аномальных явлений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="sce-card flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-sce-blue/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-sce-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Обезопасить</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Фонд SCE обеспечивает защиту человечества от потенциально опасных 
              аномальных явлений и внеземных объектов, угрожающих глобальной безопасности.
            </p>
          </div>

          <div className="sce-card flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-sce-blue/10 rounded-full flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-sce-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Контролировать</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Для каждого объекта SCE разрабатываются протоколы мониторинга и контроля, 
              предотвращающие непредсказуемые последствия и обеспечивающие стабильность.
            </p>
          </div>

          <div className="sce-card flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-sce-blue/10 rounded-full flex items-center justify-center mb-4">
              <Compass className="h-8 w-8 text-sce-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Исследовать</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Фонд проводит исследовательские экспедиции и научные эксперименты для 
              понимания природы аномалий и развития передовых технологий.
            </p>
          </div>
        </div>

        <div className="mt-12 sce-card">
          <h3 className="text-xl font-semibold mb-4 sce-title">Классификация объектов SCE</h3>
          <div className="space-y-4">
            <div>
              <span className="sce-object-safe mr-2">Безопасный</span>
              <p className="mt-2">Объекты, которые полностью поняты и не представляют угрозы при правильном обращении.</p>
            </div>
            <div>
              <span className="sce-object-supervised mr-2">Наблюдаемый</span>
              <p className="mt-2">Объекты, требующие постоянного мониторинга и особых условий содержания.</p>
            </div>
            <div>
              <span className="sce-object-restricted mr-2">Ограниченный</span>
              <p className="mt-2">Объекты с высоким потенциалом опасности, доступ к которым строго ограничен.</p>
            </div>
            <div>
              <span className="sce-object-omega mr-2">Омега</span>
              <p className="mt-2">Объекты, используемые Фондом для контроля других аномалий или космических исследований.</p>
            </div>
            <div>
              <span className="sce-object-terminus mr-2">Терминус</span>
              <p className="mt-2">Объекты катастрофического уровня, способные вызвать глобальные или космические катастрофы.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;