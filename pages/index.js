import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>H&amp;C Clean Pro – Limpieza en Barcelona</title>
        <meta
          name="description"
          content="Limpieza de comunidades, escaleras, oficinas y fin de obra en Barcelona. Equipo pequeño, trato cercano y trabajo bien hecho."
        />
      </Head>

      <section>
        <h1>Limpieza de comunidades y fin de obra en Barcelona</h1>
        <p>
          Somos <strong>H&amp;C Clean Pro</strong>, una empresa pequeña de limpieza en Barcelona. 
          Hacemos limpiezas de comunidades, escaleras, oficinas y pisos de fin de obra.
        </p>
        <p>
          Llegamos a la hora, hacemos el trabajo que se ha acordado y dejamos todo recogido. 
          Sin promesas vacías, sin contratos raros.
        </p>
        <Link href="/contact">
          <a className="cta-button">Pedir presupuesto sin compromiso</a>
        </Link>
      </section>

      <section>
        <div className="hero-wrapper">
          <Image
            src="/hero.jpg"
            width={1600}
            height={900}
            alt="Equipo de limpieza de H&C Clean Pro en Barcelona"
            priority
          />
        </div>
      </section>

      <section>
        <h2>Qué ofrecemos</h2>
        <ul>
          <li>✅ Limpieza de comunidades y escaleras</li>
          <li>✅ Limpiezas de fin de obra y pisos recién reformados</li>
          <li>✅ Limpieza de oficinas y pequeños negocios</li>
        </ul>
        <p>
          Nos adaptamos a la frecuencia que necesites: diaria, semanal, quincenal o servicios puntuales.
        </p>
      </section>

      <section>
        <h2>Cómo trabajamos</h2>
        <ul>
          <li>✔ Trabajo sencillo y claro: acordamos qué hay que hacer y lo cumplimos.</li>
          <li>✔ Comunicación directa: si hay alguna incidencia, te avisamos al momento.</li>
          <li>✔ Confianza: las mismas personas se encargan de tu comunidad u oficina.</li>
        </ul>
        <p>
          Si quieres, podemos empezar con un servicio puntual y, si quedas satisfecho, 
          hablar de un mantenimiento fijo.
        </p>
      </section>
    </>
  );
}
