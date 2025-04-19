import React from "react";

const Nav = () => {

    const handleScroll = (id) => {

        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        };

    };

    return (

        <nav className="fixed top-0 w-full bg-violet-950 text-white shadow-md shadow-violet-950 z-50">
            <ul className="flex justify-around py-4">
                <li>
                    <button
                        onClick={() => handleScroll("inicio")}
                        className="text-lg px-4 py-2 hover:text-amber-300"
                    >
                        Inicio
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleScroll("anual")}
                        className="text-lg px-4 py-2 hover:text-amber-300"
                    >
                        Ataques Anuales
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleScroll("mapa")}
                        className="text-lg px-4 py-2 hover:text-amber-300"
                    >
                        Mapa
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleScroll("evolucion")}
                        className="text-lg px-4 py-2 hover:text-amber-300"
                    >
                        Evolución
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleScroll("tipos")}
                        className="text-lg px-4 py-2 hover:text-amber-300"
                    >
                        Tipos de Ataques
                    </button>
                </li>
            </ul>
        </nav>

    );

};

export default Nav;