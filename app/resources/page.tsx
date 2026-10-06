
import CaritaArticles from "./articles/page";
import CaritaDirectory from "./directory/page";
import CaritaGuides from "./guide/page";
import CaritaTemplates from "./templates/page";

export default function AboutPage() {
  return (
    <main>
        <CaritaArticles />
        <CaritaGuides />
        <CaritaTemplates />
        <CaritaDirectory />
    </main>
  );
}