import React from "react";

interface FiltrosTrabajosProps {
  filtros: { tipo: string; tecnologia: string; fecha: string };
  onFiltroChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function FiltrosTrabajos({ filtros, onFiltroChange }: FiltrosTrabajosProps) {
  return (
    <section className="filtros-trabajos">
      <form>
        <label>
          Tipo de evaluación:
          <select name="tipo" value={filtros.tipo} onChange={onFiltroChange}>
            <option value="">Todos</option>
            <option value="Laboratorio">Laboratorio</option>
            <option value="Tarea">Tarea</option>
            <option value="Proyecto">Proyecto</option>
            <option value="Investigación">Investigación</option>
            <option value="Examen">Examen</option>
            <option value="Otro">Otro</option>
          </select>
        </label>
        <label>
          Tecnología:
          <input
            type="text"
            name="tecnologia"
            placeholder="Ej: .Net, NodeJS..."
            value={filtros.tecnologia}
            onChange={onFiltroChange}
          />
        </label>
        <label>
          Fecha:
          <input
            type="date"
            name="fecha"
            value={filtros.fecha}
            onChange={onFiltroChange}
          />
        </label>
      </form>
    </section>
  );
}