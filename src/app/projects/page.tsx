"use client";
import "../../styles/projects.css";
import React, { useState, useEffect } from "react";
import CardTrabajo from "@/components/CardTrabajo";
import FiltrosTrabajos from "@/components/FiltrosTrabajo";
import ModalTrabajos from "@/components/ModalTrabajos";
import CardCurso from "@/components/CardCurso";

// Modelo de datos para la pagina projects
interface ProjectsData {
  pageContent: {
    title: string;
    description: string;
    coursesSection: {
      title: string;
    }
    modalContent: {
      filtersTitle: string;
      worksListTitle: string;
      noWorksMessage: string;
    }
  };
}

// Modelos de datos
interface Trabajo {
  nombre: string;
  tipo: string;
  descripcion: string;
  fecha: string;
  tecnologias: string[];
  repoUrl: string;
  deployUrl: string;
}

interface Curso {
  codigo: string;
  nombre: string;
  semestre: string;
  periodo: string;
  descripcion: string;
  trabajos: Trabajo[];
}

interface CursosData {
  cursos: Curso[];
}

export default function ProjectsPage() {
  const [projectsData, setProjectsData] = useState<ProjectsData | null>(null);
  const [cursoSeleccionado, setCursoSeleccionado] = useState<Curso | null>(null);
  const [cursosData, setCursosData] = useState<Curso[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar datos desde JSON (cursos y contendo pagina)
  useEffect(() => {
    const loadCursosData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/cursos.json');
        
        if (!response.ok) {
          throw new Error('No se pudieron cargar los datos de cursos');
        }
        
        const data: CursosData = await response.json();
        setCursosData(data.cursos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        console.error('Error cargando cursos data:', err);
      } finally {
        setLoading(false);
      }
    };

    const loadProjectsData = async () => {
      try {
        const response = await fetch('/data/projects-data.json');
        
        if (!response.ok) {
          throw new Error('No se pudieron cargar los datos de la pagina projects');
        }

        const data: ProjectsData = await response.json();
        setProjectsData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Errpr desconocido');
      } 
    }

    loadProjectsData();
    loadCursosData();
  }, []);

  const handleCursoClick = (curso: Curso) => {
    setCursoSeleccionado(curso);
  };

  // Estados de carga y error para no tener esperas sin avisar
  if (loading) {
    return (
      <main className="projects-container">
        <div className="loading-message">Cargando cursos...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="projects-container">
        <div className="error-message">
          <h2>Error al cargar los datos</h2>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="projects-container">
      <header className="projects-header">
        <h1 className="projects-title">{projectsData?.pageContent.title}</h1>
        <p className="projects-desc">
          {projectsData?.pageContent.description}
        </p>
      </header>

      {/* Grid de cursos */}
      <section className="cursos-section">
        <h2 className="cursos-section-title">{projectsData?.pageContent.title}</h2>
        <div className="cursos-grid">
          {cursosData.map((curso) => (
            <CardCurso 
              key={curso.codigo}
              codigo={curso.codigo}
              nombre={curso.nombre}
              semestre={curso.semestre}
              periodo={curso.periodo}
              descripcion={curso.descripcion}
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
          <p className="modal-period">{cursoSeleccionado?.periodo} - Semestre {cursoSeleccionado?.semestre}</p>
        </div>
        
        <section className="filtros-section">
          <h3 className="filtros-title">{projectsData?.pageContent.modalContent.filtersTitle}</h3>
          <FiltrosTrabajos />
        </section>
        
        <section className="trabajos-section">
          <h3 className="trabajos-section-title">
            {projectsData?.pageContent.modalContent.worksListTitle} ({cursoSeleccionado?.trabajos.length || 0})
          </h3>
          <div className="trabajos-grid">
            {cursoSeleccionado?.trabajos.map((trabajo, idx) => (
              <CardTrabajo key={`${cursoSeleccionado.codigo}-${idx}`} {...trabajo} />
            )) || []}
          </div>
          
          {cursoSeleccionado?.trabajos.length === 0 && (
            <div className="no-trabajos-message">
              <p>{projectsData?.pageContent.modalContent.noWorksMessage}</p>
            </div>
          )}
        </section>
      </ModalTrabajos>
    </main>
  );
}