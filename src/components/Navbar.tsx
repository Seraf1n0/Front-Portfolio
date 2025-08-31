import "../styles/components.css";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre Mi" },
  { href: "/comments", label: "Comentarios" },
  { href: "/projects", label: "Proyectos" },
];
export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex gap-6">
                {links.map((link) => (
                <li key={link.href}>
                    <Link href={link.href} className="text-white hover:underline">
                    {link.label}
                    </Link>
                </li>
                ))}
            </ul>
        </nav>
    )
}