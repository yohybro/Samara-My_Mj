import { Sparkles, Heart, Smile, Star, Zap, Crown } from "lucide-react";

export const Superpowers = () => {
  const powers = [
    {
      icon: Heart,
      title: "Infinite Kindness",
      description: "Your compassion knows no bounds, touching everyone you meet",
      color: "text-primary"
    },
    {
      icon: Smile,
      title: "Contagious Joy",
      description: "Your smile can light up the darkest room and brighten any day",
      color: "text-secondary"
    },
    {
      icon: Star,
      title: "Natural Beauty",
      description: "Inside and out, you radiate a beauty that takes my breath away",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Unstoppable Strength",
      description: "You face every challenge with grace and determination",
      color: "text-secondary"
    },
    {
      icon: Sparkles,
      title: "Pure Magic",
      description: "Everything you touch becomes special, including my heart",
      color: "text-primary"
    },
    {
      icon: Crown,
      title: "Queen Energy",
      description: "You carry yourself with dignity, confidence, and absolute royalty",
      color: "text-secondary"
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold comic-text mb-4">Her Superpowers</h2>
          <p className="text-muted-foreground text-lg">
            Every superhero has abilities that make them extraordinary...
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {powers.map((power, index) => (
            <div 
              key={index}
              className="group relative bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <power.icon className="w-24 h-24" />
              </div>
              
              <div className={`${power.color} mb-4`}>
                <power.icon className="w-12 h-12" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 glow-text">
                {power.title}
              </h3>
              
              <p className="text-foreground/80 leading-relaxed">
                {power.description}
              </p>

              {/* Comic-style corner decoration */}
              <div className={`absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 ${power.color} opacity-50`} />
            </div>
          ))}
        </div>

        {/* Comic speech bubble */}
        <div className="mt-16 text-center">
          <div className="relative inline-block bg-gradient-to-r from-primary to-secondary rounded-3xl px-8 py-6 max-w-2xl border-4 border-foreground/20">
            <p className="text-xl font-bold text-primary-foreground">
              "With these powers combined, you're not just my girlfriend... 
              You're my superhero, my inspiration, my everything! 🕷️❤️"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
