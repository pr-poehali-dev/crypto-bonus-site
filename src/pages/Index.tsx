import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [fromAmount, setFromAmount] = useState('1000');
  const [toAmount, setToAmount] = useState('50.5');
  const [isVerified, setIsVerified] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showWallet, setShowWallet] = useState(false);
  const [depositAmount, setDepositAmount] = useState('');
  const [depositCurrency, setDepositCurrency] = useState('TON');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawCurrency, setWithdrawCurrency] = useState('TON');
  const [withdrawAddress, setWithdrawAddress] = useState('');
  const [showDepositDialog, setShowDepositDialog] = useState(false);
  const [showWithdrawDialog, setShowWithdrawDialog] = useState(false);

  const handleDeposit = () => {
    if (!depositAmount || parseFloat(depositAmount) <= 0) {
      toast({ title: 'Ошибка', description: 'Укажите сумму пополнения', variant: 'destructive' });
      return;
    }
    
    if (depositCurrency === 'TON' && parseFloat(depositAmount) >= 10 && !isVerified) {
      setIsVerified(true);
      toast({ 
        title: 'Успех!', 
        description: `Пополнение на ${depositAmount} ${depositCurrency} в обработке. Аккаунт верифицирован! Бонус +50 TON начислен.`,
      });
    } else {
      toast({ 
        title: 'Успех!', 
        description: `Пополнение на ${depositAmount} ${depositCurrency} в обработке`,
      });
    }
    
    setDepositAmount('');
    setShowDepositDialog(false);
  };

  const handleWithdraw = () => {
    if (!withdrawAmount || parseFloat(withdrawAmount) <= 0) {
      toast({ title: 'Ошибка', description: 'Укажите сумму вывода', variant: 'destructive' });
      return;
    }
    if (!withdrawAddress) {
      toast({ title: 'Ошибка', description: 'Укажите адрес кошелька', variant: 'destructive' });
      return;
    }
    
    toast({ 
      title: 'Успех!', 
      description: `Вывод ${withdrawAmount} ${withdrawCurrency} в обработке`,
    });
    
    setWithdrawAmount('');
    setWithdrawAddress('');
    setShowWithdrawDialog(false);
  };

  const wallet = {
    balances: [
      { currency: 'TON', amount: 125.5, usd: 2487.9, icon: 'Coins' },
      { currency: 'USDT', amount: 3420.0, usd: 3420.0, icon: 'DollarSign' },
      { currency: 'BTC', amount: 0.045, usd: 1890.0, icon: 'Bitcoin' },
      { currency: 'ETH', amount: 1.2, usd: 2280.0, icon: 'Coins' },
    ],
    totalUsd: 10077.9,
  };

  const transactions = [
    { id: 1, type: 'Обмен', from: 'USDT', to: 'TON', amount: '1000 USDT', received: '50.5 TON', status: 'Завершено', date: '22.10.2024 14:30', success: true },
    { id: 2, type: 'Пополнение', from: '-', to: 'USDT', amount: '-', received: '5000 USDT', status: 'Завершено', date: '21.10.2024 09:15', success: true },
    { id: 3, type: 'Верификация', from: 'TON', to: '-', amount: '10 TON', received: '-', status: 'Завершено', date: '20.10.2024 16:45', success: true },
    { id: 4, type: 'Обмен', from: 'BTC', to: 'ETH', amount: '0.01 BTC', received: '0.2 ETH', status: 'В обработке', date: '22.10.2024 15:20', success: false },
    { id: 5, type: 'Бонус', from: '-', to: 'TON', amount: '-', received: '50 TON', status: 'Завершено', date: '20.10.2024 16:46', success: true },
  ];

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
          {isLoggedIn ? (
            <Button size="sm" onClick={() => setShowWallet(!showWallet)}>
              <Icon name="Wallet" size={16} className="mr-2" />
              Кошелёк
            </Button>
          ) : (
            <Button size="sm" onClick={() => setIsLoggedIn(true)}>
              <Icon name="LogIn" size={16} className="mr-2" />
              Войти
            </Button>
          )}
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

      {showWallet && isLoggedIn && (
        <section id="wallet" className="py-16 px-4 bg-secondary/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Мой кошелёк</h3>
              <p className="text-muted-foreground">Управляйте своими активами</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <Card className="lg:col-span-1 border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Wallet" size={20} />
                    Общий баланс
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-primary mb-2">
                    ${wallet.totalUsd.toLocaleString('ru-RU', { minimumFractionDigits: 2 })}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Эквивалент в USD</p>
                  <div className="flex gap-2">
                    <Dialog open={showDepositDialog} onOpenChange={setShowDepositDialog}>
                      <DialogTrigger asChild>
                        <Button className="flex-1" size="sm">
                          <Icon name="Plus" size={14} className="mr-1" />
                          Пополнить
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Пополнение кошелька</DialogTitle>
                          <DialogDescription>
                            {!isVerified && 'Пополните на 10 TON или больше для автоматической верификации и получения бонуса +50 TON'}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <Label>Валюта</Label>
                            <Tabs value={depositCurrency} onValueChange={setDepositCurrency}>
                              <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="TON">TON</TabsTrigger>
                                <TabsTrigger value="USDT">USDT</TabsTrigger>
                                <TabsTrigger value="BTC">BTC</TabsTrigger>
                                <TabsTrigger value="ETH">ETH</TabsTrigger>
                              </TabsList>
                            </Tabs>
                          </div>
                          <div className="space-y-2">
                            <Label>Сумма</Label>
                            <Input
                              type="number"
                              placeholder="0.00"
                              value={depositAmount}
                              onChange={(e) => setDepositAmount(e.target.value)}
                            />
                          </div>
                          {!isVerified && depositCurrency === 'TON' && parseFloat(depositAmount) >= 10 && (
                            <div className="bg-accent/10 border border-accent rounded-lg p-3">
                              <div className="flex items-start gap-2">
                                <Icon name="Gift" size={18} className="text-accent mt-0.5" />
                                <div className="text-sm">
                                  <div className="font-semibold text-accent">Бонус за верификацию!</div>
                                  <div className="text-muted-foreground">После пополнения вы получите +50 TON</div>
                                </div>
                              </div>
                            </div>
                          )}
                          <Button onClick={handleDeposit} className="w-full">
                            Продолжить
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Dialog open={showWithdrawDialog} onOpenChange={setShowWithdrawDialog}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex-1" size="sm">
                          <Icon name="Minus" size={14} className="mr-1" />
                          Вывести
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Вывод средств</DialogTitle>
                          <DialogDescription>
                            Укажите сумму и адрес кошелька для вывода
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <Label>Валюта</Label>
                            <Tabs value={withdrawCurrency} onValueChange={setWithdrawCurrency}>
                              <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="TON">TON</TabsTrigger>
                                <TabsTrigger value="USDT">USDT</TabsTrigger>
                                <TabsTrigger value="BTC">BTC</TabsTrigger>
                                <TabsTrigger value="ETH">ETH</TabsTrigger>
                              </TabsList>
                            </Tabs>
                          </div>
                          <div className="space-y-2">
                            <Label>Сумма</Label>
                            <Input
                              type="number"
                              placeholder="0.00"
                              value={withdrawAmount}
                              onChange={(e) => setWithdrawAmount(e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Адрес кошелька</Label>
                            <Input
                              placeholder={`Введите ${withdrawCurrency} адрес`}
                              value={withdrawAddress}
                              onChange={(e) => setWithdrawAddress(e.target.value)}
                            />
                          </div>
                          <Button onClick={handleWithdraw} className="w-full">
                            Вывести средства
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Coins" size={20} />
                    Активы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {wallet.balances.map((balance, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Icon name={balance.icon as any} size={20} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">{balance.currency}</div>
                          <div className="text-sm text-muted-foreground">
                            {balance.amount.toLocaleString('ru-RU', { minimumFractionDigits: balance.currency === 'BTC' ? 3 : 1 })}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${balance.usd.toLocaleString('ru-RU', { minimumFractionDigits: 2 })}</div>
                        <div className="text-xs text-muted-foreground">
                          {((balance.usd / wallet.totalUsd) * 100).toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="History" size={20} />
                  История операций
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.success ? 'bg-accent/20' : 'bg-muted'}`}>
                          <Icon 
                            name={tx.type === 'Обмен' ? 'ArrowRightLeft' : tx.type === 'Пополнение' ? 'ArrowDown' : tx.type === 'Верификация' ? 'ShieldCheck' : 'Gift'} 
                            size={18} 
                            className={tx.success ? 'text-accent' : 'text-muted-foreground'} 
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{tx.type}</div>
                          <div className="text-sm text-muted-foreground">{tx.date}</div>
                        </div>
                      </div>
                      <div className="text-right hidden sm:block">
                        <div className="text-sm">
                          {tx.from !== '-' && <span className="text-muted-foreground">{tx.amount} → </span>}
                          {tx.to !== '-' && <span className="text-foreground font-medium">{tx.received}</span>}
                        </div>
                        <Badge variant={tx.success ? 'default' : 'secondary'} className="text-xs mt-1">
                          {tx.status}
                        </Badge>
                      </div>
                      <div className="sm:hidden">
                        <Badge variant={tx.success ? 'default' : 'secondary'} className="text-xs">
                          {tx.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

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
                    <div className="space-y-3">
                      <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 text-sm">
                        <div className="flex items-start gap-2">
                          <Icon name="Info" size={16} className="text-primary mt-0.5" />
                          <div>
                            <div className="font-semibold text-primary mb-1">Как получить верификацию?</div>
                            <div className="text-muted-foreground">
                              Пополните кошелёк на 10 TON или больше через раздел "Кошелёк" и получите автоматическую верификацию + бонус 50 TON
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button 
                        className="w-full" 
                        size="lg" 
                        onClick={() => {
                          setShowWallet(true);
                          setShowDepositDialog(true);
                        }}
                      >
                        <Icon name="ArrowUp" size={18} className="mr-2" />
                        Пополнить на 10 TON
                      </Button>
                    </div>
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