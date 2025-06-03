import { useState } from "react";
import { Typography } from "@mui/material";
import "./partner.css";
import logo from "../../assets/img/foodius-logo.png";
import phone from "../../assets/img/new.png";
import globo from "../../assets/img/globo.jpg";
import plato from "../../assets/img/plato.png";
import Footer from "../../layouts/Footer/index";
import formas from "../../assets/img/formas.png";
import businessService from "../../services/businessService";

// Leaflet
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix del icono por defecto de leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function FoodiusPartner() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState<[number, number]>([13.6929, -89.2182]);

  const handleSubmit = async () => {
    try {
      const data = {
        name,
        location,
        email,
        phone_number: phoneNumber,
        password,
        latitude: position[0],
        longitude: position[1],
      };

      await businessService.registerBusiness(data);
      alert("Negocio registrado correctamente. Esperando aprobación.");
      setName("");
      setLocation("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
    } catch (error) {
      console.error("Error al registrar negocio:", error);
      alert("Error al registrar el negocio");
    }
  };

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  return (
    <div className="foodius-container">
      {/* Sección principal con el formulario */}
      <section className="hero-foodius">
        <div className="hero-content">
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

          <div className="hero-form">
            <img src={logo} alt="Foodius" className="form-logo" />
            <input type="text" placeholder="Nombre del Negocio" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input type="text" placeholder="Ubicación de tu Negocio" value={location} onChange={(e) => setLocation(e.target.value)} required/>
            <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="text" placeholder="Teléfono comercial" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required minLength={8}/>
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8}/>

            <div style={{ height: "300px", borderRadius: "10px", overflow: "hidden" }}>
              <MapContainer center={position} zoom={13} style={{ height: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position} />
                <MapClickHandler />
              </MapContainer>
            </div>

            <button className="btn-register-form" onClick={handleSubmit}>
              <Typography>Registrarse</Typography>
            </button>
          </div>
        </div>
      </section>

      {/* Sección de visibilidad */}
      <section className="foodius-visibility-section">
        <div className="visibility-content">
          <div className="visibility-text">
            <Typography>
              <p className="foodius-section-title">
                Brilla en el <span className="highlight-pink">Menú Digital</span>:<br />
                Aumenta tu Visibilidad con <span className="highlight-pink">#Foodius</span>
              </p>
            </Typography>
            <div className="foodius-why-text-block">
              <p className="foodius-why-title">¿Por qué?</p>
              <Typography>
                <p className="foodius-why-text">
                  Al unirte a Foodius, tu restaurante o negocio ganará visibilidad y alcanzará una audiencia de clientes potenciales que buscan opciones gastronómicas locales.
                </p>
              </Typography>
            </div>
          </div>

          <div className="image-with-labels">
            <img src={phone} alt="Phone" className="phone" />
          </div>
        </div>
      </section>

      {/* Testimoniales */}
      <section className="foodius-testimonial-section">
        <div className="testimonial-left">
          <Typography>
            <h3 className="testimonial-title">#FoodiusPartner</h3>
          </Typography>
          <Typography>
            <p className="testimonial-text">
              "Sin duda, Foodius ha superado nuestras expectativas al ayudarnos en cada situación que se presenta, y más allá de eso, nos han brindado gran apoyo en cuanto a marketing, branding y difusión de Favoritos."
            </p>
          </Typography>
        </div>
        <div className="testimonial-image-right">
          <img src={globo} alt="Globo" className="testimonial-image" />
        </div>
      </section>

      {/* Sección de crecimiento */}
      <section className="foodius-grow-section">
        <div className="grow-image-left">
          <img src={plato} alt="Plato" className="grow-image" />
        </div>
        <div className="grow-text-right">
          <Typography>
            <p className="grow-description">
              Crece con Foodius. Amplía tu alcance al incluir tu negocio en la aplicación. Aumenta las ventas conectándote con los clientes que buscan opciones de pickup. Cada asociación incluye nuestro sistema de pedidos en línea personalizable.
            </p>
          </Typography>
        </div>
      </section>

      {/* Bienvenida */}
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
        <img src={formas} alt="Formas" className="formas" />
      </section>

      {/* Preguntas frecuentes */}
      <section className="foodius-faq">
        <Typography>
          <p className="foodius-faq-title">Preguntas frecuentes</p>
        </Typography>
        <div className="foodius-faq-list">
          <details className="foodius-faq-item">
            <summary className="foodius-faq-question">¿Cómo puedo unirme a la familia Foodius?</summary>
            <p className="foodius-faq-answer">Solo debes llenar el formulario y nos pondremos en contacto contigo.</p>
          </details>
          <details className="foodius-faq-item">
            <summary className="foodius-faq-question">¿Qué beneficios obtengo?</summary>
            <p className="foodius-faq-answer">Visibilidad digital, más clientes, herramientas promocionales y mucho más.</p>
          </details>
          <details className="foodius-faq-item">
            <summary className="foodius-faq-question">¿Cuánto cuesta ser parte?</summary>
            <p className="foodius-faq-answer">¡Ser parte de Foodius es completamente gratis!</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
