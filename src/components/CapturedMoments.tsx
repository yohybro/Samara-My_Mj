import { Camera, Heart } from "lucide-react";
import heroineImage from "@/assets/heroine.png";

export const CapturedMoments = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-background to-card web-pattern">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Camera className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-5xl font-bold comic-text mb-4">Captured Moments</h2>
          <p className="text-muted-foreground text-lg italic">
            Every snapshot tells our story
          </p>
        </div>

        {/* Featured image - the uploaded photo */}
        <div className="mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
            
            <div className="relative bg-card border-8 border-primary rounded-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
              <img 
                src={heroineImage}
                alt="My Beautiful Heroine"
                className="w-full h-auto max-h-[600px] object-cover"
              />
              
              {/* Photo caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-6 h-6 text-primary animate-[heartBeat_2s_ease-in-out_infinite]" />
                  <Heart className="w-5 h-5 text-secondary animate-[heartBeat_2s_ease-in-out_infinite_0.3s]" />
                  <Heart className="w-4 h-4 text-primary animate-[heartBeat_2s_ease-in-out_infinite_0.6s]" />
                </div>
                <h3 className="text-2xl font-bold glow-text mb-2">
                  My Everyday Superhero
                </h3>
                <p className="text-foreground/80 text-lg">
                  You don't need a cape to be extraordinary. You just need to be you. 💕
                </p>
              </div>

              {/* Comic-style starburst effect */}
              <div className="absolute top-4 right-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary blur-xl opacity-50 animate-pulse" />
                  <div className="relative bg-primary text-primary-foreground font-bold px-4 py-2 rounded-full border-4 border-foreground/20 transform rotate-12">
                    ★ AMAZING! ★
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comic caption */}
        <div className="mt-12 text-center">
          <div className="relative inline-block bg-card border-4 border-secondary rounded-3xl px-8 py-4 max-w-xl">
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[24px] border-t-secondary" />
            <p className="text-lg font-semibold italic">
              "Every photo with you is a masterpiece!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
