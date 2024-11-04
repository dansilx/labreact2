import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white font-bold text-xl">Atividades React</h1>
                <ul className="md:flex space-x-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => 
                                `text-white hover:text-gray-200 ${isActive ? 'font-bold underline' : ''}`}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/ex001"
                            className={({ isActive }) => 
                                `text-white hover:text-gray-200 ${isActive ? 'font-bold underline' : ''}`}
                        >
                            Ex001
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/ex002"
                            className={({ isActive }) => 
                                `text-white hover:text-gray-200 ${isActive ? 'font-bold underline' : ''}`}
                        >
                            Ex002
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
