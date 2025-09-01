import Card from "@/components/Card";

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
          <p>Ingeniero en Computación, ...........</p>
        </Card>
        <Card title="Proyectos" href="/projects">
          <p>Puedes explorar algunos proyectos realizados a lo largo de mi carrera.</p>
        </Card>
        <Card title="Habilidades" href="/skills">
          <p>AngularJS, .NET, Node.js, SQL, y más.</p>
        </Card>
        <Card title="Comentarios" href="/comments">
          <p>Deja un comentario o feedback.</p>
        </Card>
        {/* las demás secciones iran aca, aun requiere mejora de estructura arriba. */}
      </section>
    </main>
  );
}
