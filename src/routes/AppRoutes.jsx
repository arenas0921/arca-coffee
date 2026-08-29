import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Tienda from "../pages/Tienda/Tienda";

function AppRoutes() {
    return (
        <Routes>

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/tienda/:slug"
                element={<Tienda />}
            />

        </Routes>
    );
}

export default AppRoutes;