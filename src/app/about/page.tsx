"use client";
import "../../styles/about.css";
import SocialLink from "@/components/SocialLink";
import CertificationBar from "@/components/CertificationBar";
import Image from "next/image";
import { useState, useEffect } from "react";

// modelo de datos para la estructura de la pagina about. Algo asi como un viewbag.
// Aqui guardaremos cada dato que corresponde a etiquetas de texto
interface AboutData {
  profile: {
    name: string;
    title: string;
    location: string;
  };
  biography: {
    title: string;
    paragraphs: string[];
  };
  skills: {
    title: string;
    categories: Array<{
      title: string;
      items: string[];
    }>;
  };
  certifications: {
    title: string;
    items: Array<{
      institution: string;
      name: string;
      date: string;
      status: 'completed' | 'in-progress';
      link: string | null;
    }>;
  };
  additionalInfo: {
    title: string;
    sections: Array<{
      title: string;
      items: string[];
    }>;
  };
  socialLinks: {
    title: string;
    links: Array<{
      platform: string;
      url: string;
      username?: string;
      customLabel?: string;
    }>;
  };
  cvExport: {
    buttonText: string;
    description: string;
  };
}

// Datos estructurados JSON-LD para SEO
const jsonLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Yosimar Montenegro",
  "jobTitle": "Estudiante de Ingeniería en Computación",
  "description": "Estudiante de Ingeniería en Computación especializado en desarrollo web y software",
  "url": "https://desplieguemieo.com",
  "sameAs": [
    "https://www.linkedin.com/in/yosimar-montenegro-464642338/",
    "https://github.com/Seraf1n0"
  ],
  "knowsAbout": ["JavaScript", "React", "Next.js", "Vue.js","TypeScript", "Node.js", ".NET"],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Tecnológico de Costa Rica"
  }
};

export default function AboutPage() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [generatingPDF, setGeneratingPDF] = useState(false);

  useEffect(() => {
    const loadAboutData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/about-data.json');
        
        if (!response.ok) {
          throw new Error('No se pudieron cargar los datos de la pagina');
        }
        
        const data: AboutData = await response.json();
        setAboutData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        console.error('Error cargando about data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadAboutData();
  }, []);

  // Función para generar PDF desde HTML usando html2pdf
  const generatePDFFromHTML = async () => {
    if (!aboutData) return;
    
    try {
      setGeneratingPDF(true);
      
      // import dinamico
      const html2pdf = (await import('html2pdf.js')).default;
      
      // Se selecciona todo el contenido de la pagina
      const element = document.querySelector('.about-main');
      if (!element) {
        throw new Error('No se encontró el contenido para exportar');
      }
      
      // Sin boton para exportar para que no salga en pdf
      const clonedElement = element.cloneNode(true) as HTMLElement;
      const exportSection = clonedElement.querySelector('.cv-export-section');
      if (exportSection) {
        exportSection.remove();
      }
      
      document.body.style.backgroundColor = '#0f172a';
      
      // Configuración del PDF
      const opt = {
        margin: 0.3,
        filename: `CV_${aboutData.profile.name.replace(/\s+/g, '_')}.pdf`,
        image: { 
          type: 'jpeg' as const, 
          quality: 0.98 
        },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#0f172a',
          windowWidth: 1400,
          windowHeight: 900,
          scrollX: 0,
          scrollY: 0,
          x: 0,
          y: 0
        },
        jsPDF: { 
          unit: 'in' as const, 
          format: 'a4' as const, 
          orientation: 'portrait' as const,
          putOnlyUsedFonts: true,
          compress: true
        }
      };
      
      await html2pdf().set(opt).from(clonedElement).save();
      document.body.style.backgroundColor = '';
      
    } catch (error) {
      console.error('Error generando PDF:', error);
      alert('Error al generar el PDF. Por favor, intenta de nuevo.');
    } finally {
      setGeneratingPDF(false);
    }
  };

  if (loading) {
    return (
      <main className="about-main">
        <div className="loading-message">Cargando información...</div>
      </main>
    );
  }

  if (error || !aboutData) {
    return (
      <main className="about-main">
        <div className="error-message">
          <h2>Error al cargar los datos</h2>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  return (
    <>
      {/* Datos estructurados para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      
      <main className="about-main">
        {/* Header con foto y presentación principal */}
        <header className="about-header">
          <div className="profile-image-container">
            <Image
              src="/profile-photo.jpg"
              alt={`Fotografía profesional de ${aboutData.profile.name}`}
              width={200}
              height={200}
              className="profile-image"
              priority
            />
          </div>
          <div className="profile-intro">
            <h1 className="profile-name">{aboutData.profile.name}</h1>
            <p className="profile-title">{aboutData.profile.title}</p>
            <p className="profile-location">{aboutData.profile.location}</p>
          </div>
        </header>

        {/* Biografía profesional */}
        <section className="biography-section" aria-labelledby="biography-heading">
          <h2 id="biography-heading" className="section-title">{aboutData.biography.title}</h2>
          <article className="biography-content">
            {aboutData.biography.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        </section>

        {/* Habilidades Técnicas */}
        <section className="skills-section" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="section-title">{aboutData.skills.title}</h2>
          <div className="skills-content">
            {aboutData.skills.categories.map((category, index) => (
              <article key={index} className="skill-category">
                <h3 className="skill-category-title">{category.title}</h3>
                <ul className="skills-list">
                  {category.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="skill-item">{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Certificaciones */}
        <section className="certifications-section" aria-labelledby="certifications-heading">
          <h2 id="certifications-heading" className="section-title">{aboutData.certifications.title}</h2>
          <div className="certifications-content">
            <div className="certifications-grid">
              {aboutData.certifications.items.map((cert, index) => (
                <CertificationBar
                  key={index}
                  institucion={cert.institution}
                  nombre={cert.name}
                  fecha={cert.date}
                  status={cert.status}
                  link={cert.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Información adicional */}
        <section className="additional-info-section" aria-labelledby="additional-heading">
          <h2 id="additional-heading" className="section-title">{aboutData.additionalInfo.title}</h2>
          <div className="additional-content">
            {aboutData.additionalInfo.sections.map((section, index) => (
              <article key={index} className="info-block">
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Redes profesionales */}
        <section className="social-links-section" aria-labelledby="social-heading">
          <h2 id="social-heading" className="section-title">{aboutData.socialLinks.title}</h2>
          <nav className="social-links" aria-label="Enlaces a redes profesionales">
            {aboutData.socialLinks.links.map((link, index) => (
              <SocialLink
                key={index}
                platform={link.platform}
                url={link.url}
                username={link.username}
                customLabel={link.customLabel}
              />
            ))}
          </nav>
        </section>

        {/* Botón para exportar CV */}
        <aside className="cv-export-section">
          <button 
            className="cv-export-button"
            onClick={generatePDFFromHTML}
            disabled={generatingPDF}
            aria-label="Generar y descargar currículum en PDF"
          >
            {generatingPDF ? 'Generando PDF...' : aboutData.cvExport.buttonText}
          </button>
          <p className="cv-export-description">
            {aboutData.cvExport.description}
          </p>
        </aside>
      </main>
    </>
  );
}