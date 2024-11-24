import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Ex001 from './Ex001';
import Ex002 from './Ex002';
import Ex003 from './Ex003';
import Ex004 from './Ex004';
import Ex005 from './Ex005';

export default function MinhasRotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ex001" element={<Ex001 />} />
                <Route path="/ex002" element={<Ex002 />} />
                <Route path="/ex003" element={<Ex003 />} />
                <Route path="/ex004" element={<Ex004 />} />
                <Route path="/ex005" element={<Ex005 />} />
            </Routes>
        </BrowserRouter>            
    );
}