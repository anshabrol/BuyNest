import { useEffect, useState } from "react";
import { authFetch } from "../utils/auth";

function OrdersPage() {

    const BASEURL =
        import.meta.env.VITE_DJANGO_BASE_URL;

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const fetchOrders = async () => {

            const res = await authFetch(
                `${BASEURL}/api/orders/`
            );

            const data =
                await res.json();

            setOrders(data);
        };

        fetchOrders();

    }, []);

    return (
        <div className="pt-24 min-h-screen bg-gray-100 p-6">

            <h1 className="text-3xl font-bold mb-6">
                📦 My Orders
            </h1>

            {orders.length === 0 ? (

                <div className="text-center text-gray-500">
                    No orders yet.
                </div>

            ) : (

                orders.map(order => (

                    <div
                        key={order.id}
                        className="bg-white p-6 rounded-lg shadow mb-4"
                    >

                        <h2 className= "text-xl font-bold text-blue-600">
                            Order #{order.id}
                        </h2>

                        <p>
                            Total:
                            ${order.total_amount}
                        </p>

                        <p>
                            Date:
                            {" "}
                            {new Date(order.created_at)
                                .toLocaleDateString("en-IN", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                            })}
                        </p>

                        <div className="mt-3">

                            {order.items.map(
                                (item, index) => (

                                <div
                                    key={index}
                                    className="text-gray-700"
                                >
                                    {item.product_name}
                                    {" "}
                                    ×
                                    {" "}
                                    {item.quantity}
                                </div>

                            ))}
                        </div>

                    </div>

                ))

            )}

        </div>
    );
}

export default OrdersPage;