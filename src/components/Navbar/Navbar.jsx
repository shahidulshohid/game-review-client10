import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { CiLight, CiDark } from "react-icons/ci";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = (
    <>
      <li className="text-lg font-semibold mx-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg font-semibold mx-2">
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li className="text-lg font-semibold mx-2">
        <NavLink to="/allReviews">All Reviews</NavLink>
      </li>
      <li className="text-lg font-semibold mx-2">
        <NavLink to="/projects">Projects</NavLink>
      </li>
      {user && (
        <li className="text-lg font-semibold">
          <NavLink to="/addReviews">Add Review</NavLink>
        </li>
      )}
      {user && (
        <li className="text-lg font-semibold">
          <NavLink to="/myReviews">My Reviews</NavLink>
        </li>
      )}
      {user && (
        <li className="text-lg font-semibold">
          <NavLink to="/gameWatchList">My WatchList</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="w-11/12 mx-auto mt-2 z-50 sticky top-0">
      <div className="navbar bg-white md:px-5">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div
              tabIndex={0}
              role="button"
              className="mr-2 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            className="text-lg md:text-2xl font-semibold md:font-bold"
            to="/"
          >
            <div className="flex gap-2 items-center">
              <img
                className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                src={logo}
                alt="logo"
              />
              <h1 className="hidden lg:flex text:xl lg:text-2xl font-bold text-pink-500">
                Chill Gamer
              </h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2 items-center">
            <button
              className="bg-gray-300 w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-full"
              onClick={handleThemeSwitch}
            >
              {theme === "dark" ? (
                <p>
                  <CiDark size={25} />
                </p>
              ) : (
                <p>
                  <CiLight size={30} />
                </p>
              )}
            </button>
            <div className="avatar">
              <div
                title={user?.displayName}
                className="w-10 md:w-12 rounded-full"
              >
                {user && <img src={user?.photoURL} />}
              </div>
            </div>
            {user ? (
              <NavLink
                onClick={handleLogout}
                className="text-sm md:text-lg font-semibold border-2 border-green-500 p-2 rounded-lg"
              >
                LogOut
              </NavLink>
            ) : (
              <div className="flex gap-2">
                <Link
                  className="text-sm md:text-lg font-semibold border-2 border-green-500 p-2 rounded-lg"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="text-sm md:text-lg font-semibold border-2 border-green-500 p-2 rounded-lg"
                  to="/register"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <Link
              className="text-sm md:text-lg font-semibold border-2 border-green-500 p-2 rounded-lg"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="text-sm md:text-lg font-semibold border-2 border-green-500 p-2 rounded-lg"
              to="/register"
            >
              Register
            </Link> */
}
