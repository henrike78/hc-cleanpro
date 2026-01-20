import Image from "next/image";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10 font-sans text-gray-800 space-y-12">
      <header className="text-center space-y-4">
        <Image src="/logo.png" alt="H&C Clean Pro Logo" width={100} height={100} className="mx-auto" />
        <h1 className="text-4xl font-bold">H&C Clean Pro</h1>
        <p className="text-lg text-gray-600">Limpieza profesional, rápida y sin complicaciones en Barcelona</p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Quiénes somos</h2>
          <p>
            Somos una empresa de limpieza con base en Barcelona. Llevamos más de 2 años trabajando en comunidades,
            limpiezas post-obra y mantenimientos periódicos. Nos caracterizamos por la seriedad, rapidez y el trabajo bien hecho.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6951?auto=format&fit=crop&w=800&q=80"
          alt="Limpieza comunidades"
          className="rounded-xl shadow"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
          alt="Limpieza post-obra"
          className="rounded-xl shadow"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">Limpiezas post-obra</h2>
          <p>
            Dejamos baños, cocinas y viviendas impecables tras cualquier reforma. Eliminamos restos de obra, polvo
            y suciedad en profundidad para que todo quede listo para usar o entregar.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Servicios</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Limpieza de comunidades (escaleras, zonas comunes)</li>
            <li>Limpiezas de obra y post-obra</li>
            <li>Limpiezas urgentes tras reparaciones o siniestros</li>
            <li>Limpieza de oficinas y despachos</li>
            <li>Mantenimientos puntuales o programados</li>
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1590490360187-dfedbc827105?auto=format&fit=crop&w=800&q=80"
          alt="Limpieza de oficinas"
          className="rounded-xl shadow"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https://images.unsplash.com/photo-1616627984805-d3499f4e1c2c?auto=format&fit=crop&w=800&q=80"
          alt="Herramientas de limpieza"
          className="rounded-xl shadow"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">Por qué elegirnos</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Personal contratado, asegurado y formado</li>
            <li>Seguro de responsabilidad civil activo</li>
            <li>Respuesta rápida en Barcelona y alrededores</li>
            <li>Confianza y calidad garantizada</li>
          </ul>
        </div>
      </section>

      <footer className="text-center border-t pt-6 space-y-1">
        <h2 className="text-xl font-semibold">Contacto</h2>
        <p>Email: info@hccleanpro.com</p>
        <p>Teléfono: [Número pendiente]</p>
        <p>Barcelona y alrededores</p>
      </footer>
    </main>
  );
}