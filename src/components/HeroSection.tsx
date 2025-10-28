import { Heart } from "lucide-react";
import heroineImage from "@/assets/heroine.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden web-pattern">
      {/* Animated Spider-Man silhouette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full opacity-70 blur-xl animate-[swing_20s_ease-in-out_infinite]" />
      </div>

      {/* Web decorations */}
      <div className="absolute top-10 left-10 w-64 h-64 border-l-2 border-t-2 border-primary/30 rounded-tl-full animate-[webPulse_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-10 right-10 w-64 h-64 border-r-2 border-b-2 border-secondary/30 rounded-br-full animate-[webPulse_4s_ease-in-out_infinite_2s]" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="mb-8 animate-[float_6s_ease-in-out_infinite]">
          <Heart className="w-16 h-16 mx-auto text-primary animate-[heartBeat_2s_ease-in-out_infinite]" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 comic-text">
          MY HEROINE
        </h1>
        
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary blur-2xl opacity-50 animate-pulse" />
          <img 
            src={heroineImage}
            alt="My Amazing Girlfriend"
            className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-primary shadow-2xl mx-auto"
          />
        </div>

        <p className="mt-8 text-xl md:text-2xl glow-text max-w-2xl mx-auto">
          With great power comes great responsibility... 
          <br />
          And with great love comes my whole heart 💕
        </p>

        {/* Comic speech bubble */}
        <div className="mt-12 relative inline-block bg-card border-4 border-primary rounded-3xl px-8 py-4 max-w-md">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[24px] border-b-primary" />
          <p className="text-lg font-semibold italic">
            "Every Spider-Man needs their MJ... You're mine!"
          </p>
        </div>
      </div>
    </section>
  );
};
