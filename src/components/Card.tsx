import React from "react";
import Link from "next/link";
import "../styles/components.css";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ title, children, className = "", href }: CardProps) {
  const cardContent = (
    <div className={`card-base dark-card shadow-card ${href ? "card-link" : ""} ${className}`} tabIndex={href ? 0 : undefined}>
      <h2 className="card-title">{title}</h2>
      <div className="card-content">{children}</div>
    </div>
  );
  return href ? (
    <Link href={href} className="card-link-wrapper">
      {cardContent}
    </Link>
  ) : cardContent;
}
