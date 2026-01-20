import Image from "next/image";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-10 font-sans text-gray-800">
      <header className="flex flex-col items-center space-y-4">
        <Image src="/logo.png" alt="H&C Clean Pro Logo" width={120} height={120} />
        <h1 className="text-4xl font-bold text-center">H&C Clean Pro</h1>
        <p className="text-lg text-center text-gray-600">
          Limpieza profesional, rápida y sin complicaciones en Barcelona
        </p>
      </header>

      <section>
        <img
          src="https://images.unsplash.com/photo-1604882352409-1cc2c15a0171?auto=format&fit=crop&w=1200&q=80"
          alt="Limpieza profesional"
          className="rounded-xl shadow w-full h-64 object-cover"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Quiénes somos</h2>
          <p>
            Somos una empresa de limpieza con más de 2 años de experiencia en comunidades y limpiezas post-obra.
            Nos enfocamos en ofrecer un servicio directo, profesional y adaptado a cada cliente.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Qué hacemos</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Limpieza de comunidades (escaleras, zonas comunes)</li>
            <li>Limpiezas de obra y post-obra</li>
            <li>Limpiezas urgentes tras reparaciones o siniestros</li>
            <li>Limpieza de oficinas y espacios de trabajo</li>
            <li>Mantenimientos puntuales o regulares</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-xl shadow space-y-2">
        <h2 className="text-2xl font-semibold mb-2">Especialistas en limpiezas post-obra</h2>
        <p>
          Dejamos baños, cocinas y viviendas listas para entregar tras reformas o acabados de obra.
          Eliminamos polvo, restos y suciedad a fondo para que el espacio quede realmente limpio y presentable.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Por qué contar con nosotros</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Personal contratado, asegurado y formado</li>
            <li>Servicio rápido, bien hecho y sin rodeos</li>
            <li>Cobertura en toda el área de Barcelona</li>
            <li>Seguro de responsabilidad civil activo</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Clientes habituales</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Constructoras y promotoras</li>
            <li>Comunidades de vecinos</li>
            <li>Administradores de fincas</li>
            <li>Oficinas, despachos y particulares tras reforma</li>
          </ul>
        </div>
      </section>

      <section className="text-center border-t pt-6 space-y-1">
        <h2 className="text-2xl font-semibold">Contacto</h2>
        <p>Email: info@hccleanpro.com</p>
        <p>Teléfono: [Número pendiente]</p>
        <p>Barcelona y alrededores</p>
      </section>
    </main>
  );
}