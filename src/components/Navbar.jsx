import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from '../../public/logo.png'

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    await logOut();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-base"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
            {user && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
            {user && (
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        <Link to="/" className="md:ml-4">
          <div className="flex items-center">
            <div className="w-14 mt-1">
              <img src={logo} />
            </div>
            <div>
              <p className="text-3xl font-extrabold">Prime</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex font-semibold">
        <ul className="menu menu-horizontal px-1 text-base">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {!user && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          {user && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {user && (
          <button
            onClick={handleLogout}
            className="btn btn-outline hidden lg:block"
          >
            Logout
          </button>
        )}
        <div className="avatar">
          <div className="w-12 rounded-full ring-2 ring-gray-700 ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL || "/public/avatar.png"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
