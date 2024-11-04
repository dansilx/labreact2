import React, { useState, useEffect } from "react";

function Relogio() {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => 
            setHora(new Date()), 1000
        );

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="p-4 mb-4 border border-gray-300 rounded bg-gray-100 text-center">
            <h1 className="text-lg font-semibold text-gray-700"> {hora.toLocaleTimeString()} </h1>
        </div>
    );
}

export default Relogio;