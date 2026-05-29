import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

        <img
          src={`${BASEURL}${product.image}`}
          alt={product.name}
          className="w-full h-56 object-cover"
        />

        <div className="p-4">

          <h2 className="text-lg font-bold text-gray-800 mb-2">
            {product.name}
          </h2>

          <p className="text-gray-500 text-sm mb-3 line-clamp-1 overflow-hidden">
            {product.discription || "No description available"}
          </p>

          <div className="flex justify-between items-center">

            <span className="text-xl font-bold text-green-600">
              ${product.price}
            </span>

            <button
              className="bg-black text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
            >
              View Details
            </button>

          </div>

        </div>

      </div>
    </Link>
  );
}

export default ProductCard;


/*
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform p-4 cursor-pointer">
        <img
          src={`${BASEURL}${product.image}`}
          alt={product.name}
          className="w-full h-56 object-cover rounded-lg mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h2>
        <p className="text-gray-600 font-medium">${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
*/