import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [fromAmount, setFromAmount] = useState('1000');
  const [toAmount, setToAmount] = useState('50.5');
  const [isVerified, setIsVerified] = useState(false);

  const stats = [
    { label: 'Объём за 24ч', value: '$2.4M', icon: 'TrendingUp' },
    { label: 'Активных пользователей', value: '12,450', icon: 'Users' },
    { label: 'Валют', value: '150+', icon: 'Coins' },
    { label: 'Комиссия', value: '0.1%', icon: 'Percent' },
  ];

  const bonuses = [
    { title: 'Приветственный бонус', amount: '+50 TON', condition: 'За верификацию' },
    { title: 'Реферальная программа', amount: '10%', condition: 'От оборота друзей' },
    { title: 'Ежедневный кешбэк', amount: 'до 5%', condition: 'От объёма торгов' },
  ];

  const faq = [
    {
      question: 'Как работает верификация?',
      answer: 'Для верификации необходимо внести 10 TON на депозит. После подтверждения транзакции вы получите полный доступ ко всем функциям платформы и приветственный бонус 50 TON.',
    },
    {
      question: 'Какие валюты поддерживаются?',
      answer: 'Платформа поддерживает более 150 криптовалют включая BTC, ETH, TON, USDT, USDC и другие популярные токены.',
    },
    {
      question: 'Какая комиссия за обмен?',
      answer: 'Стандартная комиссия составляет 0.1% от суммы обмена. Для верифицированных пользователей действуют дополнительные скидки.',
    },
    {
      question: 'Как быстро происходит обмен?',
      answer: 'Обмен происходит моментально после подтверждения транзакции в блокчейне. Обычно это занимает от 30 секунд до 5 минут.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wallet" size={28} className="text-primary" />
            <h1 className="text-2xl font-bold">CryptoExchange</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#exchange" className="text-sm hover:text-primary transition-colors">Обмен</a>
            <a href="#verification" className="text-sm hover:text-primary transition-colors">Верификация</a>
            <a href="#bonuses" className="text-sm hover:text-primary transition-colors">Бонусы</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
            <a href="#support" className="text-sm hover:text-primary transition-colors">Поддержка</a>
          </nav>
          <Button size="sm">
            <Icon name="LogIn" size={16} className="mr-2" />
            Войти
          </Button>
        </div>
      </header>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/61305a6b-05ff-4584-8696-c4dda2265728/files/96e9151b-4b7f-426b-bcad-25a86fe36421.jpg" 
            alt="Crypto background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
        </div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Надёжный обмен с 2020 года</Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Криптовалютная платформа нового поколения
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Обменивайте криптовалюту безопасно и выгодно. Получайте бонусы за активность. Торгуйте с минимальными комиссиями.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-4 text-center">
                  <Icon name={stat.icon as any} size={24} className="mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="exchange" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">Обмен криптовалюты</h3>
            <p className="text-muted-foreground">Моментальный обмен по лучшему курсу</p>
          </div>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <Tabs defaultValue="buy" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="buy">Купить</TabsTrigger>
                  <TabsTrigger value="sell">Продать</TabsTrigger>
                </TabsList>
                <TabsContent value="buy" className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Вы отдаёте</label>
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        value={fromAmount}
                        onChange={(e) => setFromAmount(e.target.value)}
                        className="flex-1 bg-secondary"
                      />
                      <Button variant="outline" className="w-32">
                        <Icon name="DollarSign" size={16} className="mr-2" />
                        USDT
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Icon name="ArrowDownUp" size={20} />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Вы получаете</label>
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        value={toAmount}
                        onChange={(e) => setToAmount(e.target.value)}
                        className="flex-1 bg-secondary"
                      />
                      <Button variant="outline" className="w-32">
                        <Icon name="Coins" size={16} className="mr-2" />
                        TON
                      </Button>
                    </div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Курс:</span>
                      <span>1 TON = 19.8 USDT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Комиссия:</span>
                      <span className="text-accent">0.1%</span>
                    </div>
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="ArrowRightLeft" size={18} className="mr-2" />
                    Обменять
                  </Button>
                </TabsContent>
                <TabsContent value="sell" className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Вы отдаёте</label>
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        value={toAmount}
                        onChange={(e) => setToAmount(e.target.value)}
                        className="flex-1 bg-secondary"
                      />
                      <Button variant="outline" className="w-32">
                        <Icon name="Coins" size={16} className="mr-2" />
                        TON
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Icon name="ArrowDownUp" size={20} />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Вы получаете</label>
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        value={fromAmount}
                        onChange={(e) => setFromAmount(e.target.value)}
                        className="flex-1 bg-secondary"
                      />
                      <Button variant="outline" className="w-32">
                        <Icon name="DollarSign" size={16} className="mr-2" />
                        USDT
                      </Button>
                    </div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Курс:</span>
                      <span>1 TON = 19.8 USDT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Комиссия:</span>
                      <span className="text-accent">0.1%</span>
                    </div>
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="ArrowRightLeft" size={18} className="mr-2" />
                    Обменять
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="verification" className="py-16 px-4 relative">
        <div className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-10 hidden lg:block">
          <img 
            src="https://cdn.poehali.dev/projects/61305a6b-05ff-4584-8696-c4dda2265728/files/775f3320-a17b-43c9-94f5-ae3842e29cc6.jpg" 
            alt="Verification" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2">Верификация аккаунта</h3>
            <p className="text-muted-foreground">Получите полный доступ и дополнительные бонусы</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="User" size={24} />
                  Базовый аккаунт
                </CardTitle>
                <CardDescription>Ограниченный функционал</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Check" size={16} className="text-muted-foreground" />
                  <span>Обмен до $500/день</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Check" size={16} className="text-muted-foreground" />
                  <span>Базовая комиссия 0.1%</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="X" size={16} className="text-destructive" />
                  <span>Нет доступа к бонусам</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="X" size={16} className="text-destructive" />
                  <span>Нет приоритетной поддержки</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="ShieldCheck" size={24} className="text-primary" />
                  Верифицированный аккаунт
                </CardTitle>
                <CardDescription>Все преимущества платформы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Check" size={16} className="text-accent" />
                  <span>Неограниченный обмен</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Check" size={16} className="text-accent" />
                  <span>Сниженная комиссия 0.05%</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Check" size={16} className="text-accent" />
                  <span>Бонус +50 TON при регистрации</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Check" size={16} className="text-accent" />
                  <span>Приоритетная поддержка 24/7</span>
                </div>
                <div className="pt-4">
                  {!isVerified ? (
                    <Button className="w-full" size="lg" onClick={() => setIsVerified(true)}>
                      <Icon name="Lock" size={18} className="mr-2" />
                      Верифицировать за 10 TON
                    </Button>
                  ) : (
                    <Badge className="w-full justify-center py-3 bg-accent text-accent-foreground">
                      <Icon name="CheckCircle" size={18} className="mr-2" />
                      Аккаунт верифицирован
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="bonuses" className="py-16 px-4 bg-secondary/30 relative overflow-hidden">
        <div className="absolute left-0 top-1/3 w-1/4 h-1/3 opacity-15 hidden lg:block">
          <img 
            src="https://cdn.poehali.dev/projects/61305a6b-05ff-4584-8696-c4dda2265728/files/6ee1ff75-d388-47a3-9b99-c2e53d0e039a.jpg" 
            alt="Bonuses" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2">Бонусная программа</h3>
            <p className="text-muted-foreground">Зарабатывайте больше с нашими бонусами</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {bonuses.map((bonus, idx) => (
              <Card key={idx} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{bonus.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">{bonus.amount}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{bonus.condition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2">Частые вопросы</h3>
            <p className="text-muted-foreground">Ответы на популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="support" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl text-center">
          <Icon name="Headphones" size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-3xl font-bold mb-4">Нужна помощь?</h3>
          <p className="text-muted-foreground mb-8">
            Наша служба поддержки работает 24/7 и всегда готова помочь вам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Открыть чат
            </Button>
            <Button size="lg">
              <Icon name="Mail" size={18} className="mr-2" />
              support@cryptoexchange.com
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2024 CryptoExchange. Все права защищены.</p>
          <p className="mt-2">Торговля криптовалютой сопряжена с рисками. Инвестируйте ответственно.</p>
        </div>
      </footer>
    </div>
  );
}