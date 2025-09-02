"use client";
import "../../styles/projects.css";
import React, {useState} from "react";
import CardTrabajo from "@/components/CardTrabajo";
import FiltrosTrabajos from "@/components/FiltrosTrabajo";
import ModalTrabajos from "@/components/ModalTrabajos";
import Carousel from "@/components/Carousel";
import CardCurso from "@/components/CardCurso";

export default function ProjectsPage() {
  const [cursoSeleccionado, setCursoSeleccionado] = useState<null | { codigo: string; nombre: string; }>(null);

    // Mock data para trabajos, pa ver como se ve
    const trabajosEjemplo = [
    {
      nombre: "Sitio Web Personal",
      tipo: "Proyecto",
      descripcion: "Desarrollo de un sitio web personal usando React y CSS.",
      fecha: "2025-05-10",
      tecnologias: ["React", "CSS", "Vercel"],
      repoUrl: "https://github.com/",
      deployUrl: "https://sitio-increible.com",
    },
    {
      nombre: "Laboratorio de HTML",
      tipo: "Laboratorio",
      descripcion: "Práctica de etiquetas semánticas y estructura básica HTML.",
      fecha: "2025-03-15",
      tecnologias: ["HTML", "CSS"],
      repoUrl: "",
      deployUrl: "",
    },
        {
      nombre: "Laboratorio de HTML",
      tipo: "Laboratorio",
      descripcion: "Práctica de etiquetas semánticas y estructura básica HTML.",
      fecha: "2025-03-15",
      tecnologias: ["HTML", "CSS"],
      repoUrl: "",
      deployUrl: "",
    },
        {
      nombre: "Laboratorio de HTML",
      tipo: "Laboratorio",
      descripcion: "Práctica de etiquetas semánticas y estructura básica HTML.",
      fecha: "2025-03-15",
      tecnologias: ["HTML", "CSS"],
      repoUrl: "",
      deployUrl: "",
    },
        {
      nombre: "Laboratorio de HTML",
      tipo: "Laboratorio",
      descripcion: "Práctica de etiquetas semánticas y estructura básica HTML.",
      fecha: "2025-03-15",
      tecnologias: ["HTML", "CSS"],
      repoUrl: "",
      deployUrl: "",
    },
        {
      nombre: "Laboratorio de HTML",
      tipo: "Laboratorio",
      descripcion: "Práctica de etiquetas semánticas y estructura básica HTML.",
      fecha: "2025-03-15",
      tecnologias: ["HTML", "CSS"],
      repoUrl: "",
      deployUrl: "",
    },
    
  ];

  return (
    <main className="projects-container">
      <h1 className="projects-title">Proyectos</h1>
      <p className="project-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum sem urna at sapien.
      </p>
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
          <h3 className="filtros-title">Filtrar por: </h3>
          <FiltrosTrabajos />
        </section>
        <section className="trabajos-list">
          {/* creacion dinamoca de cards de trabajos */}
          {trabajosEjemplo.map((trabajo, idx) => (
            <CardTrabajo key={idx} {...trabajo} />
          ))}
        </section>
      </ModalTrabajos>
    </main>
  );
}
