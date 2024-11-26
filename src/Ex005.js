import Toolbar from "./Toolbar";
import Gallery2 from "./Gallery2";
import Counter from "./Counter";
import Form from "./Form";
import MovingDot from "./MovingDot";
import Forms from "./Forms";
import Lists from "./Lists";
import ShapeEditor from "./ShapeEditor";
import CounterList from "./CounterList";
import BucketList from "./BucketList";
import { Link } from "react-router-dom";

function Ex005() {
  return (
    <div className="container mx-auto text-center mt-10">
      <h2 className="text-2xl font-bold mb-6">Exercício 005</h2>
      <Toolbar />
      <Gallery2 />
      <Counter />
      <Form />
      <MovingDot />
      <Forms />
      <Lists />
      <ShapeEditor />
      <CounterList />
      <BucketList />
      <Link to="/" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
        Voltar para o Home
      </Link>
    </div>
  );
}

export default Ex005;
