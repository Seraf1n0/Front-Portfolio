import React from "react";
import "../styles/components.css";

interface SocialLinkProps {
  platform: 'linkedin' | 'github' | 'email' | 'cv' | 'behance' | 'devto' | 'medium' | 'twitter';
  url: string;
  username?: string;
  customLabel?: string;
}

export default function SocialLink({ platform, url, username, customLabel }: SocialLinkProps) {
  
  const getPlatformConfig = (platformName: string) => {
    const configs = {
      linkedin: {
        icon: '💼',
        label: customLabel || 'LinkedIn',
        color: 'social-linkedin',
        ariaLabel: `Visitar perfil de LinkedIn${username ? ` de ${username}` : ''}`
      },
      github: {
        icon: '🐱',
        label: customLabel || 'GitHub',
        color: 'social-github',
        ariaLabel: `Visitar perfil de GitHub${username ? ` de ${username}` : ''}`
      },
      email: {
        icon: '📧',
        label: customLabel || 'Email',
        color: 'social-email',
        ariaLabel: 'Enviar correo electrónico'
      },
      cv: {
        icon: '📄',
        label: customLabel || 'Descargar CV',
        color: 'social-cv',
        ariaLabel: 'Descargar currículum en PDF'
      }
    };
    
    return configs[platformName as keyof typeof configs] || {
      icon: '🔗',
      label: platformName,
      color: 'social-default',
      ariaLabel: `Visitar ${platformName}`
    };
  };

  const config = getPlatformConfig(platform);
  const isExternal = url.startsWith('http');
  const isEmail = platform === 'email' || url.startsWith('mailto:');

  return (
    <a 
      href={url}
      className={`social-link ${config.color}`}
      target={isExternal && !isEmail ? "_blank" : undefined}
      rel={isExternal && !isEmail ? "noopener noreferrer" : undefined}
      aria-label={config.ariaLabel}
    >
      <span className="social-icon" aria-hidden="true">
        {config.icon}
      </span>
      <span className="social-label">
        {config.label}
      </span>
      {username && (
        <span className="social-username">
          @{username}
        </span>
      )}
      {isExternal && !isEmail && (
        <span className="external-indicator" aria-hidden="true">
          ↗
        </span>
      )}
    </a>
  );
}