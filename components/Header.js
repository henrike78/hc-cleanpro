import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <a className="logo">
            <Image
              src="/logo.png"
              alt="H&C Clean Pro Logo"
              width={40}
              height={40}
            />
            <span>H&amp;C Clean Pro</span>
          </a>
        </Link>
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
