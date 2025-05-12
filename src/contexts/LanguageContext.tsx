
import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = {
  code: string;
  label: string;
};

export const languages = [
  { code: "en", label: "English" },
  { code: "tr", label: "Turkish" },
  { code: "ar", label: "Arabic" },
  { code: "ru", label: "Russian" },
];

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (language: Language) => {
    console.log(`Setting language to ${language.label}`);
    setCurrentLanguage(language);
    // Here you could also set language in localStorage or call an API
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
