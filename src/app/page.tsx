"use client";
import Card from "@/components/Card";
import "../styles/home.css";
import { useState, useEffect } from "react";
import Link from "next/link";

// Interface para tipado
interface HomeData {
  introduction: {
    greeting: string;
    title: string;
    description: string;
  };
  portfolioPurpose: {
    title: string;
    description: string;
  };
  navigationCards: Array<{
    title: string;
    href: string;
    description: string;
    icon: string;
  }>;
  callToAction: {
    title: string;
    description: string;
    primaryButton: {
      text: string;
      href: string;
    };
    secondaryButton: {
      text: string;
      href: string;
    };
  };
}

export default function Home() {
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/home-data.json');
        
        if (!response.ok) {
          throw new Error('No se pudieron cargar los datos de la página');
        }
        
        const data: HomeData = await response.json();
        setHomeData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        console.error('Error loading home data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadHomeData();
  }, []);

  if (loading) {
    return (
      <main className="home-container">
        <div className="loading-message">Cargando página de inicio...</div>
      </main>
    );
  }

  if (error || !homeData) {
    return (
      <main className="home-container">
        <div className="error-message">
          <h2>Error al cargar los datos</h2>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="home-container">
      {/* Sección de introducción */}
      <section className="intro-section">
        <div className="intro-content">
          <h1 className="intro-greeting">{homeData.introduction.greeting}</h1>
          <p className="intro-title">{homeData.introduction.title}</p>
          <p className="intro-description">{homeData.introduction.description}</p>
        </div>
      </section>

      {/* Propósito del portafolio */}
      <section className="purpose-section">
        <div className="purpose-content">
          <h2 className="purpose-title">{homeData.portfolioPurpose.title}</h2>
          <p className="purpose-description">{homeData.portfolioPurpose.description}</p>
        </div>
      </section>

      {/* Cards de navegación */}
      <section className="navigation-section">
        <div className="cards-grid">
          {homeData.navigationCards.map((card, index) => (
            <Card key={index} title={card.title} href={card.href}>
              <p>{card.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action: Esta sección es la que se encarga de llamar a los usuarios a hacer algo, en este caso a ver mis proyectos y contactar */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">{homeData.callToAction.title}</h2>
          <p className="cta-description">{homeData.callToAction.description}</p>
          <div className="cta-buttons">
            <Link 
              href={homeData.callToAction.primaryButton.href}
              className="cta-button cta-primary"
            >
              {homeData.callToAction.primaryButton.text}
            </Link>
            <Link 
              href={homeData.callToAction.secondaryButton.href}
              className="cta-button cta-secondary"
            >
              {homeData.callToAction.secondaryButton.text}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}