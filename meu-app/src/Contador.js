import React, { useState } from "react";

function Contador() {
    const [contadorHomens, setContadorHomens] = useState(0);
    const [contadorMulheres, setContadorMulheres] = useState(0);

    const incrementarHomens = () => setContadorHomens(contadorHomens + 1);
    const decrementarHomens = () => setContadorHomens(contadorHomens > 0 ? contadorHomens - 1 : 0);

    const incrementarMulheres = () => setContadorMulheres(contadorMulheres + 1);
    const decrementarMulheres = () => setContadorMulheres(contadorMulheres > 0 ? contadorMulheres - 1 : 0);

    const total = contadorHomens + contadorMulheres;

    return (
        <div className="app-container bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Contador de Pessoas</h1>
            <div className="counter-section flex space-x-8 mb-8">
                <div className="counter bg-white p-6 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">👨🏻</h2>
                    <p className="text-4xl font-bold mb-4 text-gray-800">{contadorHomens}</p>
                    <button
                        onClick={incrementarHomens}
                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors mb-2"
                    >
                        ➕
                    </button>
                    <button
                        onClick={decrementarHomens}
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                    >
                        ➖
                    </button>
                </div>
                <div className="counter bg-white p-6 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-semibold mb-4 text-pink-600">👩🏻</h2>
                    <p className="text-4xl font-bold mb-4 text-gray-800">{contadorMulheres}</p>
                    <button
                        onClick={incrementarMulheres}
                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors mb-2"
                    >
                        ➕
                    </button>
                    <button
                        onClick={decrementarMulheres}
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                    >
                        ➖
                    </button>
                </div>
            </div>
            <div className="total-section text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Total: {total}</h2>
            </div>
        </div>
    );
}

export default Contador;
