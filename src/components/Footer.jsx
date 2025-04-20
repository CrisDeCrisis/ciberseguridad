import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-violet-950 via-violet-900 to-violet-950 text-white py-6 shadow-md shadow-violet-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="max-w-4xl mx-auto text-center group cursor-pointer">
            <h2 className="text-lg font-semibold mb-2 tracking-wide transition-all duration-500 transform group-hover:text-amber-300">Integrantes</h2>
        </div>
        <p className="text-sm text-gray-300">
          <span className="flex justify-center space-x-4">
            <span className="relative group px-2 py-1 rounded-lg overflow-hidden transition-all duration-300">
              <span className="absolute inset-0 bg-white w-full h-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500"></span>
              <span className="relative group-hover:text-violet-950 transition-all duration-300">
                Tomas Ramos
              </span>
            </span>
            <span className="relative group px-2 py-1 rounded-lg overflow-hidden transition-all duration-300">
              <span className="absolute inset-0 bg-white w-full h-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500"></span>
              <span className="relative group-hover:text-violet-950 transition-all duration-300">
                Cristian Gonzales Samaniego
              </span>
            </span>
            <span className="relative group px-2 py-1 rounded-lg overflow-hidden transition-all duration-300">
              <span className="absolute inset-0 bg-white w-full h-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500"></span>
              <span className="relative group-hover:text-violet-950 transition-all duration-300">
                Tobias Talavera
              </span>
            </span>
          </span>
        </p>
        <p className="text-xs text-gray-400 mt-4">
          © {new Date().getFullYear()} Cyber Seguridad. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
