import Head from 'next/head';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    alert('Gracias. Hemos recibido tu mensaje.');
  };

  return (
    <>
      <Head>
        <title>Contacto | H&amp;C Clean Pro</title>
        <meta
          name="description"
          content="Contacta con H&C Clean Pro para pedir un presupuesto de limpieza en Barcelona."
        />
      </Head>

      <section>
        <h1>Contacto</h1>
        <p>
          Si quieres un presupuesto o tienes dudas, rellena este formulario y te responderemos lo antes posible.
        </p>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre</label>
            <br />
            <input type="text" id="name" name="name" required placeholder="Tu nombre" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email" name="email" required placeholder="Tu correo electrónico" />
          </div>
          <div>
            <label htmlFor="phone">Teléfono</label>
            <br />
            <input type="tel" id="phone" name="phone" placeholder="Tu teléfono (opcional)" />
          </div>
          <div>
            <label htmlFor="service">Tipo de servicio</label>
            <br />
            <select id="service" name="service" defaultValue="">
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="comunidad">Comunidad / escalera</option>
              <option value="fin-obra">Fin de obra</option>
              <option value="oficina">Oficina / negocio</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Qué necesitas</label>
            <br />
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="Cuéntanos si es comunidad, oficina, fin de obra, zona de Barcelona, etc."
            />
          </div>
          <button type="submit" className="cta-button">
            Enviar
          </button>
        </form>

        {submitted && (
          <p>
            <em>Gracias por contactarnos. Te responderemos en cuanto podamos.</em>
          </p>
        )}
      </section>

      <section>
        <h2>Otras formas de contacto</h2>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:hyccleanpro@gmail.com">hyccleanpro@gmail.com</a>
        </p>
        <p>
          También puedes escribirnos directamente por WhatsApp con el botón que ves en la esquina inferior
          derecha.
        </p>
      </section>
    </>
  );
}
