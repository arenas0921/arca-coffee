import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Experiences } from "./pages";
import { MainLayout } from "./layouts";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/experiencias"
                        element={<Experiences />}
                    />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;