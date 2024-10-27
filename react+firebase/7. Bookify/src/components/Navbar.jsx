import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);
  const { user, handleSignOut } = useFirebase();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    handleSignOut();
    setIsNavActive(false);
    navigate("/");
  };

  const handleClick2 = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 mx-auto bg-opacity-60 bg-black ">
      {/* left side */}
      <div className="flex items-center text-white">
        <div className="cursor-pointer sm:hidden">
          <AiOutlineMenu size={30} onClick={() => setIsNavActive(true)} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 cursor-pointer" onClick={handleClick2}>
          BOOKIFY
        </h1>
      </div>
      <div className="text-white">
        <ul className="hidden sm:flex justify-between w-full">
          <div className="flex gap-x-1">
            {/* Highlight the link when the current location matches */}
            {user && (
              <li className={`flex ${location.pathname === "/addBooks" ? "bg-gray-700 rounded-lg" : ""}`}>
                <Link to="/addBooks" className="hover:text-white hover:bg-gray-700 py-2 px-2 text-xl rounded-lg">
                  Add Books
                </Link>
              </li>
            )}
            {user && (
              <li className={`flex ${location.pathname === "/myBooks" ? "bg-gray-700 rounded-lg" : ""}`}>
                <Link to="/myBooks" className="hover:text-white hover:bg-gray-700 py-2 px-2 text-xl rounded-lg">
                  My Books
                </Link>
              </li>
            )}
            {user && (
              <li className={`flex ${location.pathname === "/buyBooks" ? "bg-gray-700 rounded-lg" : ""}`}>
                <Link to="/buyBooks" className="hover:text-white hover:bg-gray-700 py-2 px-2 text-xl rounded-lg">
                  Buy Books
                </Link>
              </li>
            )}
          </div>
          <div className="flex">
            {!user && (
              <li className={`flex ${location.pathname === "/login" ? "bg-gray-700 rounded-lg" : ""}`}>
                <Link to="/login" className="hover:text-white hover:bg-gray-700 py-2 text-xl px-2 rounded-lg">
                  Log In
                </Link>
              </li>
            )}
            {user && (
              <li>
                <button onClick={handleClick} className="hover:text-white hover:bg-gray-700 py-2 text-xl px-2 rounded-lg">
                  Sign Out
                </button>
              </li>
            )}
            {!user && (
              <li className={`flex ${location.pathname === "/register" ? "bg-gray-700 rounded-lg" : ""}`}>
                <Link to="/register" className="hover:text-white hover:bg-gray-700 py-2 text-xl px-2 rounded-lg">
                  Sign Up
                </Link>
              </li>
            )}
          </div>
        </ul>
      </div>

      {/* Menu background overlay */}
      {isNavActive && <div className="bg-black/80 fixed w-full h-screen top-0 left-0 z-10"></div>}

      {/* Side Drawer menu */}
      {/* To apply transitions we will use ternary operator in className to define two classes. One class will be the how we want the menu to be displayed and the second class will be the same except it will be pushed off the screen. Doing this instead of conditionally rendering elements allows us to use transition effects */}
      <div className={isNavActive ? "bg-white fixed top-0 left-0 h-screen w-[300px] duration-300 z-10" : "bg-white fixed top-0 left-[-100%] h-screen w-[300px] duration-300 z-10"}>
        <div className="flex items-center justify-between p-4 ">
          <p className="text-2xl">Bookify</p>
          <RxCross1 size={30} className="cursor-pointer" onClick={() => setIsNavActive(false)} />
        </div>
        <nav className="p-4 pt-7 pr-0">
          <ul className="text-xl flex flex-col gap-y-8">
            {/* Highlight the link when the current location matches */}
            {user && (
              <li className={`flex `}>
                <Link to="/addBooks" onClick={() => setIsNavActive(false)}>
                  Add books
                </Link>
              </li>
            )}
            {user && (
              <li className={`flex `}>
                <Link to="/myBooks" onClick={() => setIsNavActive(false)}>
                  My books
                </Link>
              </li>
            )}
            {user && (
              <li className={`flex `}>
                <Link to="/buyBooks" onClick={() => setIsNavActive(false)}>
                  Buy books
                </Link>
              </li>
            )}
            {!user && (
              <li className={`flex `}>
                <Link to="/login" onClick={() => setIsNavActive(false)}>
                  Log In
                </Link>
              </li>
            )}
            {!user && (
              <li className={`flex `}>
                <Link to="/register" onClick={() => setIsNavActive(false)}>
                  Register
                </Link>
              </li>
            )}
            {user && (
              <li>
                <button onClick={() => {
                  handleClick();
                  setIsNavActive(false);
                }}>
                  Sign out
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
