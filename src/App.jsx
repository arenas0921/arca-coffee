import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Experiences } from "./pages";
import { MainLayout } from "./layouts";

import Tienda from "./pages/Tienda/Tienda";


// =====================================================
// APP
// =====================================================

function App() {

    return (

        <BrowserRouter>

            <MainLayout>

                <Routes>


                    {/* =========================
                        HOME
                       ========================= */}

                    <Route
                        path="/"
                        element={<Home />}
                    />


                    {/* =========================
                        EXPERIENCIAS
                       ========================= */}

                    <Route
                        path="/experiencias"
                        element={<Experiences />}
                    />


                    {/* =========================
                        TIENDA → HOME + SECCIÓN
                       ========================= */}

                    <Route
                        path="/tienda"
                        element={<Home scrollToTienda />}
                    />


                    {/* =========================
                        FICHAS DE PRODUCTOS
                       ========================= */}

                    <Route
                        path="/tienda/:slug"
                        element={<Tienda />}
                    />


                </Routes>

            </MainLayout>

        </BrowserRouter>

    );

}


export default App;