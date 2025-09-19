import React from 'react';

interface CertificationBarProps {
  institucion: string;
  nombre: string;
  fecha: string;
  link?: string | null;
  status?: 'completed' | 'in-progress'; // Estatus del curso o certificacion pa cursos en progreso 
}

const CertificationBar: React.FC<CertificationBarProps> = ({
  institucion,
  nombre,
  fecha,
  link,
  status = 'completed'
}) => {
  return (
    <article className="certification-bar">
      <div className="certification-content">
        <div className="certification-header">
          <h3 className="certification-name">{nombre}</h3>
          <span className={`certification-status ${status}`}>
            {status === 'completed' ? 'Completado' : 'En Progreso'}
          </span>
        </div>
        
        <div className="certification-details">
          <p className="certification-institucion">{institucion}</p>
          <p className="certification-date">{fecha}</p>
        </div>
        
        {link && (
          <div className="certification-link-container">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="certification-link"
              aria-label={`Ver certificación: ${nombre}`}
            >
              Ver Certificación
              <span className="link-icon">↗</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default CertificationBar;