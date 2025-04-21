import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const Home = () => {

    return (

        <section
            id="inicio"
            className="h-full bg-cover bg-center relative flex items-center text-violet-950 justify-start px-12"
        >
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
                <source src="/video/bg-video-cover.webm" type="video/webm" />
            </video>
            <div className="relative text-white max-w-xl z-10">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-amber-300 mb-4 drop-shadow-lg flex items-center gap-4 transition-all duration-500 transform hover:translate-x-3 hover:text-amber-400">
                    <FontAwesomeIcon icon={faShieldHalved} />Ciberseguridad</h1>
                <p className="relative text-lg transition-all duration-500 hover:scale-105 hover:bg-black/30 backdrop-blur-sm hover:text-white px-4 py-3 rounded-2xl border border-white/10 shadow-inner overflow-hidden group">
                    <span className="relative z-10">Es la práctica de proteger sistemas informáticos, redes, programas y datos contra accesos no autorizados, ataques, daños o robos. Su objetivo es garantizar la confidencialidad, integridad y disponibilidad de la información digital.</span>
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-amber-400 transition-all duration-500 group-hover:w-full"></span>
                </p>
            </div>
        </section>

    );

};

export default Home