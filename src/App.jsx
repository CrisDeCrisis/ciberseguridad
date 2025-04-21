import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Anual from "./components/Anual";
import Mapa from "./components/Mapa";
import Evolucion from "./components/Evolucion";
import Tipos from "./components/Tipos";
import Footer from "./components/Footer";

const App = () => {

    return (

        <div className="h-screen flex flex-col">
            <article className="h-[10%]">
                <Nav />
            </article>
            <article className="h-[90%] overflow-y-auto">
                <Home />
                <Anual />
                <Mapa />
                <Evolucion />
                <Tipos />
                <Footer />
            </article>
        </div>

    );

};

export default App;