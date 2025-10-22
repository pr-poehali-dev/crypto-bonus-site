import { useEffect, useState } from 'react';

interface Coin {
  id: number;
  symbol: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function CryptoRain() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const symbols = ['₿', 'Ξ', '₮', '💎', '🪙'];

  useEffect(() => {
    const generateCoins = () => {
      const newCoins: Coin[] = [];
      for (let i = 0; i < 20; i++) {
        newCoins.push({
          id: i,
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 8 + Math.random() * 4,
          size: 20 + Math.random() * 20,
        });
      }
      setCoins(newCoins);
    };

    generateCoins();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="absolute animate-fall opacity-20"
          style={{
            left: `${coin.left}%`,
            top: '-50px',
            animationDelay: `${coin.delay}s`,
            animationDuration: `${coin.duration}s`,
            fontSize: `${coin.size}px`,
          }}
        >
          {coin.symbol}
        </div>
      ))}
    </div>
  );
}
