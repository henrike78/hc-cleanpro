import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <a className="logo" aria-label="H&C Clean Pro - Inicio">
            <Image
              src="/logo.png"
              alt="H&C Clean Pro - Servicios de Limpieza"
              width={220}
              height={56}
            />
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Servicios</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Sobre Nosotros</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contacto</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
