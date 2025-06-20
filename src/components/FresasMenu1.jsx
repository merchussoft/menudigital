import { motion } from "framer-motion";
import { Productos_session } from "../data/framer-motion-fresas";
import { Modal } from "../pages/Modal";
import { useState } from "react";
import logoSantaFresitas from '../assets/logo-santafresita2.png';
import fondoFresas from '../assets/fondo-fresas2.png';

const formatoPesos = (valor) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0
  }).format(valor);

export const FresasMenu1 = () => {


  const [ itemSeleccionado, setitemSeleccionado ] = useState(null);

  const abrir_modal = (item) =>setitemSeleccionado(item);
  const cerrar_modal = () => setitemSeleccionado(null);


  return (
  <div className="relative min-h-screen font-sans">
    {/* Fondo con opacidad */}
    <div
      className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20 z-0"
      style={{ backgroundImage: `url(${fondoFresas})` }}
    ></div>

    {/* Contenido principal */}
    <div className="relative z-10 p-6">
      <div className="flex justify-center items-center gap-4 mb-6">
        <img
          src={logoSantaFresitas}
          alt="Santas Fresitas"
          className="w-60 drop-shadow-lg animate-pulse"
        />
      </div>

      {Productos_session.map((seccion) => (
        <motion.div
          key={seccion.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl text-pink-600 font-semibold mb-4">
            {seccion.titulo}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {seccion.productos.map((producto) => (
              <div
                key={producto.id}
                className="bg-white rounded-3xl border-4 border-fresita-rojo shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
                onClick={() => abrir_modal(producto)}
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-fresita-crema"
                />
                <h3 className="text-lg font-bold text-fresita-oscuro">
                  {producto.nombre}
                </h3>
                <p className="text-center text-gray-600 text-sm">
                  {producto.descripcion}
                </p>
                <p className="text-fresita-rojo font-semibold text-base mt-2">
                  {formatoPesos(producto.precio)}
                </p>
              </div>
            ))}
            
          </div>
        </motion.div>
      ))}

      {itemSeleccionado && <Modal item={itemSeleccionado} onClose={cerrar_modal} />}

      <footer className="mt-10 text-center text-pink-800 italic">
        Ven a degustar nuestra inigualable crema. Hecho con amor 💕
      </footer>
    </div>
  </div>
);

}
