import { motion } from "framer-motion";
import { Productos_session } from "../data/framer-motion-fresas";

const formatoPesos = (valor) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0
  }).format(valor);

export const FresasMenu1 = () => {
  return (
    <div className="bg-pink-50 min-h-screen p-6 font-sans">
      <h1 className="text-4xl text-pink-700 font-bold text-center mb-6">
        Menú FRESU-KISS
      </h1>
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
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-pink-300"
                />
                <h3 className="text-lg font-bold text-pink-700">
                  {producto.nombre}
                </h3>
                <p className="text-center text-gray-600 text-sm">
                  {producto.descripcion}
                </p>
                <p className="text-pink-700 font-semibold text-base mt-2">
                  {formatoPesos(producto.precio)}
                </p>
                <button className="mt-3 bg-pink-600 text-white px-4 py-1 rounded-full shadow hover:bg-pink-700">
                  Hacer pedido
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
      <footer className="mt-10 text-center text-pink-800 italic">
        Ven a degustar nuestra inigualable crema. Hecho con amor 💕
      </footer>
    </div>
  )
}
