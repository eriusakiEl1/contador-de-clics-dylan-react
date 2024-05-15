import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import banner1 from "./imagenes/banner1.png";
import banner2 from "./imagenes/banner2.jpg";
import logo from "./imagenes/freecodecamp-logo.png"
import fondo from "./imagenes/fondo1.png";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="" src={logo} alt="logo" />
      </div>

      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
