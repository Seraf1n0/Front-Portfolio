import "../../styles/about.css";
import SocialLink from "@/components/SocialLink";
import CertificationBar from "@/components/CertificationBar";
import Image from "next/image";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Sobre Mí - Yosimar | Portafolio",
  description: "Conoce mi experencia academica, habilidades y conocimiento en ingeniería en computación",
  keywords: "ingeniero computación, desarrollador web, estudiante, habilidades técnicas, portafolio profesional"
};

export default function AboutPage() {
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
              src="/profile-photo.jpeg" //mi foto hermosa
              alt="Fotografía profesional de Yosimar"
              width={200}
              height={200}
              className="profile-image"
              priority
            />
          </div>
          <div className="profile-intro">
            <h1 className="profile-name">Yosimar Montenegro</h1>
            <p className="profile-title">Estudiante de Ingeniería en Computación</p>
            <p className="profile-location">Limón, Costa Rica</p>
          </div>
        </header>

        {/* Biografía profesional */}
        <section className="biography-section" aria-labelledby="biography-heading">
          <h2 id="biography-heading" className="section-title">Biografía Profesional</h2>
          <article className="biography-content">
            <p>
              Soy estudiante de Ingeniería en Computación con pasión por el desarrollo de software 
              y las tecnologías web modernas. Me apasiona crear soluciones de software de casos de la vida real,
              resolviendo problemas de cualquier tipo.
            </p>
            <p>
              A lo largo de mi carrera universitaria, he desarrollado una sólida base en programación en distintos enfoques,
              sistemas de bases de datos, algoritmos, optimización, diseño, etc. Mi objetivo es lograr crear sistemas de software variados
              que cumplan las necesidades de sus usuarios.
            </p>
            <p>
              Busco constantemente oportunidades para aprender nuevas tecnologías y metodologías, 
              manteniéndome actualizado con las mejores prácticas del desarrollo de software.
            </p>
          </article>
        </section>

        {/* Habilidades Técnicas */}
        <section className="skills-section" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="section-title">Habilidades Técnicas</h2>
          <div className="skills-content">
            <article className="skill-category">
              <h3 className="skill-category-title">Lenguajes de Programación</h3>
              <ul className="skills-list">
                <li className="skill-item">JavaScript</li>
                <li className="skill-item">TypeScript</li>
                <li className="skill-item">Python</li>
                <li className="skill-item">C#</li>
                <li className="skill-item">Java</li>
                <li className="skill-item">HTML/CSS</li>
              </ul>
            </article>

            <article className="skill-category">
              <h3 className="skill-category-title">Frameworks & Librerías</h3>
              <ul className="skills-list">
                <li className="skill-item">React</li>
                <li className="skill-item">Next.js</li>
                <li className="skill-item">Vue.js</li>
                <li className="skill-item">Node.js</li>
                <li className="skill-item">.NET</li>
                <li className="skill-item">Tailwind CSS</li>
              </ul>
            </article>

            <article className="skill-category">
              <h3 className="skill-category-title">Bases de Datos</h3>
              <ul className="skills-list">
                <li className="skill-item">MySQL</li>
                <li className="skill-item">PostgreSQL</li>
                <li className="skill-item">MongoDB</li>
                <li className="skill-item">SQL Server</li>
              </ul>
            </article>

            <article className="skill-category">
              <h3 className="skill-category-title">Herramientas & Tecnologías</h3>
              <ul className="skills-list">
                <li className="skill-item">Git & GitHub</li>
                <li className="skill-item">VS Code</li>
                <li className="skill-item">Docker</li>
                <li className="skill-item">Azure</li>
                <li className="skill-item">Figma</li>
                <li className="skill-item">Postman</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Certificaciones */}
        <section className="certifications-section" aria-labelledby="certifications-heading">
          <h2 id="certifications-heading" className="section-title">Certificaciones y Cursos</h2>
          <div className="certifications-content">
            <div className="certifications-grid">
              <CertificationBar
                institucion="Maxwell Leadership Foundation"
                nombre="Habilidades blandas y liderazgo"
                fecha="2023"
                status="completed"
              />
              
              <CertificationBar
                institucion="Microsoft Learn"
                nombre="Desarrollo de soluciones de Computer Vision en Azure"
                fecha="En progreso - 2025"
                link="https://docs.microsoft.com/learn/paths/create-computer-vision-solutions-azure-cognitive-services/"
                status="in-progress"
              />
              
              <CertificationBar
                institucion="Microsoft Learn"
                nombre="Introducción al programa de Microsoft Learn para educadores"
                fecha="En progreso - 2025"
                link="https://docs.microsoft.com/learn/educator-center/"
                status="in-progress"
              />
            </div>
          </div>
        </section>

        {/* Información adicional */}
        <section className="additional-info-section" aria-labelledby="additional-heading">
          <h2 id="additional-heading" className="section-title">Información Adicional</h2>
          <div className="additional-content">
            <article className="info-block">
              <h3>Intereses Profesionales</h3>
              <ul>
                <li>Desarrollo de aplicaciones y servicios web</li>
                <li>Inteligencia artificial</li>
                <li>Arquitectura de software</li>
                <li>Desarrollo móvil multiplataforma</li>
              </ul>
            </article>
            
            <article className="info-block">
              <h3>Mis Logros</h3>
              <ul>
                <li>He conseguido adaptarme a cualquier equipo</li>
                {/* Que otros logros? */}
                
                <li></li>
              </ul>
            </article>
          </div>
        </section>

        {/* Redes profesionales */}
        <section className="social-links-section" aria-labelledby="social-heading">
          <h2 id="social-heading" className="section-title">Redes Profesionales</h2>
          <nav className="social-links" aria-label="Enlaces a redes profesionales">
            <SocialLink 
              platform="linkedin" 
              url="https://www.linkedin.com/in/yosimar-montenegro-464642338/" 
              username="Yosimar Montenegro"
            />
            <SocialLink 
              platform="github" 
              url="https://github.com/Seraf1n0" 
              username="Seraf1n0"
            />
            <SocialLink 
              platform="email" 
              url="mailto:yosimarantonio12@gmail.com" 
            />
            <SocialLink 
              platform="cv" 
              url="/cv/yosimar-cv.pdf" 
              customLabel="Descargar CV"
            />
          </nav>
        </section>

        {/* Botón para exportar CV */}
        <aside className="cv-export-section">
          <button className="cv-export-button" aria-label="Generar y descargar currículum en PDF">
            Generar CV en PDF
          </button>
          <p className="cv-export-description">
            Descarga un currículum profesional generado automáticamente con toda la información de esta página.
          </p>
        </aside>
      </main>
    </>
  );
}