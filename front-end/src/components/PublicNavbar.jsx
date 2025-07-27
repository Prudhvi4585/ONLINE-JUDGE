import React from 'react';
import { NavLink } from 'react-router-dom';

function PublicNavbar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto p-4 flex justify-center">
          <ul className="flex space-x-8 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm ${
                    isActive
                      ? 'text-blue-700'
                      : 'text-white hover:text-blue-500'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm ${
                    isActive
                      ? 'text-blue-700'
                      : 'text-white hover:text-blue-500'
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm ${
                    isActive
                      ? 'text-blue-700'
                      : 'text-white hover:text-blue-500'
                  }`
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm ${
                    isActive
                      ? 'text-blue-700'
                      : 'text-white hover:text-blue-500'
                  }`
                }
              >
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default PublicNavbar;
