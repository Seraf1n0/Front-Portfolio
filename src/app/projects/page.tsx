"use client";
import "../../styles/projects.css";
import React, {useState} from "react";
import FiltrosTrabajos from "@/components/FiltrosTrabajo";
import ModalTrabajos from "@/components/ModalTrabajos";
import Carousel from "@/components/Carousel";
import CardCurso from "@/components/CardCurso";

export default function ProjectsPage() {
  const [cursoSeleccionado, setCursoSeleccionado] = useState<null | { codigo: string; nombre: string; }>(null);

  return (
    <main className="projects-container">
      <h1>Proyectos</h1>
      <p>Página para proyectos realizados en los cursos</p>
      <Carousel>
        {/* card estatica, luego dinamica con fetch a backend */}
        <CardCurso
          codigo="IC8057"
          nombre="Introducción al Desarrollo de Páginas Web" 
          semestre="II"
          periodo="2025"
          descripcion="Curso sobre fundamentos de desarrollo web, HTML, CSS, JS, etc."
          onclick={() => setCursoSeleccionado({
            codigo: "IC8057",
            nombre: "Introducción al Desarrollo de Páginas Web"
          })}
        />
      </Carousel>
      <ModalTrabajos open={!!cursoSeleccionado} onClose={() => setCursoSeleccionado(null)}>
        <h2>Trabajos del Curso {cursoSeleccionado?.nombre} - {cursoSeleccionado?.codigo}</h2>
        <section className="filtros-section">
          <FiltrosTrabajos />
        </section>
        <section className="trabajos-list">

        </section>
        {/* cardsTrabajo y filtros */}
      </ModalTrabajos>
    </main>
  );
}
