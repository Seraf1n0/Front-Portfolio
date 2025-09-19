import React from "react";
import "../styles/components.css";

// props para componente CardTrabajo
interface CardTrabajoProps {
  nombre: string;
  tipo: string;
  descripcion: string;
  fecha: string;
  tecnologias: string[];
  //Opcionales(o si aplica):
  repoUrl?: string;
  deployUrl?: string;
}

export default function CardTrabajo({
  nombre,
  tipo,
  descripcion,
  fecha,
  tecnologias,
  repoUrl,
  deployUrl,
}: CardTrabajoProps) {
  return (
    <article className="card-trabajo card-base">
      <header>
        <h3 className="card-trabajo-title">{nombre}</h3>
        <span className="card-trabajo-tipo">{tipo}</span>
      </header>
      <p className="card-trabajo-desc">{descripcion}</p>
      <div className="card-trabajo-info">
        <span className="card-trabajo-fecha">Fecha: {fecha}</span>
        <span className="card-trabajo-tecnologias">
          Tecnologías: {tecnologias.join(", ")}
        </span>
      </div>
      <div className="card-trabajo-links">
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            Repositorio
          </a>
        )}
        {deployUrl && (
          <a href={deployUrl} target="_blank" rel="noopener noreferrer">
            Sitio desplegado
          </a>
        )}
      </div>
    </article>
  );
}