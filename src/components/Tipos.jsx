import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";


const Tipos = () => {

    return (

        <div id="tipos" className="flex w-full h-[82%] bg-amber-50 border-t border-gray-300 py-5">
            <section className="w-1/2 text-violet-950 flex flex-col items-center justify-center text-center">
                <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-4 relative group cursor-pointer">
                    <FontAwesomeIcon icon={faBug} className="text-amber-500" />
                    <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-amber-500 after:transition-all after:duration-500 group-hover:after:w-full">
                        Tipos de Ataques
                    </span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed mb-8"> Análisis de la proporción según el tipo de ataque, que permite visualizar la distribución porcentual de los diferentes tipos de ataques y facilitar su comparación jerárquica.
                </p>
            </section>
            <section className="w-1/2 flex justify-center items-center px-4">
                <img src="05_circular.png" alt="tipos_de_ataques" />
            </section>
        </div>

    );

};

export default Tipos