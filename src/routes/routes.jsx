import { Routes, Route } from "react-router-dom";

import Inicio from "../pages/inicio/inicio.jsx"
import Doados from "../pages/doados/doados.jsx"
import QueroDoar from "../pages/querodoar/queroDoar.jsx"

export default function RoutesApp() {
    return(
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/doados" element={<Doados />} />
        <Route path="/querodoar" element={<QueroDoar />} />
      </Routes>
    )
};