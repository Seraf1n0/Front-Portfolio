import "../../styles/projects.css";
import Carousel from "@/components/Carousel";
import CardCurso from "@/components/CardCurso";

export default function ProjectsPage() {
  return (
    <main className="projects-container">
      <h1>Proyectos</h1>
      <p>Página para proyectos realizados en los cursos</p>
      <Carousel>
        <CardCurso
          codigo="IC8057"
          nombre="Introducción al Desarrollo de Páginas Web" 
          semestre="II"
          periodo="2025"
          descripcion="Curso sobre fundamentos de desarrollo web, HTML, CSS, JS, etc."
        />
      </Carousel>
    </main>
  );
}
