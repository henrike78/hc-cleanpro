import Head from 'next/head';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Servicios – H&amp;C Clean Pro</title>
        <meta
          name="description"
          content="Servicios de limpieza profesional: comunidades, edificios, limpiezas de obra, oficinas y mantenimiento en Barcelona."
        />
      </Head>

      <section>
        <h1>Nuestros Servicios</h1>

        <div className="service-item">
          <div className="service-text">
            <h2>Limpieza de Comunidades y Edificios</h2>
            <p>
              Mantenemos las zonas comunes de comunidades de vecinos y edificios siempre limpias y cuidadas. Nos
              encargamos de portales, escaleras, ascensores y garajes, asegurando un entorno agradable para todos los
              residentes. Ofrecemos planes de limpieza periódica adaptados a las necesidades de cada comunidad.
            </p>
          </div>
          <Image
            src="/service-communities.jpg"
            width={800}
            height={533}
            alt="Limpieza de las zonas comunes de un edificio"
            className="service-image"
          />
        </div>

        <div className="service-item">
          <div className="service-text">
            <h2>Limpiezas de Obra y Post-Obra</h2>
            <p>
              Realizamos limpiezas exhaustivas tras obras o reformas. Eliminamos polvo, restos de pintura y escombros,
              dejando el nuevo espacio impecable y listo para usar.
            </p>
          </div>
          <Image
            src="/service-construction.jpg"
            width={800}
            height={533}
            alt="Limpieza después de una obra de construcción"
            className="service-image"
          />
        </div>

        <div className="service-item">
          <div className="service-text">
            <h2>Limpieza de Oficinas y Despachos</h2>
            <p>
              Mantenemos tu entorno de trabajo limpio y ordenado. Ofrecemos limpieza diaria o semanal de oficinas,
              despachos y locales comerciales, incluyendo suelos, puestos de trabajo, pantallas, baños y zonas de
              descanso.
            </p>
          </div>
          <Image
            src="/service-office.jpg"
            width={800}
            height={533}
            alt="Limpieza profesional de una oficina moderna"
            className="service-image"
          />
        </div>

        <div className="service-item">
          <div className="service-text">
            <h2>Servicios Puntuales y de Mantenimiento</h2>
            <p>
              Además de limpiezas regulares, atendemos servicios puntuales: limpiezas generales por mudanza, después de
              eventos o tratamientos específicos de suelos. También ofrecemos planes de mantenimiento a medida.
            </p>
          </div>
          <Image
            src="/service-maintenance.jpg"
            width={800}
            height={533}
            alt="Carro con material de limpieza para servicios de mantenimiento"
            className="service-image"
          />
        </div>
      </section>
    </>
  );
}
