import { motion, AnimatePresence } from 'framer-motion';

const formatoPesos = (valor) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0
  }).format(valor);


export const Modal = ({ item, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white border-4 border-fresita-rojo rounded-2xl p-6 max-w-sm w-full shadow-2xl relative"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-2xl text-gray-500 hover:text-fresita-rojo"
          >
            &times;
          </button>

          <img
            src={item.imagen}
            alt={item.nombre}
            className="rounded-2xl w-full h-48 object-cover mb-4 border-4 border-fresita-crema"
          />
          <h2 className="text-2xl font-extrabold text-fresita-oscuro mb-1">{item.nombre}</h2>
          <p className="text-sm text-gray-700">{item.descripcion}</p>
          <p className="text-sm text-fresita-verde mt-2 italic">{item.detalle}</p>
          <p className="mt-4 text-xl font-extrabold text-fresita-rojo">{formatoPesos(item.precio)}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
