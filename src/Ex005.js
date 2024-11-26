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
      <div className="container text-center mt-5">
        <h2 className="mb-4">Exercício 005</h2>
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

        <Link to="/" className="btn btn-secondary">Voltar para o Home</Link>
      </div>
    );
  }
  
  export default Ex005;