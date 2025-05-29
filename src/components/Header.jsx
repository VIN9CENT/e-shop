import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const cartCount = useSelector(state =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
);
 

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-green-600"
        >
          <IoLogoUsd className="mr-2 text-3xl" />
          logo
        </Link>
        <ul className="flex items-center space-x-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="relative hover:text-blue-500 transition"
            >
              <FaShoppingCart className="text-2xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
