import { Heart, Sparkles } from "lucide-react";

export const FinalNote = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-card to-background overflow-hidden">
      {/* Animated web decorations */}
      <div className="absolute inset-0 web-pattern opacity-50" />
      
      {/* Floating hearts */}
      <div className="absolute top-20 left-10 animate-[float_4s_ease-in-out_infinite]">
        <Heart className="w-8 h-8 text-primary opacity-30" />
      </div>
      <div className="absolute top-40 right-20 animate-[float_5s_ease-in-out_infinite_1s]">
        <Heart className="w-6 h-6 text-secondary opacity-30" />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-[float_6s_ease-in-out_infinite_2s]">
        <Sparkles className="w-10 h-10 text-primary opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        {/* Main love letter */}
        <div className="relative bg-gradient-to-br from-card to-background border-8 border-primary rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Decorative corners */}
          <div className="absolute top-2 left-2 w-12 h-12 border-t-4 border-l-4 border-secondary rounded-tl-2xl" />
          <div className="absolute top-2 right-2 w-12 h-12 border-t-4 border-r-4 border-secondary rounded-tr-2xl" />
          <div className="absolute bottom-2 left-2 w-12 h-12 border-b-4 border-l-4 border-secondary rounded-bl-2xl" />
          <div className="absolute bottom-2 right-2 w-12 h-12 border-b-4 border-r-4 border-secondary rounded-br-2xl" />

          <div className="mb-8">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Heart className="w-12 h-12 text-primary animate-[heartBeat_2s_ease-in-out_infinite]" />
              <Sparkles className="w-10 h-10 text-secondary animate-pulse" />
              <Heart className="w-12 h-12 text-primary animate-[heartBeat_2s_ease-in-out_infinite_0.5s]" />
            </div>
            <h2 className="text-6xl font-bold comic-text mb-4">
              To My Heroine
            </h2>
          </div>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="text-foreground/90">
              They say <span className="text-primary font-bold glow-text">"with great power comes great responsibility"</span>, 
              and loving you has been the greatest responsibility I've ever embraced.
            </p>

            <p className="text-foreground/90">
              You're not just my girlfriend – you're my <span className="text-secondary font-bold">partner</span>, 
              my <span className="text-primary font-bold">best friend</span>, 
              my <span className="text-secondary font-bold">inspiration</span>, 
              and my <span className="text-primary font-bold glow-text">everything</span>.
            </p>

            <p className="text-foreground/90">
              Every superhero has their MJ, the person who makes them want to be better, 
              who sees them for who they really are, who stands by them through every battle.
            </p>

            <p className="text-2xl font-bold glow-text">
              You are my MJ. You are my home. You are my heart. 💕
            </p>

            <p className="text-foreground/90">
              Thank you for choosing me. Thank you for believing in us. 
              Thank you for being the incredible, beautiful, amazing person you are.
            </p>

            <div className="mt-8 pt-8 border-t-2 border-primary/30">
              <p className="text-3xl font-bold comic-text">
                I love you more than words can say. 🕷️❤️
              </p>
              <p className="text-xl mt-4 italic text-muted-foreground">
                Forever your friendly neighborhood boyfriend
              </p>
            </div>
          </div>

          {/* Spider-web heart decoration */}
          <div className="mt-12 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-50 animate-pulse" />
              <div className="relative text-6xl">🕷️💕🕸️</div>
            </div>
          </div>
        </div>

        {/* Final comic bubble */}
        <div className="mt-12 relative inline-block bg-gradient-to-r from-primary to-secondary rounded-3xl px-8 py-4 border-4 border-foreground/20">
          <p className="text-xl font-bold text-primary-foreground">
            "With you, every day is an adventure. And I can't wait for all the chapters to come! 📖✨"
          </p>
        </div>
      </div>
    </section>
  );
};
