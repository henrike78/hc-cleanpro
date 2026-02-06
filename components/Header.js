import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Logo */}
        <a href="/" className="logo">
          <img
  src="/logo.png"
  alt="H&C Clean Pro - Servicios de Limpieza"
  className="logo-image"
/>
        </a>

        {/* Navegación */}
        <nav className="main-nav">
          <Link href="/">
            <a>Inicio</a>
          </Link>
          <Link href="/services">
            <a>Servicios</a>
          </Link>
          <Link href="/about">
            <a>Sobre Nosotros</a>
          </Link>
          <Link href="/contact">
            <a>Contacto</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
