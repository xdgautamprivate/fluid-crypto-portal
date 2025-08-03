import Header from "@/components/Header";
import ExchangeForm from "@/components/ExchangeForm";
import TrustpilotRating from "@/components/TrustpilotRating";
import PartnerLogos from "@/components/PartnerLogos";
import PodcastBanner from "@/components/PodcastBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                More than
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  a crypto exchange
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                We pick the best — you make a choice
              </p>
              
              <TrustpilotRating />
            </div>
            
            <PodcastBanner />
          </div>
          
          {/* Right Side - Exchange Form */}
          <div className="flex justify-center lg:justify-end">
            <ExchangeForm />
          </div>
        </div>
      </main>
      
      {/* Partners Section */}
      <PartnerLogos />
      
      {/* Swap Tracker Section */}
      <div className="bg-card/30 border-t border-border/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">Swap Tracker</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Track your swap"
              className="bg-secondary border border-border rounded-lg px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary max-w-xs"
            />
            <button className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Track
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
