import { Navbar } from "../../components";

function MainLayout({ children }) {
    return (
        <>
            <Navbar />

            <main>
                {children}
            </main>
        </>
    );
}

export default MainLayout;