import { Play } from "lucide-react";

const PodcastBanner = () => {
  return (
    <div className="relative bg-gradient-primary rounded-xl p-6 overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 rounded-full p-3">
            <Play className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold">
              SwapSpace <span className="text-yellow-300">Podcast</span> is on <span className="underline">YouTube</span>
            </p>
            <p className="text-white/80 text-sm">Master crypto with expert insights!</p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 right-4 w-20 h-20 bg-yellow-300/20 rounded-full translate-y-10"></div>
    </div>
  );
};

export default PodcastBanner;