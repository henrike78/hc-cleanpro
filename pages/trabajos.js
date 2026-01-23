import Head from 'next/head';

export default function WorksPage() {
  return (
    <>
      <Head>
        <title>Trabajos de limpieza en Barcelona | H&amp;C Clean Pro</title>
        <meta
          name="description"
          content="Ejemplos reales de limpiezas de comunidades, fin de obra y oficinas realizadas por H&C Clean Pro en Barcelona."
        />
      </Head>

      <section>
        <h1>Trabajos realizados</h1>
        <p>
          Aquí puedes ver algunos ejemplos de limpiezas que hemos realizado en Barcelona y alrededores.
          No son fotos de catálogo: son trabajos reales en comunidades, pisos de fin de obra y oficinas.
        </p>
      </section>

      <section>
        <h2>Fin de obra</h2>
        <div className="work-grid">
          <article className="work-card">
            <h3>Piso reformado en Gràcia</h3>
            <p>
              Piso de 90 m² recién reformado. Limpieza completa de polvo de obra, cocina, baño, armarios y
              cristales para dejarlo listo para entrar a vivir.
            </p>
          </article>

          <article className="work-card">
            <h3>Piso después de cambio de cocina y baño</h3>
            <p>
              Limpieza de todas las zonas afectadas por la reforma, retirada de polvo fino y repaso final de
              suelos y superficies.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2>Comunidades y escaleras</h2>
        <div className="work-grid">
          <article className="work-card">
            <h3>Comunidad de 5 plantas en Sant Andreu</h3>
            <p>
              Limpieza semanal de escalera y portal. Barrido y fregado de rellanos, limpieza de barandillas y
              cristales de entrada.
            </p>
          </article>

          <article className="work-card">
            <h3>Finca con ascensor y dos escaleras</h3>
            <p>
              Limpieza regular de zonas comunes, revisión de rellanos y repaso de espejos y puertas de ascensor.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2>Oficinas y pequeños negocios</h2>
        <div className="work-grid">
          <article className="work-card">
            <h3>Despacho profesional</h3>
            <p>
              Limpieza periódica de suelos, mesas y aseos. Adaptamos los horarios para no interferir con la
              atención a clientes.
            </p>
          </article>

          <article className="work-card">
            <h3>Pequeño local comercial</h3>
            <p>
              Limpieza general del local, cristales de escaparate y zona de atención al público.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2>¿Quieres un presupuesto para un trabajo parecido?</h2>
        <p>
          Cuéntanos qué tipo de limpieza necesitas (comunidad, fin de obra, oficina, etc.) y te haremos un
          presupuesto sin compromiso.
        </p>
        <p>
          Puedes escribirnos por WhatsApp, por email a <strong>hyccleanpro@gmail.com</strong> o desde la página de contacto.
        </p>
      </section>
    </>
  );
}
