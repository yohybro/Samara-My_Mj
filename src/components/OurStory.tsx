import { BookHeart } from "lucide-react";

export const OurStory = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-background to-card web-pattern">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <BookHeart className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-5xl font-bold comic-text mb-4">Our Story</h2>
          <p className="text-muted-foreground text-lg italic">
            Just like Peter & MJ, but our own adventure
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Story panels like comic book */}
          <div className="bg-card border-4 border-primary/50 rounded-lg p-6 transform hover:scale-105 transition-transform">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-2xl">🕷️</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-primary">Chapter 1: The Meeting</h3>
            <p className="text-foreground/90 leading-relaxed">
              Our paths crossed like destiny itself. From the moment I saw you, 
              I knew my world would never be the same. You became my reason to be better.
            </p>
          </div>

          <div className="bg-card border-4 border-secondary/50 rounded-lg p-6 transform hover:scale-105 transition-transform">
            <div className="bg-secondary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-2xl">❤️</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-secondary">Chapter 2: Falling</h3>
            <p className="text-foreground/90 leading-relaxed">
              Every moment with you felt like swinging through the city - 
              exhilarating, breathtaking, and absolutely perfect. I fell, and kept falling.
            </p>
          </div>

          <div className="bg-card border-4 border-primary/50 rounded-lg p-6 transform hover:scale-105 transition-transform">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-primary">Chapter 3: Growing Together</h3>
            <p className="text-foreground/90 leading-relaxed">
              Through every challenge, every victory, every quiet moment - 
              you've been my anchor, my inspiration, my home.
            </p>
          </div>

          <div className="bg-card border-4 border-secondary/50 rounded-lg p-6 transform hover:scale-105 transition-transform">
            <div className="bg-secondary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-2xl">💫</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-secondary">Chapter 4: Forever</h3>
            <p className="text-foreground/90 leading-relaxed">
              This is just the beginning. Our story continues to unfold, 
              and I promise to cherish every page, every moment with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
