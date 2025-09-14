import "../../styles/about.css";
import Card from "@/components/Card";

export default function AboutPage() {
  return (
    <main className="p-8">
        <section className="mb-8 main-section" id="about-me">
          <div className="mb-6 about-biography">
            <h1 className="text-3xl font-bold mb-4">Sobre mí</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <section className="mb-4 articles-container">
            
          </section>
          <section className="mb-4 about-container">
          </section>
        </section>
    </main>
  );
}