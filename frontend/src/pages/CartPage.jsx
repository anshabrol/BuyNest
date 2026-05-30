import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
    const { cartItems,total, removeFromCart, updateQuantity } = useCart();
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
    console.log("Cart Items:", cartItems);

    return (
        <div className="pt-24 min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>
            {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-20">
                    <h2 className="text-3xl font-bold text-gray-700 mb-3">
                        Cart is Empty
                    </h2>

                    <p className="text-gray-500 mb-6">
                        Looks like you haven't added anything yet.
                    </p>

                    <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
            /*
            {cartItems.length === 0 ? (
                <p className="text-center text-gray-600">Your cart is empty.</p>
            ) : (
                */
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            //className="flex items-center justify-between mb-4"
                            className="flex items-center justify-between mb-6 p-4 border rounded-lg hover:shadow-md transition"
                        >
                            <div className="flex items-center gap-4">
                                {item.product_image && (
                                    <img
                                        src={item.product_image}
                                        alt={item.product_name}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                )}
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">
                                    {item.product_name}
                                </h2>
                                <p className="text-gray-600">
                                    ${item.product_price}
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded transition"
                                    onClick={() =>
                                        updateQuantity(
                                            item.id,
                                            item.quantity - 1
                                        )
                                    }
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded transition"
                                    onClick={() =>
                                        updateQuantity(
                                            item.id,
                                            item.quantity + 1
                                        )
                                    }
                                >
                                    +
                                </button>
                                <button className="text-red-500 hover:text-red-700 font-medium"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="border-t pt-6 mt-6 flex justify-between items-center">
                        <h2 className="text-xl font-bold">Total:</h2>
                        <p className="text-xl font-semibold">${total.toFixed(2)}</p>
                        <Link to="/checkout" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-semibold">
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartPage;
