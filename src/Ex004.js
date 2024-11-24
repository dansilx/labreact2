import Gallery from "./Gallery";
import PackingList from "./PackingList";
import Avatar from "./Avatar";
import List from "./List";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";

const user = {
    name: 'Hedy Lamarr',
    image: 'https://i.imgur.com/yXOvdOSs.jpg'
};

const ingredientes = ['Farinha', 'Açúcar', 'Ovos'];

function Atv03() {
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
                <Avatar person={user} size={150} />
            </div>
            
            <div className="mb-6">
                <List />
            </div>
            
            <div className="mb-6">
                <Recipe ingredientes={ingredientes} />
            </div>
            
            <Link to="/" className="mt-6 text-blue-500 hover:underline">
                Voltar para o Home
            </Link>
        </div>
    );
}
  
  export default Ex004;