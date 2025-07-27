import { NavLink, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';

const PrivateNavbar = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded?.user.isAdmin === true) {
          setIsAdmin(true);
        }
      } catch (err) {
        console.error("Invalid token", err);
      }
    }
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-center">
        <ul className="font-medium flex space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 px-3 rounded-sm ${
                  isActive ? 'text-blue-700' : 'text-white hover:text-blue-500'
                }`
              }
            >
              Home
            </NavLink>
          </li>

          {isAdmin && (
            <>
              <li>
                <NavLink
                  to="/create"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm ${
                      isActive ? 'text-blue-700' : 'text-white hover:text-blue-500'
                    }`
                  }
                >
                  Create Problem
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/delete"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm ${
                      isActive ? 'text-blue-700' : 'text-white hover:text-blue-500'
                    }`
                  }
                >
                  Delete Problem
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/update"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm ${
                      isActive ? 'text-blue-700' : 'text-white hover:text-blue-500'
                    }`
                  }
                >
                  Update Problem
                </NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `block py-2 px-3 rounded-sm ${
                  isActive ? 'text-blue-700' : 'text-white hover:text-blue-500'
                }`
              }
            >
              Profile
            </NavLink>
          </li>

          <li>
            <button
              onClick={handleLogout}
              className="block py-2 px-3 text-white rounded-sm hover:text-blue-500"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PrivateNavbar;
