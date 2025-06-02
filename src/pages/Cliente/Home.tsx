import 'bootstrap/dist/css/bootstrap.min.css';
import fondoHome from '../../assets/fondo home foodius.png';

const Home = () => {
  return (
    <div className="d-flex flex-column" style={{ overflowX: 'hidden' }}>
      {/* Imagen de fondo */}
      <div
        className="d-flex justify-content-start align-items-end w-100"
        style={{
          height: '100vh',
          backgroundImage: `url(${fondoHome})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '2rem',
          boxSizing: 'border-box',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <div
          className="text-start"
          style={{
            marginLeft: '10vw',
            marginBottom: '30vh',
          }}
        >
          <h2
            className="m-0"
            style={{
              fontSize: 'clamp(2rem, 8vw, 90px)',
              color: 'black',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700', // o 'bold'
            }}
          >
            Bienvenido
          </h2>
          <h4
            className="m-0"
            style={{
              fontSize: 'clamp(2rem, 8vw, 90px)',
              color: '#F20574',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700', // o 'bold'
            }}
          >
            a Foodius
          </h4>
        </div>

      </div>

      {/* Divs inferiores */}
      <div className="d-flex" style={{ height: '25vh' }}>
        <div className="col-6 bg-success text-white d-flex justify-content-center align-items-center">
          <p>Columna 1 - Div 2</p>
        </div>
        <div className="col-6 bg-warning d-flex justify-content-center align-items-center">
          <p>Columna 2 - Div 2</p>
        </div>
      </div>

      <div className="d-flex" style={{ height: '25vh' }}>
        <div className="col-6 bg-danger text-white d-flex justify-content-center align-items-center">
          <p>Columna 1 - Div 3</p>
        </div>
        <div className="col-6 bg-info d-flex justify-content-center align-items-center">
          <p>Columna 2 - Div 3</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
