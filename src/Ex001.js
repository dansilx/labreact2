import Relogio from "./Relogio";
import { Link } from "react-router-dom";

function Ex001() {
    return (
        <div className="container mx-auto text-center mt-10">
            <h1 className="mb-8 text-2xl font-semibold text-gray-800">Exercício 001</h1>
                <div className="flex flex-col md:flex-row justify-center items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-1/2">
                        <Relogio />
                    </div>
                </div>
                <Link to="/" className="inline-block mt-4 text-blue-500 hover:underline">
                    Voltar para o Home
                </Link>
        </div>
    );
}

export default Ex001;