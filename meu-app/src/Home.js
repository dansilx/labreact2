import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container mx-auto text-center p-6">
            <h1 className="text-4xl font-bold my-4">Atividade React</h1>
            <nav>
                <ul className="flex flex-col items-center">
                    <li className="nav-item mb-2">
                        <Link
                            className="nav-link bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors hover:bg-blue-500 m-4"
                            to="/Ex001"
                        >
                            Exercício 001
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link
                            className="nav-link bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors hover:bg-blue-500 m-4"
                            to="/Ex002"
                        >
                            Exercício 002
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
