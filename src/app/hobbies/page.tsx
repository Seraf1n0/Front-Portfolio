"use client";
import "../../styles/hobbies.css";

export default function HobbiesPage() {
  return (
    <main className="hobbies-container">
      <header className="hobbies-header">
        <h1 className="hobbies-title">Hobbies Técnicos</h1>
        <p className="hobbies-desc">
          Aquí te comparto algunas de las actividades técnicas que disfruto en mi tiempo libre.
        </p>
      </header>

      <section className="hobbies-list-section" aria-label="Lista de hobbies técnicos">
        <ul className="hobbies-list">
          <li className="hobby-item">
            <h3>Explorar nuevas tecnologías</h3>
            <p>
              Me encanta probar frameworks, lenguajes de programación y herramientas emergentes en el mundo del desarrollo.
            </p>
          </li>
          <li className="hobby-item">
            <h3>Ciberseguridad</h3>
            <p>
              Realizo pruebas de seguridad en mis propias máquinas y estudio cómo proteger sistemas contra vulnerabilidades.
            </p>
          </li>
          <li className="hobby-item">
            <h3>Automatización</h3>
            <p>
              Disfruto creando scripts y herramientas para automatizar tareas repetitivas y mejorar la productividad.
            </p>
          </li>
          <li className="hobby-item">
            <h3>Hardware y Redes</h3>
            <p>
              Me gusta configurar redes, probar hardware nuevo y aprender sobre infraestructura tecnológica.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}