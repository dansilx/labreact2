import Gallery from "./Gallery";
import PackingList from "./PackingList";
import Avatar from "./Avatar";
import List from "./List";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";

const user = {
    name: 'Hedy Lamarr',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Hedy_Lamarr_in_The_Heavenly_Body_1944.jpg'
};

const ingredientes = ['Farinha', 'Açúcar', 'Ovos'];

function Ex004() {
    return (
        <div className="container mx-auto text-center mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Exercício 004</h2>
            
            
            <div className="mb-6">
                <Gallery />
            </div>

            <div className="mb-6">
                <PackingList />
            </div>
            
            <div className="mb-6">
                <Avatar person={user} size={100} />
            </div>
            
            <div className="mb-6">
                <List />
            </div>
            
            <div className="mb-6">
                <Recipe ingredientes={ingredientes} />
            </div>
            
            <Link to="/" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                Voltar para o Home
            </Link>
        </div>
    );
}
  
  export default Ex004;