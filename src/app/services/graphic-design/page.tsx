import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graphic & Brand Design Services | RYX",
  description: "Bold, memorable designs that tell your brand story. Custom logos, brand identity, social media graphics, and print materials.",
  keywords: "graphic design, brand design, logo design, brand identity, social media graphics",
};

export default function GraphicDesignPage() {
  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Graphic & Brand Design</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Bold, memorable designs that tell your brand story. From logos to complete brand identity kits, 
          we create visuals that stick in your audience's mind and set you apart from the competition.
        </p>
        <div className="prose prose-lg max-w-none">
          <p>Content coming soon...</p>
        </div>
      </div>
    </div>
  );
}