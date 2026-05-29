import {Link, useNavigate} from 'react-router-dom';
import {useCart} from '../context/CartContext.jsx';
import { clearTokens, getAccessToken } from '../utils/auth.js';
const username = localStorage.getItem("username");

function Navbar() {
    const {cartItems} = useCart();
    const navigate = useNavigate();
    
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    const isLoggedIn = !!getAccessToken();
    const username =
    localStorage.getItem("username") || "";

    const displayName = username
        .replace(/[^a-zA-Z0-9]/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .map(
            word =>
                word.charAt(0).toUpperCase() +
                word.slice(1)
        )
        .join(" ");

    const handleLogout = () => {
        clearTokens();
        localStorage.removeItem(
            "username"
        );
        navigate('/login');
    };
    return (
        <nav className='bg-white shadow-md px-6 py-6 flex justify-between items-center fixed w-full top-0 z-50'>
    
            <Link
                to='/'
                className='text-2xl font-bold text-gray-800'
            >
                🌐🚚 BuyNest
            </Link>
    
            <div className='flex items-center gap-6'>
    
                <Link
                    to='/'
                    className='text-gray-800 hover:text-gray-600 font-medium'
                >
                    Home
                </Link>
                <Link to="/orders" className="text-gray-800 hover:text-gray-600 font-medium">
                    Orders
                </Link>
                <Link
                    to='/cart'
                    className='relative text-gray-800 hover:text-gray-600 font-medium'
                >
                    🛒 Cart
    
                    {cartCount > 0 && (
                        <span className='absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full px-2'>
                            {cartCount}
                        </span>
                    )}
                </Link>
    
                {!isLoggedIn ? (
                    <>
                        <Link
                            to='/login'
                            className='text-gray-800 hover:text-gray-600 font-medium'
                        >
                            Login
                        </Link>
    
                        <Link
                            to='/signup'
                            className='text-gray-800 hover:text-gray-600 font-medium'
                        >
                            Sign Up
                        </Link>
                    </>
                ) : (
                    <>
                        <span className='text-gray-600 font-medium'>
                            Welcome, {displayName}
                        </span>
    
                        <button
                            onClick={handleLogout}
                            className='text-red-600 hover:text-red-500 font-medium'
                        >
                            Logout
                        </button>
                    </>
                )}
    
            </div>
    
        </nav>
    )
}

export default Navbar;