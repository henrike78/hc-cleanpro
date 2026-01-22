import Head from 'next/head';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Servicios – H&amp;C Clean Pro</title>
        <meta
          name="description"
          content="Servicios de limpieza en Barcelona: comunidades, escaleras, fin de obra y oficinas."
        />
      </Head>

      <section>
        <h1>Servicios de limpieza</h1>
        <p>
          Trabajamos sobre todo en Barcelona y alrededores. Estos son los servicios que ofrecemos de forma habitual. 
          Si necesitas algo parecido, pero no está en la lista, podemos hablarlo.
        </p>
      </section>

      <section>
        <h2>Comunidades y escaleras</h2>
        <p>
          Limpieza regular de portales, escaleras y zonas comunes de comunidades de vecinos y edificios.
        </p>
        <ul>
          <li>Barrido y fregado de escaleras y rellanos.</li>
          <li>Limpieza de barandillas, buzones y cristales de entrada.</li>
          <li>Limpieza de portales, espejos y puertas.</li>
        </ul>
        <p>
          Acordamos contigo la frecuencia (por ejemplo 1, 2 o 3 veces por semana) y el horario que mejor encaje con la finca.
        </p>
      </section>

      <section>
        <h2>Limpiezas de fin de obra</h2>
        <p>
          Limpieza después de reformas o obras, tanto en pisos como en locales u oficinas.
        </p>
        <ul>
          <li>Retirada de polvo de obra en suelos, paredes y superficies.</li>
          <li>Limpieza de baños y cocina tras la reforma.</li>
          <li>Limpieza de cristales, marcos y puertas.</li>
        </ul>
        <p>
          La idea es sencilla: dejar el espacio listo para entrar a vivir o trabajar sin tener que volver a limpiar.
        </p>
      </section>

      <section>
        <h2>Oficinas y pequeños negocios</h2>
        <p>
          Limpieza de oficinas, despachos y pequeños locales, con la frecuencia que necesites.
        </p>
        <ul>
          <li>Limpieza de mesas, suelos y zonas comunes.</li>
          <li>Limpieza básica de aseos.</li>
          <li>Vaciado de papeleras y repaso general.</li>
        </ul>
        <p>
          Nos adaptamos al horario de tu negocio para no molestar a tu equipo ni a tus clientes.
        </p>
      </section>

      <section>
        <h2>Servicios puntuales</h2>
        <p>
          También hacemos limpiezas puntuales: antes o después de una mudanza, 
          después de un evento o para “poner a punto” un piso vacío.
        </p>
        <p>
          Si tienes un caso concreto, cuéntanoslo y te diremos si podemos ayudarte y cuánto costaría, sin compromiso.
        </p>
      </section>
    </>
  );
}
