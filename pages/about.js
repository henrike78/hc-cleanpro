import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Sobre H&amp;C Clean Pro – Empresa de limpieza en Barcelona</title>
        <meta
          name="description"
          content="Conoce H&C Clean Pro, empresa pequeña de limpieza en Barcelona con trato cercano y trabajo cuidado."
        />
      </Head>

      <section>
        <h1>Sobre H&amp;C Clean Pro</h1>
        <p>
          H&amp;C Clean Pro nace como una empresa pequeña de limpieza en Barcelona, con una idea sencilla:
          hacer bien el trabajo y tratar a la gente con respeto.
        </p>
        <p>
          Empezamos con limpiezas de escaleras y de fin de obra y, poco a poco, vamos creciendo con comunidades,
          oficinas y clientes que nos recomiendan.
        </p>
        <p>
          No prometemos cosas imposibles. Preferimos hablar claro, explicar qué incluye el servicio y cumplirlo.
          Si algo no se puede hacer, lo decimos directamente.
        </p>
        <p>
          Nuestro objetivo es tener pocos clientes, pero bien atendidos, con un trato directo y sin cambios
          constantes de personal.
        </p>
      </section>

      <section>
        <h2>Dónde trabajamos</h2>
        <p>
          Trabajamos principalmente en Barcelona ciudad y alrededores. Para servicios de fin de obra o limpiezas
          puntuales, podemos valorar otras zonas cercanas.
        </p>
      </section>
    </>
  );
}
