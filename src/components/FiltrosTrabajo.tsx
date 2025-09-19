import React from "react";
import "../styles/components.css";

export default function FiltrosTrabajos() {
    return (
        <section className="filtros-trabajos">
            <form>
                <label>
                Tipo de evaluación:
                <select>
                    <option value="">Todos</option>
                    <option value="laboratorio">Laboratorio</option>
                    <option value="tarea">Tarea</option>
                    <option value="proyecto">Proyecto</option>
                    <option value="investigacion">Investigación</option>
                    <option value="examen">Examen</option>
                    <option value="otro">Otro</option>
                </select>
                </label>
                <label>
                Tecnología:
                <input type="text" placeholder="Ej: .Net, NodeJS..." />
                </label>
                <label>
                Fecha:
                <input type="date" />
                </label>
            </form>
        </section>
    );
}