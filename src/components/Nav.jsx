import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faShieldHalved,
  faMapLocationDot,
  faChartLine,
  faBug
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-violet-950/75 border border-white/10 backdrop-blur-md text-white shadow-md shadow-violet-950 z-50 rounded-b-3xl transition-all duration-500">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <img src="../../public/cyber_security.png" alt="Logo" className="h-10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:animate-pulse" />
          <span className="text-2xl font-bold tracking-wide transition-all duration-500 transform group-hover:translate-x-1 group-hover:text-amber-300">Ciberseguridad</span>
        </div>
        <ul className="flex space-x-4">
          {[
            { id: "inicio", icon: faHouse, label: "Inicio" },
            { id: "anual", icon: faShieldHalved, label: "Ataques Anuales" },
            { id: "mapa", icon: faMapLocationDot, label: "Mapa" },
            { id: "evolucion", icon: faChartLine, label: "Evolución" },
            { id: "tipos", icon: faBug, label: "Tipos de Ataques" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className="group flex items-center overflow-hidden bg-transparent hover:bg-white hover:text-violet-950 transition-all duration-300 px-2 py-2 rounded-full w-10 hover:w-45 font-bold"
              >
                <FontAwesomeIcon icon={item.icon} className="text-xl" />
                <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
