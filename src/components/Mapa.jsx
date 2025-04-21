import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

const Mapa = () => {

    return (

        <div id="mapa" className="w-full h-full bg-amber-50 border-t border-gray-300 flex flex-col items-center justify-center">
            <section className="text-violet-950 flex flex-col justify-center items-center">
                <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-4 relative group cursor-pointer">
                    <FontAwesomeIcon icon={faMapLocationDot} className="text-amber-500" />
                    <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-amber-500 after:transition-all after:duration-500 group-hover:after:w-full">
                        Mapa
                    </span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed mb-8 text-center">Este gráfico muestra los países más afectados por ciberataques, basándose en los datos del primer gráfico. La segmentación busca focalizar y alertar sobre las zonas de mayor riesgo.</p>
            </section>
            <section className="flex items-center justify-center">
                <img src="/02_mapa_ataques.png" alt="mapa" />
                <img src="/03_mapa_ataques_2.png" alt="barra" />
            </section>
        </div>

    );

};

export default Mapa