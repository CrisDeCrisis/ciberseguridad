import React from "react";
import Nav from "./components/Nav";
import Anual from "./components/Anual";
import Mapa from "./components/Mapa";
import Evolucion from "./components/Evolucion";
import Tipos from "./components/Tipos";

const App = () => {
  return (
    <>
      <Nav />
      <section
        id="inicio"
        className="h-screen bg-amber-50 text-violet-950 flex items-center justify-center"
      >
        <h1 className="text-4xl">Inicio</h1>
      </section>
      <section
        id="anual"
        className="h-screen bg-amber-50 text-violet-950 flex items-center justify-center"
      >
        <Anual />
      </section>
      <section
        id="mapa"
        className="h-screen bg-amber-50 text-violet-950 flex items-center justify-center"
      >
        <Mapa />
      </section>
      <section
        id="evolucion"
        className="h-screen bg-amber-50 text-violet-950 flex items-center justify-center"
      >
        <Evolucion />
      </section>
      <section
        id="tipos"
        className="h-screen bg-amber-50 text-violet-950 flex items-center justify-center"
      >
        <Tipos />
      </section>
    </>
  );
};

export default App;