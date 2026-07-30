import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || "es";
    });

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prevLanguage) =>
            prevLanguage === "es" ? "en" : "es"
        );
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                toggleLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

function useLanguage() {
    return useContext(LanguageContext);
}

export { LanguageProvider, useLanguage };