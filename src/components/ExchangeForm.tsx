import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpDown, Bitcoin, Coins } from "lucide-react";

const ExchangeForm = () => {
  const [fromAmount, setFromAmount] = useState("0.1");
  const [toAmount, setToAmount] = useState("3.24344973");
  const [fromCurrency, setFromCurrency] = useState("BTC");
  const [toCurrency, setToCurrency] = useState("ETH");

  const cryptoOptions = [
    { symbol: "BTC", name: "Bitcoin", icon: Bitcoin },
    { symbol: "ETH", name: "Ethereum", icon: Coins },
    { symbol: "USDT", name: "Tether", icon: Coins },
    { symbol: "USDC", name: "USD Coin", icon: Coins },
  ];

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <Card className="w-full max-w-md bg-gradient-card border-border/50 shadow-card">
      <CardContent className="p-6">
        {/* Tab Buttons */}
        <div className="flex mb-6 p-1 bg-secondary rounded-lg">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90"
          >
            Exchange crypto
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground hover:text-foreground">
            Buy/Sell crypto
          </Button>
        </div>

        <div className="space-y-4">
          {/* From Section */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">You send</label>
            <div className="relative">
              <input
                type="text"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-lg font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="bg-transparent text-foreground font-medium focus:outline-none cursor-pointer"
                >
                  {cryptoOptions.map((option) => (
                    <option key={option.symbol} value={option.symbol} className="bg-card">
                      {option.symbol}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">From</p>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSwapCurrencies}
              className="rounded-full p-2 hover:bg-muted"
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>

          {/* To Section */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">You get</label>
            <div className="relative">
              <input
                type="text"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-lg font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="bg-transparent text-foreground font-medium focus:outline-none cursor-pointer"
                >
                  {cryptoOptions.map((option) => (
                    <option key={option.symbol} value={option.symbol} className="bg-card">
                      {option.symbol}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">To</p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Button className="w-full bg-gradient-primary hover:opacity-90 text-lg font-medium h-12">
              VIEW OFFERS
            </Button>
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 h-12">
              QUICK EXCHANGE
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExchangeForm;