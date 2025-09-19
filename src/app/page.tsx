import Card from "@/components/Card";
import "../styles/home.css";

export default function Home() {
  return (
    <main>
      <section className="intro">
        <h1>Hola, Soy Yosimar</h1>
        <p>Estudiante de Ingeniería en Computación.</p>
        <p>En este portafolio conocerás mis proyectos, habilidades y más.</p>
      </section>
      <section className="cards">
        <Card title="Sobre mí" href="/about">
          <p>Ingeniero en Computación, texto mieo</p>
        </Card>
        <Card title="Proyectos" href="/projects">
          <p>Puedes explorar algunos proyectos realizados a lo largo de mi carrera.</p>
        </Card>
        {/* las demás secciones iran aca, aun requiere mejora de estructura arriba. */}
      </section>
    </main>
  );
}
