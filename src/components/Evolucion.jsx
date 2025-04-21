import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const Evolucion = () => {

    return (

        <div id="evolucion" className="w-full h-full bg-amber-50 border-t border-gray-300 flex flex-col items-center justify-center">
            <section className="text-violet-950 flex flex-col justify-center items-center">
                <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-4 relative group cursor-pointer">
                    <FontAwesomeIcon icon={faChartLine} className="text-amber-500" />
                    <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-amber-500 after:transition-all after:duration-500 group-hover:after:w-full">
                        Evolución
                    </span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed mb-8 text-center">Muestra la frecuencia de ciberataques a lo largo del tiempo, analizando tendencias para una proyección futura que permita anticipar y fortalecer las defensas ante posibles aumentos.</p>
            </section>
            <section className="flex items-center justify-center">
                <img src="04_evolucion.png" alt="evolucion_por_anio" className="w-180" />
            </section>
        </div>

    );

};

export default Evolucion