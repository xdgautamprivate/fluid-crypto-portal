const PartnerLogos = () => {
  const partners = [
    "1inch",
    "BYBIT", 
    "MEXC",
    "HTX",
    "changelly",
    "EasyBit",
    "SimpleSwap"
  ];

  return (
    <div className="py-16 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-60">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-muted-foreground text-lg font-semibold hover:text-foreground transition-colors cursor-pointer"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;