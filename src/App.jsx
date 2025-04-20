import React from "react";
import Nav from "./components/Nav";
import Anual from "./components/Anual";
import Mapa from "./components/Mapa";
import Evolucion from "./components/Evolucion";
import Tipos from "./components/Tipos";
import Footer from "./components/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faShieldHalved,
  faMapLocationDot,
  faChartLine,
  faBug
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <>
      <Nav />
      <section
        id="inicio"
        className="h-screen bg-cover bg-center relative flex items-center text-violet-950 justify-start px-12"
      >
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/video/5223113-hd_3840_2160_30fps.mp4" type="video/mp4"/>
          Tu navegador no soporta video HTML5.
        </video>
        <div className="relative text-white max-w-xl z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-amber-300 mb-4 drop-shadow-lg flex items-center gap-4 transition-all duration-500 transform hover:translate-x-3 hover:text-amber-400">
            <FontAwesomeIcon icon={faShieldHalved}/>Cyber-Seguridad</h1>
            <p className="relative text-lg transition-all duration-500 hover:scale-105 hover:bg-black/30 backdrop-blur-sm hover:text-white px-4 py-3 rounded-2xl border border-white/10 shadow-inner overflow-hidden group">
              <span className="relative z-10">Ciberseguridad es la práctica de proteger sistemas informáticos, redes, programas y datos contra accesos no autorizados, ataques, daños o robos. Su objetivo es garantizar la confidencialidad, integridad y disponibilidad de la información digital.</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-amber-400 transition-all duration-500 group-hover:w-full"></span>
            </p>

        </div>
      </section>
      <section
        id="anual"
        className="h-screen bg-amber-50 text-violet-950 flex flex-col items-center justify-center text-center space-y-2 border-t border-gray-300"
      >
        <h1 className="text-3xl font-bold flex items-center space-y-100gap-2">
        <FontAwesomeIcon icon={faShieldHalved} className="text-amber-500" />Ataques anuales</h1>
        <p> Compara la cantidad de ciberataques por país entre 2015 y 2024. Esta visualización facilita la comparación clara de los datos entre múltiples países en dicho período.</p>
        <Anual />
      </section>
      <section
        id="mapa"
        className="h-screen bg-amber-50 text-violet-950 flex flex-col items-center justify-center text-center space-y-4 border-t border-gray-300"
      >
        <h1 className="text-3xl font-bold flex items-center gap-2">
        <FontAwesomeIcon icon={faMapLocationDot} className="text-amber-500" />Mapa</h1>
        <p>Este gráfico muestra los países más afectados por ciberataques, basándose en los datos del primer gráfico. La segmentación busca focalizar y alertar sobre las zonas de mayor riesgo.</p>
        <Mapa />
      </section>
      <section
        id="evolucion"
        className="h-screen bg-amber-50 text-violet-950 flex flex-col items-center justify-center text-center space-y-4 border-t border-gray-300"
      >
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <FontAwesomeIcon icon={faChartLine} className="text-amber-500"/>evolucion</h1>
        <p>Muestra la frecuencia de ciberataques a lo largo del tiempo, analizando tendencias para una proyección futura que permita anticipar y fortalecer las defensas ante posibles aumentos.</p>
        <Evolucion />
      </section>
      <section
        id="tipos"
        className="h-screen bg-amber-50 text-violet-950 flex flex-col items-center justify-center text-center space-y-4 border-t border-gray-300"
      >
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <FontAwesomeIcon icon={faBug} className="text-amber-500"/>tipos de ataques</h1>
        <p> Análisis de la proporción según el tipo de ataque, que permite visualizar la distribución porcentual de los diferentes tipos de ataques y facilitar su comparación jerárquica.
        </p>
        <Tipos />
      </section>
      <Footer/>
    </>
  );
};

export default App;