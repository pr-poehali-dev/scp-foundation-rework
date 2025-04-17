import { Lock, FileWarning, FlaskConical } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="sce-section bg-gray-100 dark:bg-sce-gray">
      <div className="sce-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold sce-title mb-2">О Фонде SCE</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Фонд SCE — секретная организация, занимающаяся исследованием аномальных объектов и явлений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="sce-card flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-sce-red/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-8 w-8 text-sce-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Обезопасить</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Фонд SCE выявляет и изолирует аномалии для обеспечения 
              безопасности человечества и сохранения нормальной реальности.
            </p>
          </div>

          <div className="sce-card flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-sce-red/10 rounded-full flex items-center justify-center mb-4">
              <FileWarning className="h-8 w-8 text-sce-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Удержать</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Для каждого аномального объекта разрабатываются специальные условия содержания, 
              предотвращающие его побег или неконтролируемое воздействие.
            </p>
          </div>

          <div className="sce-card flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-sce-red/10 rounded-full flex items-center justify-center mb-4">
              <FlaskConical className="h-8 w-8 text-sce-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Исследовать</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Фонд детально изучает каждый аномальный объект для понимания его природы, 
              свойств и потенциального применения на благо человечества.
            </p>
          </div>
        </div>

        <div className="mt-12 sce-card">
          <h3 className="text-xl font-semibold mb-4 sce-title">Классификация объектов SCE</h3>
          <div className="space-y-4">
            <div>
              <span className="sce-object-safe mr-2">Безопасный</span>
              <p className="mt-2">Объекты, которые могут быть надёжно и безопасно содержаться.</p>
            </div>
            <div>
              <span className="sce-object-euclid mr-2">Евклид</span>
              <p className="mt-2">Объекты, которые недостаточно изучены или непредсказуемы, требующие особого внимания.</p>
            </div>
            <div>
              <span className="sce-object-keter mr-2">Кетер</span>
              <p className="mt-2">Объекты, исключительно опасные и сложные в содержании, способные вызвать глобальные катастрофы.</p>
            </div>
            <div>
              <span className="sce-object-thaumiel mr-2">Таумиэль</span>
              <p className="mt-2">Объекты, используемые Фондом для содержания других объектов или в интересах миссии Фонда.</p>
            </div>
            <div>
              <span className="sce-object-apollyon mr-2">Апполион</span>
              <p className="mt-2">Объекты, которые невозможно сдерживать и которые рано или поздно приведут к концу света.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;