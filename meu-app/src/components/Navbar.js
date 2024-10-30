import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white font-bold text-xl">Meu Site</h1>
                <button onClick={toggleMenu} className="text-white md:hidden">
                ☰
                </button>
                <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <li className="text-white hover:text-gray-200">
                        <a href="#home">Home</a>
                    </li>
                    <li className="text-white hover:text-gray-200">
                        <a href="#about">Sobre</a>
                    </li>
                    <li className="text-white hover:text-gray-200">
                        <a href="#services">Serviços</a>
                    </li>
                    <li className="text-white hover:text-gray-200">
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;