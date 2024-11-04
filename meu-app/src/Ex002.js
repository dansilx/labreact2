import Letreiro from "./Letreiro";
import { Link } from "react-router-dom";

function Ex002() {
    return (
        <div className="container mx-auto text-center mt-10">
            <h1 className="mb-8 text-2xl font-semibold text-gray-800">Exercício 002</h1>
                <div className="flex flex-col md:flex-row justify-center items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-1/2">
                        <Letreiro />
                    </div>
                </div>
        </div>
    );
}

export default Ex002;