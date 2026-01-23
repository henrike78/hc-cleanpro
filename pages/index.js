import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>H&amp;C Clean Pro – Limpieza en Barcelona</title>
        <meta
          name="description"
          content="Limpieza de comunidades, escaleras, oficinas y fin de obra en Barcelona. Empresa pequeña, trato cercano y trabajo bien hecho."
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
        <h2>Por qué contar con nosotros</h2>
        <ul>
          <li>✔ Trato directo con los responsables, sin intermediarios.</li>
          <li>✔ Las mismas personas se encargan de tu comunidad u oficina.</li>
          <li>✔ Avisamos si vemos cualquier incidencia en la finca o en el local.</li>
          <li>✔ Facturación clara y sin contratos largos obligatorios.</li>
        </ul>
      </section>

      <section>
        <h2>Trabajos recientes</h2>
        <p>
          Estos son algunos ejemplos de trabajos que hemos realizado. Puedes ver más detalles en la
          página de <Link href="/trabajos"><a>Trabajos</a></Link>.
        </p>
        <div className="work-grid">
          <article className="work-card">
            <h3>Fin de obra en piso de 90 m² (Gràcia)</h3>
            <p>
              Limpieza completa después de reforma: retirada de polvo de obra, repaso de cocina, baño y
              cristales para dejar el piso listo para entrar a vivir.
            </p>
          </article>

          <article className="work-card">
            <h3>Comunidad de vecinos (Sant Andreu)</h3>
            <p>
              Limpieza semanal de escalera y portal en finca de 5 plantas. Barrido y fregado de rellanos,
              barandillas y cristales de entrada.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
