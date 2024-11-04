import React, { useState, useEffect } from "react";

function Letreiro() {
    const [texto, setTexto] = useState('');
    const frase = 'Conheça a Fatec!';
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTexto((prevTexto) => prevTexto + frase[index]);
            setIndex((prevIndex) => (prevIndex + 1) % frase.length);
            if (index === frase.length - 1) 
            {
                setTexto('');
            }
        }, 200);

        return () => clearInterval(intervalo);
    }, [index]);

    return (
        <div className="p-4 mb-4 border border-gray-300 rounded bg-gray-100 text-center">
            <h1 className="text-lg font-semibold text-gray-700">{texto}</h1>
        </div>
    ); 
}

export default Letreiro;