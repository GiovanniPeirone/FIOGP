"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface LanguageContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState("es");
    const [translations, setTranslations] = useState<Record<string, any>>({});

    useEffect(() => {
        fetch(`/locales/${lang}.json`)
        .then(res => res.json())
        .then(data => setTranslations(data));
    }, [lang]);

    const t = (key: string): string => {
        return key
            .split(".")
            .reduce((obj: any, part: string) => (obj ? obj[part] : undefined), translations)
            ?? key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
        {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);