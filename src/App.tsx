import "./App.css";
import hatesBravoImg from "./assets/Hates bravo.jpg";


function App() {
  return (
    <div>
    
      <nav className="navbar">
        <h1 className="logo">Hates Bravo</h1>
        <ul className="nav-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Menú</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <main className="main-content">
        <h2>¡Bienvenido a nuestro carrito de hotdogs!</h2>
        <img
          src={hatesBravoImg}
          className="main-image"
          alt="Hates Bravo"
        />
        <p>
          Somos dos estudiantes con ganas de salir adelante.  
          Ven y prueba nuestras creaciones llenas de sabor y buena vibra.
        </p>
      </main>
    </div>
  );
}

export default App;