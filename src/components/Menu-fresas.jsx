const productos = [
  {
    id: 1,
    nombre: "Fresas con Crema 9 Oz",
    descripcion: "Crema Delii, Fresas, Leche condensada o Nutella, 1 Topping",
    precio: 12000, // en pesos
    imagen: "https://i0.wp.com/sarasellos.com/wp-content/uploads/2023/10/fresas-crema2.png?fit=775%2C477&ssl=1"
  },
  {
    id: 2,
    nombre: "Fresas con Crema 16 Oz",
    descripcion:
      "Crema Delii, Fresas, Leche condensada y Nutella, 2 toppings",
    precio: 18000,
    imagen: "https://editorialtelevisa.brightspotcdn.com/dims4/default/14dffb2/2147483647/strip/true/crop/740x740+0+19/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fc1%2F66%2F9ddf596044b0aef62ac5724797ab%2Ffresas-con-crema.jpg"
  },
  {
    id: 3,
    nombre: "Toppings adicionales",
    descripcion: "Pirulín, Oreo, Dandy, Gotas de chocolate, Flip",
    precio: 1500,
    imagen: "https://cocinemosjuntos.com.co/media/catalog/product/cache/5773068ed9b4f222a4301212c252d702/o/b/obleas-con-crema-de-leche-arequipe-y-queso-campesino_1__1.jpg"
  }
];

const formatoPesos = (valor) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0
  }).format(valor);

export const MenuFresas = () => {
  return (
    <div className="min-h-screen bg-pink-100 p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-pink-800 mb-6">Menú Delii</h1>
      <div className="grid gap-6 w-full max-w-2xl">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-pink-700">
              {producto.nombre}
            </h2>
            <p className="text-center text-gray-700 mb-2">
              {producto.descripcion}
            </p>
            <p className="text-lg font-bold text-pink-600">
              {formatoPesos(producto.precio)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
