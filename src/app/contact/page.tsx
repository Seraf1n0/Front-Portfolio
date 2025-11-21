"use client";
import "../../styles/contact.css";
import React, { useEffect, useState } from "react";

// Interfaces para modelo de datos
interface Canal { tipo: string; url: string; }
interface ContactData {
  nombre: string;
  rol: string;
  ubicacion: string;
  telefono: string;
  email: string;
  disponibilidad: string;
  canales: Canal[];
}

export default function ContactPage() {
  const [data, setData] = useState<ContactData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/data/contact.json");
        if (!res.ok) throw new Error("No se pudo cargar contacto");
        const json: ContactData = await res.json();
        setData(json);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <main className="contact-container"><p className="loading-small">Cargando…</p></main>;
  if (error || !data) return (
    <main className="contact-container">
      <div className="error-message">
        <h2>Error</h2><p>{error}</p>
      </div>
    </main>
  );

  return (
    <main className="contact-container">
      <header className="contact-header">
        <h1 className="contact-title">Contacto</h1>
        <p className="contact-sub">{data.rol}</p>
      </header>

      <section className="contact-card" aria-label="Información de contacto principal">
        <h2 className="contact-name">{data.nombre}</h2>
        <ul className="contact-list" aria-label="Datos directos">
          <li><span className="label">Ubicación:</span> {data.ubicacion}</li>
          <li><span className="label">Teléfono:</span> {data.telefono}</li>
          <li><span className="label">Correo:</span>
            <a href={`mailto:${data.email}`} className="contact-link">{data.email}</a>
          </li>
        </ul>
        <p className="contact-avail">{data.disponibilidad}</p>
      </section>

      <section className="contact-channels" aria-label="Canales externos">
        <h3 className="channels-title">Canales</h3>
        <ul className="channels-list">
          {data.canales.map(c => (
            <li key={c.tipo}>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="channel-link">
                {c.tipo}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <script
        type="application/ld+json"
        // SEO
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": data.nombre,
            "jobTitle": data.rol,
            "address": { "@type": "PostalAddress", "addressLocality": "Limón", "addressCountry": "Costa Rica" },
            "email": data.email,
            "telephone": data.telefono
          })
        }}
      />
    </main>
  );
}