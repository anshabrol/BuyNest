import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

    useEffect(() => {
        fetch(`${BASEURL}/api/products/`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return response.json();
        })
        .then((data)=>{
            setProducts(data);
            setLoading(false);
        })
        .catch((error)=>{
            setError(error.message);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <h2 className="text-2xl font-semibold text-gray-600">
                    Loading Products...
                </h2>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="min-h-screen bg-gray-100 pt-24">
            <div className="bg-white shadow-md py-6">
                <div className="flex justify-center mt-5">
                    <input
                        type="text"
                        placeholder="🔍 Search products..."
                        value={searchTerm}
                         onChange={(e) => setSearchTerm(e.target.value)}
                        className="
                            w-full
                            max-w-md
                            px-4
                            py-3
                            border
                            rounded-lg
                            shadow-sm
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                        "
                    />
                </div>
                <h1 className="text-4xl font-bold text-center text-gray-800">
                    🛍️ Explore Our Products
                </h1>

                <p className="text-center text-gray-500 mt-2">
                     Discover quality products at the best prices
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {products.length > 0 ? (
                    filteredProducts.map((product)  => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 text-lg">
                        No products found 🔍
                    </p>
                )}
            </div>
        </div>
    )
}

export default ProductList;