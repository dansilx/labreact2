import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Ex001 from './Ex001';
import Ex002 from './Ex002';

export default function MinhasRotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ex001" element={<Ex001 />} />
                <Route path="/ex002" element={<Ex002 />} />
            </Routes>
        </BrowserRouter>            
    );
}