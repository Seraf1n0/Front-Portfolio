"use client";
import "../../styles/roadmap.css";
import React, { useEffect, useState } from "react";

// Un item o card del roadmap con info de la tecnologia, el nivel que tengo y lo que quiero aprender
interface RoadmapItem {
  tecnologia: string;
  level: number;
  goal: string;
}
// Estas son las categorias principales (actulmente solo tengo 3)
interface RoadmapCategory {
  nombre: string;
  items: RoadmapItem[];
}
// La info completa para la pagina
interface RoadmapData {
  categorias: RoadmapCategory[];
}

export default function RoadmapPage() {
  const [data, setData] = useState<RoadmapData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/data/roadmap.json");
        if (!res.ok) throw new Error("No se pudo cargar roadmap");
        const json: RoadmapData = await res.json();
        setData(json);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <main className="roadmap-container">
        <p className="loading-small">Cargando roadmap…</p>
      </main>
    );
  }

  if (error || !data) {
    return (
      <main className="roadmap-container">
        <div className="error-message">
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="roadmap-container">
      <header className="roadmap-header">
        <h1 className="roadmap-title">Roadmap Técnico</h1>
        <p className="roadmap-desc">
          Niveles actuales y objetivos próximos en mi crecimiento profesional.
        </p>
      </header>

      <section
        className="roadmap-categories"
        aria-label="Categorías del roadmap"
      >
        {data.categorias.map((cat) => (
          <article key={cat.nombre} className="roadmap-category">
            <h2 className="category-name">{cat.nombre}</h2>
            <ul className="category-items">
              {cat.items.map((item) => (
                <li key={item.tecnologia} className="roadmap-item">
                  <div className="item-header">
                    <span className="item-tech">{item.tecnologia}</span>
                    <span
                      className="item-level"
                      aria-label={`Nivel ${item.level}%`}
                    >
                      {item.level}%
                    </span>
                  </div>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={item.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Progreso en ${item.tecnologia}`}
                  >
                    <div
                      className="progress-fill"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                  <p className="item-goal">
                    Mi próximo objetivo: <span>{item.goal}</span>
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
