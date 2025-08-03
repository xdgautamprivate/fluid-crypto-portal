import { Star } from "lucide-react";

const TrustpilotRating = () => {
  return (
    <div className="flex items-center space-x-2 bg-accent/10 rounded-lg px-4 py-2 border border-accent/20">
      <span className="text-accent font-bold text-sm">★ Trustpilot</span>
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      <span className="text-accent font-bold">4.6</span>
    </div>
  );
};

export default TrustpilotRating;