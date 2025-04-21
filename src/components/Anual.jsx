import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const Anual = () => {

    return (

        <div id="anual" className="flex w-full h-full bg-amber-50 border-t border-gray-300 py-5">
            <section className="w-4/12 flex flex-col min-h-screen text-violet-950 items-center justify-start px-6 py-16">
                <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-6 relative group cursor-pointer">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-amber-500" />
                    <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-amber-500 after:transition-all after:duration-500 group-hover:after:w-full">
                        Ataques Anuales
                    </span>
                </h1>
                <p className="max-w-xl text-base md:text-lg leading-relaxed mb-8">
                    Compara la cantidad de ciberataques por país entre 2015 y 2024. Esta visualización facilita la comparación clara de los datos entre múltiples países en dicho período. Permite analizar picos de actividad y patrones de ataque, lo que puede ayudar a identificar tendencias y áreas de preocupación. Además, la visualización puede ser útil para la toma de decisiones informadas en materia de ciberseguridad y para la asignación de recursos en función de los países más afectados.
                </p>
            </section>
            <section className="w-8/12 flex justify-center items-center px-4">
                <img
                    src="/01_pais_por_año.png"
                    alt="pais_por_anio"
                />
            </section>
        </div>

    );

};

export default Anual;