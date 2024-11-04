import Contador from "./Contador";
import { Link } from "react-router-dom";

function Ex003() {
    return (
        <div className="container mx-auto text-center mt-10">
            <h1 className="mb-8 text-2xl font-semibold text-gray-800">Exercício 003</h1>
                <div className="flex flex-col md:flex-row justify-center items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-1/2">
                        <Contador />
                    </div>
                </div>
                <Link to="/" className="inline-block m-8 text-blue-500 hover:underline">
                    Voltar para o Home
                </Link>
        </div>
    );
}

export default Ex003;