import "../styles/components.css";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre Mí" },
  { href: "/projects", label: "Proyectos" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link href="/" className="brand-link">
            Yosimar
          </Link>
        </div>
        
        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}