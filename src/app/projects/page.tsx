"use client";
import "../../styles/projects.css";
import React, {useState} from "react";
import CardTrabajo from "@/components/CardTrabajo";
import FiltrosTrabajos from "@/components/FiltrosTrabajo";
import ModalTrabajos from "@/components/ModalTrabajos";
import CardCurso from "@/components/CardCurso";

export default function ProjectsPage() {
  const [cursoSeleccionado, setCursoSeleccionado] = useState<null | { codigo: string; nombre: string; }>(null);

  // Mock data para cursos
  const cursosEjemplo = [
    {
      codigo: "CI-0137",
      nombre: "Programación Orientada a Objetos",
      semestre: "3",
      periodo: "2023-I",
      descripcion: "Introducción a los conceptos de programación orientada a objetos utilizando Java."
    },
    {
      codigo: "CI-0128",
      nombre: "Estructuras Discretas",
      semestre: "2",
      periodo: "2022-II",
      descripcion: "Fundamentos matemáticos para ciencias de la computación incluyendo lógica y teoría de conjuntos."
    },
    {
      codigo: "CI-0148",
      nombre: "Análisis de Algoritmos",
      semestre: "4",
      periodo: "2023-II",
      descripcion: "Estudio de la complejidad computacional y técnicas de análisis de algoritmos."
    },
    {
      codigo: "CI-0158",
      nombre: "Bases de Datos",
      semestre: "5",
      periodo: "2024-I",
      descripcion: "Diseño, implementación y administración de sistemas de bases de datos relacionales."
    },
    {
      codigo: "CI-0168",
      nombre: "Desarrollo Web",
      semestre: "6",
      periodo: "2024-II",
      descripcion: "Tecnologías front-end y back-end para el desarrollo de aplicaciones web modernas."
    },
    {
      codigo: "CI-0178",
      nombre: "Ingeniería de Software",
      semestre: "7",
      periodo: "2025-I",
      descripcion: "Metodologías y herramientas para el desarrollo profesional de software a gran escala."
    }
  ];

  // Mock data para trabajos, para mostrar en el modal
  const trabajosEjemplo = [
    {
      nombre: "Sistema de Gestión de Biblioteca",
      tipo: "Proyecto",
      descripcion: "Aplicación web completa para gestionar préstamos de libros con autenticación de usuarios.",
      fecha: "2025-05-10",
      tecnologias: ["React", "Node.js", "MongoDB", "Express"],
      repoUrl: "https://github.com/usuario/biblioteca",
      deployUrl: "https://biblioteca-sistema.com",
    },
    {
      nombre: "Laboratorio de HTML Semántico",
      tipo: "Laboratorio",
      descripcion: "Práctica de etiquetas semánticas y estructura básica HTML5 con accesibilidad.",
      fecha: "2025-03-15",
      tecnologias: ["HTML5", "CSS3", "Accessibility"],
      repoUrl: "https://github.com/usuario/html-lab",
      deployUrl: "",
    },
    {
      nombre: "API REST de Productos",
      tipo: "Tarea",
      descripcion: "Desarrollo de una API REST para manejo de inventario con autenticación JWT.",
      fecha: "2025-04-20",
      tecnologias: ["Node.js", "Express", "JWT", "PostgreSQL"],
      repoUrl: "https://github.com/usuario/productos-api",
      deployUrl: "",
    },
    {
      nombre: "Análisis de Complejidad",
      tipo: "Investigación",
      descripcion: "Documento de investigación sobre algoritmos de ordenamiento y su complejidad temporal.",
      fecha: "2025-02-28",
      tecnologias: ["Python", "Matplotlib", "LaTeX"],
      repoUrl: "",
      deployUrl: "",
    }
  ];

  const handleCursoClick = (curso: { codigo: string; nombre: string; }) => {
    setCursoSeleccionado(curso);
  };

  return (
    <main className="projects-container">
      <header className="projects-header">
        <h1 className="projects-title">Proyectos Académicos</h1>
        <p className="projects-desc">
          Explora los diferentes cursos de mi carrera y los proyectos desarrollados en cada uno. 
          Cada curso incluye laboratorios, tareas, proyectos e investigaciones que demuestran 
          el progreso y aprendizaje en diferentes áreas de la ingeniería en computación.
        </p>
      </header>

      {/* Grid de cursos */}
      <section className="cursos-section">
        <h2 className="cursos-section-title">Cursos por Semestre</h2>
        <div className="cursos-grid">
          {cursosEjemplo.map((curso) => (
            <CardCurso 
              key={curso.codigo}
              {...curso} 
              onclick={() => handleCursoClick(curso)}
            />
          ))}
        </div>
      </section>

      {/* Modal para mostrar trabajos del curso seleccionado */}
      <ModalTrabajos 
        open={!!cursoSeleccionado} 
        onClose={() => setCursoSeleccionado(null)}
      >
        <div className="modal-header">
          <h2 className="modal-title">
            Trabajos del Curso: {cursoSeleccionado?.nombre}
          </h2>
          <p className="modal-subtitle">Código: {cursoSeleccionado?.codigo}</p>
        </div>
        
        <section className="filtros-section">
          <h3 className="filtros-title">Filtrar trabajos por:</h3>
          <FiltrosTrabajos />
        </section>
        
        <section className="trabajos-section">
          <h3 className="trabajos-section-title">Lista de Trabajos</h3>
          <div className="trabajos-grid">
            {trabajosEjemplo.map((trabajo, idx) => (
              <CardTrabajo key={idx} {...trabajo} />
            ))}
          </div>
        </section>
      </ModalTrabajos>
    </main>
  );
}