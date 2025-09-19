import React from "react";
import "../styles/components.css";

// Props para el componente CardCurso
interface CardCursoProps {
  codigo: string;
  nombre: string;
  semestre: string;
  periodo: string;
  descripcion: string;
  onclick?: () => void; // Una función prop para manejar el evento onclick  
}

export default function CardCurso({ codigo, nombre, semestre, periodo, descripcion, onclick }: CardCursoProps) {
    return (
        <div className="card-base card-curso">
            <h2 className="card-curso-title">{nombre}</h2>
            <h3 className="card-curso-subtitle">{codigo} - Semestre {semestre} - {periodo}</h3>
            <p className="card-curso-description">{descripcion}</p>
            <button className="card-curso-button" onClick={onclick}>Ver Curso</button>
        </div>
    );
};