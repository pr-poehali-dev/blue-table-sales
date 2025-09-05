import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const desks = [
    {
      id: 1,
      name: "Офисный стол Executive",
      price: "89 000 ₽",
      image: "/img/6830ab51-3dcc-4ec9-aadf-4f24311250b0.jpg",
      description: "Профессиональный синий стол для руководителей",
    },
    {
      id: 2,
      name: "Стол Manager Blue",
      price: "65 000 ₽", 
      image: "/img/6830ab51-3dcc-4ec9-aadf-4f24311250b0.jpg",
      description: "Элегантное решение для менеджеров среднего звена",
    },
    {
      id: 3,
      name: "Компактный Office Pro",
      price: "42 000 ₽",
      image: "/img/6830ab51-3dcc-4ec9-aadf-4f24311250b0.jpg", 
      description: "Стильный стол для современного офиса",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-business-blue">ОфисСтолы.рф</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-business-gray hover:text-business-blue transition-colors">Главная</a>
              <a href="#catalog" className="text-business-gray hover:text-business-blue transition-colors">Каталог</a>
              <a href="#warranty" className="text-business-gray hover:text-business-blue transition-colors">Гарантия</a>
              <a href="#contacts" className="text-business-gray hover:text-business-blue transition-colors">Контакты</a>
            </nav>
            <Button className="bg-business-blue text-white hover:bg-blue-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-business-light-gray to-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-business-gray mb-6">
            Премиальные офисные столы <span className="text-business-blue">синего цвета</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Создайте профессиональную атмосферу в офисе с нашими элегантными столами. 
            Качество, надёжность и стиль для вашего бизнеса.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-business-blue text-white hover:bg-blue-700 px-8">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="border-business-blue text-business-blue hover:bg-business-blue hover:text-white px-8">
              <Icon name="Shield" size={20} className="mr-2" />
              Узнать о гарантии
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-business-gray mb-12">Каталог офисных столов</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {desks.map((desk) => (
              <Card key={desk.id} className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <CardHeader className="p-0">
                  <img 
                    src={desk.image} 
                    alt={desk.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl text-business-gray mb-2">{desk.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{desk.description}</CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-business-blue">{desk.price}</span>
                    <Button className="bg-business-blue text-white hover:bg-blue-700">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section id="warranty" className="py-16 bg-business-light-gray">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-business-gray mb-12">Наши гарантии</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-business-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-business-gray mb-4">5 лет гарантии</h4>
              <p className="text-gray-600">
                Полная гарантия на все компоненты стола. Бесплатное обслуживание и замена деталей.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-business-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-business-gray mb-4">Бесплатная доставка</h4>
              <p className="text-gray-600">
                Доставляем по всей России бесплатно. Установка и сборка в офисе включены в стоимость.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-business-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Headphones" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-business-gray mb-4">24/7 поддержка</h4>
              <p className="text-gray-600">
                Наша служба поддержки работает круглосуточно. Ответим на любые вопросы о продукции.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-business-gray mb-12">Свяжитесь с нами</h3>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center text-business-gray">Оставьте заявку</CardTitle>
                <CardDescription className="text-center">
                  Наш менеджер свяжется с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Input placeholder="Ваше имя" className="border-gray-300 focus:border-business-blue" />
                </div>
                <div>
                  <Input placeholder="Телефон" className="border-gray-300 focus:border-business-blue" />
                </div>
                <div>
                  <Input placeholder="Email" className="border-gray-300 focus:border-business-blue" />
                </div>
                <div>
                  <Textarea 
                    placeholder="Опишите ваши потребности или задайте вопрос"
                    className="border-gray-300 focus:border-business-blue min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-business-blue text-white hover:bg-blue-700 py-3">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-business-gray text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">ОфисСтолы.рф</h4>
              <p className="text-gray-300">
                Премиальная офисная мебель для вашего бизнеса. Качество и стиль в каждом изделии.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@офиcстолы.рф
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Деловая, 15
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Информация</h4>
              <div className="space-y-2 text-gray-300">
                <p>• Доставка по России</p>
                <p>• Гарантия 5 лет</p>
                <p>• Сборка включена</p>
                <p>• Корпоративным клиентам скидки</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 ОфисСтолы.рф. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;