
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, Shield, Home, Zap, ArrowRight, Leaf, AlertTriangle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Хедер */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-900">ГармоСфера</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-purple-800 hover:text-purple-600 transition-colors">О нас</a>
            <a href="#problems" className="text-purple-800 hover:text-purple-600 transition-colors">Проблемы</a>
            <a href="#solutions" className="text-purple-800 hover:text-purple-600 transition-colors">Решения</a>
            <a href="#services" className="text-purple-800 hover:text-purple-600 transition-colors">Услуги</a>
          </nav>
          <Button className="bg-purple-700 hover:bg-purple-800">Связаться с нами</Button>
        </div>
      </header>

      {/* Основной баннер */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 leading-tight">
            Сделайте дом источником силы и здоровья
          </h1>
          <p className="text-lg text-gray-700">
            Гармонизация пространства - изменение окружающей среды внутри дома, офиса и других помещений, 
            чтобы создать позитивные процессы, укрепляющие здоровье и жизненную активность человека, 
            нейтрализуя негативные факторы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
              Заказать гармонизацию
            </Button>
            <Button size="lg" variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-100">
              Узнать больше
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" 
            alt="Гармоничное пространство" 
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Внесем гармонию в ваше пространство</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Мы помогаем создать дом, который восстанавливает силы и здоровье, приносит хороший сон и 
              дает полноценный отдых, сохраняет атмосферу тепла и уюта.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Home className="w-12 h-12 text-purple-700 mb-4" />
                <h3 className="text-xl font-semibold text-purple-900 mb-2">Для вашего дома</h3>
                <p className="text-gray-700">
                  Создаем жилое пространство, которое восстанавливает силы и здоровье всей семьи, обеспечивает качественный сон и отдых.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-purple-700 mb-4" />
                <h3 className="text-xl font-semibold text-purple-900 mb-2">Для вашего офиса</h3>
                <p className="text-gray-700">
                  Формируем рабочую среду, дающую силы для плодотворного труда с максимальной эффективностью и минимальным утомлением.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Leaf className="w-12 h-12 text-purple-700 mb-4" />
                <h3 className="text-xl font-semibold text-purple-900 mb-2">Для вашего здоровья</h3>
                <p className="text-gray-700">
                  Помогаем нейтрализовать негативные излучения, которые могут вызывать усталость, плохой сон и проблемы со здоровьем.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Проблемы */}
      <section id="problems" className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Невидимые процессы</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Факторы, от которых часто страдает человек внутри жилых или рабочих помещений, 
              влияющие на здоровье и энергию:
            </p>
          </div>

          <div className="md:flex gap-8 items-start">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Card className="border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-red-100 rounded-full mr-3">
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-900">Техногенные факторы</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Искусственные излучения электромагнитной природы, которые формируются техническими 
                    устройствами как внутри помещения, так и за его пределами.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="min-w-5 h-5 text-purple-700 mr-2 mt-1" />
                      <span>Излучение от вышек сотовой связи</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="min-w-5 h-5 text-purple-700 mr-2 mt-1" />
                      <span>Wi-Fi роутеры и мобильные устройства</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="min-w-5 h-5 text-purple-700 mr-2 mt-1" />
                      <span>Бытовая техника (микроволновые печи и др.)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:w-1/2">
              <Card className="border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-red-100 rounded-full mr-3">
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-900">Геопатогенные факторы</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Естественные излучения земли, связанные с теллурическими и энергоинформационными 
                    процессами под поверхностью земли.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="min-w-5 h-5 text-purple-700 mr-2 mt-1" />
                      <span>Разломы слоев подземных пород</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="min-w-5 h-5 text-purple-700 mr-2 mt-1" />
                      <span>Подземные водные потоки</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="min-w-5 h-5 text-purple-700 mr-2 mt-1" />
                      <span>Геологические аномалии</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Последствия воздействия негативных излучений:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-red-500 mr-2 mt-1" />
                  <span>Головные боли и мигрени</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-red-500 mr-2 mt-1" />
                  <span>Дисбаланс кровяного давления</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-red-500 mr-2 mt-1" />
                  <span>Бессонница</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-red-500 mr-2 mt-1" />
                  <span>Психоэмоциональный дисбаланс</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-red-500 mr-2 mt-1" />
                  <span>Повышенная утомляемость</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-red-500 mr-2 mt-1" />
                  <span>Пониженный иммунитет</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-red-500 mr-2 mt-1" />
                  <span>Аллергические реакции</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-red-500 mr-2 mt-1" />
                  <span>Проблемы с кожей</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-red-500 mr-2 mt-1" />
                  <span>Хронические заболевания</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Решения */}
      <section id="solutions" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Наши решения</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Мы предлагаем комплексный подход к решению проблем с геопатогенным и техногенным излучением, 
              чтобы сделать ваш дом источником силы.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-xl mb-4">1</div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">Обследование помещения</h3>
                <p className="text-gray-700">
                  Проводим детальное исследование наличия излучения геопатогенных сетей и зон внутри дома или офиса 
                  радиэстезийным методом и с помощью специальных приборов.
                </p>
                <Separator className="my-4" />
                <p className="text-sm text-gray-600">
                  Мы определяем местоположение зон, их характер, интенсивность и силу воздействия, 
                  составляем подробный отчет с рекомендациями.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-xl mb-4">2</div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">Изменение интерьера</h3>
                <p className="text-gray-700">
                  На основе полученных данных помогаем перестроить интерьер с учетом месторасположения 
                  проблемных зон для минимизации их влияния.
                </p>
                <Separator className="my-4" />
                <p className="text-sm text-gray-600">
                  Правильная организация мест сна, учебы, работы и отдыха позволяет 
                  значительно снизить воздействие вредных излучений.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-xl mb-4">3</div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">Гармонизация пространства</h3>
                <p className="text-gray-700">
                  Применяем специальные гармонизаторы пространства, которые нейтрализуют негативное 
                  излучение и преобразуют его в биосовместимое с человеческим организмом.
                </p>
                <Separator className="my-4" />
                <p className="text-sm text-gray-600">
                  Гармонизаторы эффективно блокируют вредное воздействие и способствуют 
                  восстановлению энергетического баланса в помещении.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Преимущества гармонизаторов */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Преимущества наших гармонизаторов</h2>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              Наши приборы для гармонизации помещений обеспечивают комплексное решение 
              проблем с вредными излучениями.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Функции гармонизаторов</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-purple-300 mr-2 mt-1" />
                  <span>Нейтрализация геопатогенного излучения в помещениях</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-purple-300 mr-2 mt-1" />
                  <span>Нейтрализация электромагнитного излучения от бытовых приборов</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-purple-300 mr-2 mt-1" />
                  <span>Блокировка излучения от высоковольтных линий и вышек сотовой связи</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-purple-300 mr-2 mt-1" />
                  <span>Гармонизация питьевой воды, восстановление её живой структуры</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-purple-300 mr-2 mt-1" />
                  <span>Адаптация организма к изменяющимся внешним условиям</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Почему выбирают нас</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-purple-300 mr-2 mt-1" />
                  <span>Специалисты с международной квалификацией, обучавшиеся в Швейцарской Академии</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-purple-300 mr-2 mt-1" />
                  <span>Комплексный подход: измерение, анализ, рекомендации и установка решений</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-purple-300 mr-2 mt-1" />
                  <span>Контроль эффективности: замеры до и после установки гармонизаторов</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-purple-300 mr-2 mt-1" />
                  <span>Масштабируемые решения: от квартиры до крупных предприятий</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-purple-300 mr-2 mt-1" />
                  <span>Научный подход к анализу и решению проблем с излучениями</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги и цены */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Наши услуги</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Комплексные решения для создания здорового и энергетически сбалансированного пространства
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="bg-purple-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Измерение</h3>
                <p className="text-xl opacity-90">от 5 000₽</p>
                <p className="text-sm opacity-80 mt-1">стоимость указана за небольшую комнату, общая стоимость зависит от площади</p>
              </div>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="min-w-5 h-5 text-purple-700 mr-2 mt-1" />
                    <span>Определение местоположения зон излучения</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="min-w-5 h-5 text-purple-700 mr-2 mt-1" />
                    <span>Измерение интенсивности и характеристик излучения</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="min-w-5 h-5 text-purple-700 mr-2 mt-1" />
                    <span>Оценка воздействия излучения на человека</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="min-w-5 h-5 text-purple-700 mr-2 mt-1" />
                    <span>Составление подробного отчета с рекомендациями</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-700 hover:bg-purple-800">
                  Заказать измерение <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="bg-purple-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Гармонизация помещения</h3>
                <p className="text-xl opacity-90">от 42 000₽</p>
                <p className="text-sm opacity-80 mt-1">для помещения любого назначения</p>
              </div>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="min-w-5 h-5 text-purple-700 mr-2 mt-1" />
                    <span>Установка специальных гармонизаторов пространства</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="min-w-5 h-5 text-purple-700 mr-2 mt-1" />
                    <span>Нейтрализация техногенных и геопатогенных излучений</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="min-w-5 h-5 text-purple-700 mr-2 mt-1" />
                    <span>Контрольные замеры до и после установки</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="min-w-5 h-5 text-purple-700 mr-2 mt-1" />
                    <span>Масштабируемое решение для объектов любого размера</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-700 hover:bg-purple-800">
                  Заказать гармонизацию <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Что такое дом-источник силы */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Дом как источник силы</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Когда дом выполняет возложенные на него задачи, он становится источником силы и энергии
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-700 mb-6">
              Когда мы выбираем себе дом, то хотим, чтобы он дал нам максимальную пользу:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-start">
                <div className="p-2 bg-purple-100 rounded-full mr-3 mt-1">
                  <Check className="w-4 h-4 text-purple-700" />
                </div>
                <p>Укрывал от суровых воздействий погоды</p>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-purple-100 rounded-full mr-3 mt-1">
                  <Check className="w-4 h-4 text-purple-700" />
                </div>
                <p>Защищал семью от влияния социума</p>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-purple-100 rounded-full mr-3 mt-1">
                  <Check className="w-4 h-4 text-purple-700" />
                </div>
                <p>Создавал атмосферу уюта и тепла</p>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-purple-100 rounded-full mr-3 mt-1">
                  <Check className="w-4 h-4 text-purple-700" />
                </div>
                <p>Сохранял имущество семьи</p>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-purple-100 rounded-full mr-3 mt-1">
                  <Check className="w-4 h-4 text-purple-700" />
                </div>
                <p>Восстанавливал силы и здоровье</p>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-purple-100 rounded-full mr-3 mt-1">
                  <Check className="w-4 h-4 text-purple-700" />
                </div>
                <p>Давал возможность хорошо выспаться</p>
              </div>
            </div>
            
            <p className="text-gray-700">
              Дом всегда привязан к месту, и его местоположение определенно влияет на его возможности.
              Есть несколько факторов, формирующихся благодаря местоположению дома, которые способны 
              влиять на нашу жизненную энергию и активность. Эти факторы не очевидны, но сила их 
              негативного воздействия может быть значительной. Наши специалисты помогут трансформировать
              любое пространство в источник силы и здоровья.
            </p>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Сделайте первый шаг к здоровому пространству</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Мы поможем создать гармоничное и здоровое пространство, которое будет восстанавливать ваши силы и защищать от вредных воздействий.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-100">
              Задать вопрос специалисту
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ГармоСфера</h3>
              <p className="opacity-80">
                Решения по укреплению здоровья вашего дома и офиса, 
                нейтрализация гео- и техногенных излучений
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 opacity-80">
                <li>Измерение геопатогенных зон</li>
                <li>Гармонизация помещений</li>
                <li>Консультации по обустройству интерьера</li>
                <li>Установка гармонизаторов</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 opacity-80">
                <li>Телефон: +7 (XXX) XXX-XX-XX</li>
                <li>Email: info@гармосфера.рф</li>
                <li>Адрес: г. Ижевск, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-8 pt-8 text-center opacity-60">
            <p>© 2023 ГармоСфера. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
