"use client";
import "../../styles/comments.css";
import React, { useState, useEffect } from "react";

// Modelo de datos para los comentarios
interface Comentario {
  id: number;
  icono: string; // Para el icono aleatorio
  nombre: string;
  texto: string;
}

export default function CommentsPage() {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [nuevoComentario, setNuevoComentario] = useState({
    nombre: "",
    texto: "",
  });
  const [caracteresRestantes, setCaracteresRestantes] = useState(100);

  useEffect(() => {
    // get al json de comentarios
    const loadComentarios = async () => {
      try {
        const response = await fetch("/api/comments");
        if (!response.ok) {
          throw new Error("Error al cargar los comentarios");
        }
        const data: Comentario[] = await response.json();
        setComentarios(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadComentarios();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "texto" && value.length > 100) return; // Limitar a 100 caracteres

    setNuevoComentario((prev) => ({ ...prev, [name]: value }));
    if (name === "texto") {
      setCaracteresRestantes(100 - value.length);
    }
  };

  const handleEnviarComentario = async () => {
    if (!nuevoComentario.nombre || !nuevoComentario.texto) {
      alert("No puedes enviar un comentario vacío");
      return;
    }

    const nuevoComentarioObj: Comentario = {
      id: Date.now(),
      icono: `icon-${Math.floor(Math.random() * 4) + 1}`, //para generar un icono aleatorio
      nombre: nuevoComentario.nombre,
      texto: nuevoComentario.texto,
    };

    try {
      // post al json de comentarios
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoComentarioObj),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el comentario");
      }

      setComentarios((prev) => [...prev, nuevoComentarioObj]);
      setNuevoComentario({ nombre: "", texto: "" });
      setCaracteresRestantes(100);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="comments-container">
      <header className="comments-header">
        <h1 className="comments-title">Comentarios</h1>
        <p className="comments-desc">
          Escribe una opinión sobre mi trabajo o simplemente comparte conocimiento!
        </p>
      </header>

      <section
        className="comments-input-section"
        aria-label="Crear comentario"
      >
        <div className="comments-input">
          <div className="comments-input-icon">
            <span className="default-icon">👤</span>
          </div>
          <div className="comments-input-fields">
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={nuevoComentario.nombre}
              onChange={handleInputChange}
              maxLength={50}
              aria-label="Nombre del usuario"
            />
            <textarea
              name="texto"
              placeholder="Escribe tu comentario aquí..."
              value={nuevoComentario.texto}
              onChange={handleInputChange}
              maxLength={100}
              aria-label="Texto del comentario"
            />
            <div className="comments-char-count">
              {caracteresRestantes} caracteres restantes
            </div>
          </div>
          <button
            className="comments-submit-button"
            onClick={handleEnviarComentario}
            aria-label="Enviar comentario"
          >
            Enviar
          </button>
        </div>
      </section>

      <section
        className="comments-list-section"
        aria-label="Lista de comentarios"
      >
        <h2 className="comments-list-title">Comentarios recientes</h2>
        <div className="comments-list">
          {comentarios.map((comentario) => (
            <div key={comentario.id} className="comment-card">
              <div className={`comment-icon ${comentario.icono}`}></div>
              <div className="comment-content">
                <h3 className="comment-name">{comentario.nombre}</h3>
                <p className="comment-text">{comentario.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
