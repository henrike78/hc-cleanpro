import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/"><a className="logo">HY&amp;C Clean Pro</a></Link>
        <ul>
          <li><Link href="/"><a>Inicio</a></Link></li>
          <li><Link href="/services"><a>Servicios</a></Link></li>
          <li><Link href="/about"><a>Sobre Nosotros</a></Link></li>
          <li><Link href="/contact"><a>Contacto</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}
