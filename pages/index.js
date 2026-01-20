import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>HY&amp;C Clean Pro - Limpieza profesional en Barcelona</title>
        <meta
          name="description"
          content="HY&C Clean Pro: Empresa de limpieza profesional en Barcelona. Limpieza de comunidades, oficinas, limpiezas de obra y más."
        />
      </Head>

      <section>
        <h1>Bienvenido a HY&amp;C Clean Pro</h1>
        <p>
          Tu empresa de <strong>limpieza profesional en Barcelona</strong>. Nos especializamos en mantener tus espacios
          impecables: comunidades de vecinos, oficinas, locales y limpiezas de obra.
        </p>
        <p>
          Confía en nuestro equipo con experiencia y disfruta de un ambiente limpio, sano y reluciente sin preocuparte
          por nada.
        </p>
        <Link href="/contact">
          <a className="cta-button">Solicita Presupuesto</a>
        </Link>
      </section>

      <section>
        <Image
          src="https://images.pexels.com/photos/9462636/pexels-photo-9462636.jpeg"
          width={1200}
          height={800}
          alt="Equipo de limpieza en una oficina"
          priority
        />
      </section>

      <section>
        <h2>Nuestros Servicios Principales</h2>
        <ul>
          <li>✅ Limpieza de comunidades y edificios</li>
          <li>✅ Limpiezas de obra y post-obra</li>
          <li>✅ Limpieza de oficinas y despachos</li>
          <li>✅ Servicios puntuales y de mantenimiento</li>
        </ul>
        <p>
          En <strong>HY&amp;C Clean Pro</strong> ofrecemos soluciones integrales de limpieza, ya sea mantenimiento
          periódico o servicios puntuales de alta exigencia. Conoce más en la sección{' '}
          <Link href="/services">
            <a>Servicios</a>
          </Link>
          .
        </p>
      </section>
    </>
  );
}
