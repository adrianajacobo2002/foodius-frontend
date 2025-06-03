import { Typography } from "@mui/material";
import "./partner.css";
import logo from "../../assets/img/foodius-logo.png";
import phone from "../../assets/img/new.png";
import globo from "../../assets/img/globo.jpg";
import plato from "../../assets/img/plato.png";
import Footer from "../../layouts/Footer/index";
import formas from "../../assets/img/formas.png";

export default function FoodiusPartner() {
  return (
    <div className="foodius-container">
      <section className="hero-foodius">
        <div className="hero-content">
          {/* Columna izquierda */}
          <div className="hero-left">
            <Typography>
              <h1 className="hero-title">Sé parte de</h1>
              <p className="text-pink">#Foodius</p>
            </Typography>
            <Typography>
              <ul className="hero-benefits">
                <li>Facilidad de pago</li>
                <li>Crecimiento escalable</li>
                <li>Conexión directa</li>
              </ul>
            </Typography>
            <Typography>
              <p className="hero-description">
                Asóciate a Foodius para impulsar el crecimiento y llevar tus{" "}
                <span className="highlight">antojitos</span> a un{" "}
                <span className="highlight">nuevo nivel</span>.
              </p>
            </Typography>
          </div>

          {/* Columna derecha */}

          <div className="hero-form">
            <img src={logo} alt="Foodius" className="form-logo" />
            <input type="text" placeholder="Nombre del Negocio" />
            <input type="text" placeholder="Ubicación de tu Negocio" />
            <input type="email" placeholder="Correo electrónico" />
            <input type="text" placeholder="Teléfono comercial" />
            <button className="btn-register-form">
              <Typography>Registrarse</Typography>
            </button>
          </div>
        </div>
      </section>

      {/* Digital Visibility Section */}
      <section className="foodius-visibility-section">
        <div className="visibility-content">
          {/* Columna izquierda: Texto */}
          <div className="visibility-text">
            <Typography>
              <p className="foodius-section-title">
                Brilla en el{" "}
                <span className="highlight-pink">Menú Digital</span>:
                <br />
                Aumenta tu Visibilidad con{" "}
                <span className="highlight-pink">#Foodius</span>
              </p>
            </Typography>
            <div className="foodius-why-text-block">
              <p className="foodius-why-title">¿Por qué?</p>
              <Typography>
                <p className="foodius-why-text">
                  Al unirte a Foodius, tu restaurante o negocio ganará
                  visibilidad y alcanzará una audiencia de clientes potenciales
                  que buscan opciones gastronómicas locales.
                </p>
              </Typography>
            </div>
          </div>

          {/* Columna derecha: Imagen del teléfono */}
          <div className="image-with-labels">
            <img src={phone} alt="Phone" className="phone" />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="foodius-testimonial-section">
        <div className="testimonial-left">
          <Typography>
            <h3 className="testimonial-title">#FoodiusPartner</h3>
          </Typography>
          <Typography>
            <p className="testimonial-text">
              "Sin duda, Foodies ha superado nuestras expectativas al ayudarnos
              en cada situación que se presenta, y más allá de eso, nos han
              brindado gran apoyo en cuanto a marketing, branding y difusión de
              Favoritos."
            </p>
          </Typography>
        </div>

        <div className="testimonial-image-right">
          <img src={globo} alt="Globo" className="testimonial-image" />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="foodius-grow-section">
        <div className="grow-image-left">
          <img src={plato} alt="Plato" className="grow-image" />
        </div>
        <div className="grow-text-right">
          <Typography>
            <p className="grow-description">
              Crece con Foodius. Amplía tu alcance al incluir tu negocio en la
              aplicación. Aumenta las ventas conectándote con los clientes que
              buscan opciones de pickup. Cada asociación incluye nuestro sistema
              de pedidos en línea personalizable.
            </p>
          </Typography>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="foodius-welcome">
        <Typography>
          <p className="foodius-welcome-title">
            Bienvenido <br />
            <Typography>
              <span className="text-pink-partner">#FoodiusPartner</span>
            </Typography>
          </p>
        </Typography>

        <Typography>
          <button className="foodius-start-button">
            Administra tu negocio
          </button>
        </Typography>
        <img src={formas} alt="Glofromasbo" className="formas" />
      </section>

      {/* FAQ */}
      <section className="foodius-faq">
        <Typography>
          <p className="foodius-faq-title">Preguntas frecuentes</p>
        </Typography>
        <div className="foodius-faq-list">
          <details className="foodius-faq-item">
            <summary className="foodius-faq-question">
              ¿Cómo puedo unirme a la familia Foodius?
            </summary>
            <p className="foodius-faq-answer">
              Solo debes llenar el formulario y nos pondremos en contacto
              contigo.
            </p>
          </details>
          <details className="foodius-faq-item">
            <summary className="foodius-faq-question">
              ¿Qué beneficios obtengo?
            </summary>
            <p className="foodius-faq-answer">
              Visibilidad digital, más clientes, herramientas promocionales y
              mucho más.
            </p>
          </details>
          <details className="foodius-faq-item">
            <summary className="foodius-faq-question">
              ¿Cuánto cuesta ser parte?
            </summary>
            <p className="foodius-faq-answer">
              ¡Ser parte de Foodius es completamente gratis!
            </p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
