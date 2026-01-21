import Head from 'next/head';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    alert('¡Gracias! Tu mensaje ha sido enviado (simulación).');
  };

  return (
    <>
      <Head>
        <title>Contacto – H&amp;C Clean Pro</title>
        <meta
          name="description"
          content="Contacta con H&C Clean Pro: solicita tu presupuesto de limpieza en Barcelona. Formulario de contacto, teléfono y email."
        />
      </Head>

      <section>
        <h1>Contacto</h1>
        <p>
          ¿Tienes alguna consulta o necesitas un presupuesto a medida? Envíanos un mensaje y te responderemos lo antes
          posible. Estaremos encantados de ayudarte.
        </p>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <br />
            <input type="text" id="name" name="name" required placeholder="Tu nombre completo" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" required placeholder="Tu correo electrónico" />
          </div>
          <div>
            <label htmlFor="phone">Teléfono:</label>
            <br />
            <input type="tel" id="phone" name="phone" placeholder="Tu teléfono (opcional)" />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <br />
            <textarea id="message" name="message" rows="4" required placeholder="Escribe aquí tu mensaje" />
          </div>
          <button type="submit" className="cta-button">
            Enviar Mensaje
          </button>
        </form>

        {submitted && <p><em>¡Gracias por contactarnos! En breve responderemos a tu solicitud.</em></p>}
      </section>

      <section>
        <h2>Otros Medios de Contacto</h2>
        <p>
          <strong>Teléfono:</strong>{' '}
          <a href="tel:+34931123456">
            93 112 34 56
          </a>
        </p>
        <p>
  <strong>Email:</strong>{' '}
  <a href="mailto:hyccleanpro@gmail.com">
    hyccleanpro@gmail.com
  </a>
</p>
        <p>
          También puedes contactarnos directamente vía WhatsApp usando el botón flotante.
        </p>
      </section>
    </>
  );
}
