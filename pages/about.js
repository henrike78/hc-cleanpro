import Head from 'next/head';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Sobre Nosotros – H&amp;C Clean Pro</title>
        <meta
          name="description"
          content="Conoce H&C Clean Pro: empresa de limpieza en Barcelona con experiencia, equipo profesional y compromiso con la calidad."
        />
      </Head>

      <section>
        <h1>Sobre Nosotros</h1>
        <p>
          <strong>H&amp;C Clean Pro</strong> es una empresa de limpieza en Barcelona con amplia experiencia en el
          sector. Brindamos servicios de limpieza de alta calidad a comunidades, empresas y particulares.
        </p>
        <p>
          Nuestro equipo está formado por profesionales cualificados y de confianza, comprometidos con la excelencia en
          cada trabajo. Nos enorgullece nuestra atención al detalle y la satisfacción de nuestros clientes.
        </p>
        <p>
          Nuestros valores se basan en la confianza, la responsabilidad y la mejora continua. Utilizamos productos
          respetuosos con el medio ambiente y técnicas eficientes para garantizar resultados óptimos sin comprometer la
          salud ni el planeta.
        </p>
      </section>

      <section>
        <Image
          src="/about-team.jpg"
          width={1200}
          height={800}
          alt="Equipo profesional de limpieza de H&C Clean Pro"
        />
      </section>
    </>
  );
}
