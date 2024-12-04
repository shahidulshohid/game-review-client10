import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const links = (
    <>
      <li className="text-lg font-semibold mx-2 mt-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg font-semibold mx-2 mt-2">
        <NavLink to="/allReviews">All Reviews</NavLink>
      </li>
      <li className="text-lg font-semibold mx-2 mt-2">
        <NavLink to="/addReviews">Add Review</NavLink>
      </li>
      <li className="text-lg font-semibold mx-2 mt-2">
        <NavLink to="/myReviews">My Reviews</NavLink>
      </li>
      <li className="text-lg font-semibold mx-2 mt-2">
        <NavLink to="/gameWatchList">Game WatchList</NavLink>
      </li>
    </>
  );
  return (
    <div className="w-11/12 mx-auto z-50">
      <div className="navbar bg-base-100">
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
            Game Review
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2 ">
            <div className="avatar">
              <div
                title={user?.displayName}
                className="w-10 md:w-12 rounded-full"
              >
                {
                  user && <img src={user?.photoURL} />
                }
              </div>
            </div>
            {user ? (
              <NavLink onClick={handleLogout} className="text-sm md:text-lg font-semibold border-2 border-green-500 p-2 rounded-lg">LogOut</NavLink>
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
