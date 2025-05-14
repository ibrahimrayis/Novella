
import React, { createContext, useState, useContext, ReactNode, useCallback } from "react";
import { translations, TranslationKeys } from "@/translations";

type Language = {
  code: string;
  label: string;
  direction?: "ltr" | "rtl";
};

export const languages: Language[] = [
  { code: "en", label: "English" },
  { code: "tr", label: "Turkish" },
  { code: "ar", label: "Arabic", direction: "rtl" },
  { code: "ru", label: "Russian" },
];

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  direction: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Try to get saved language from localStorage or default to English
  const getSavedLanguage = (): Language => {
    if (typeof window === "undefined") return languages[0];
    
    const savedLanguageCode = localStorage.getItem("language");
    if (savedLanguageCode) {
      const savedLanguage = languages.find(lang => lang.code === savedLanguageCode);
      if (savedLanguage) return savedLanguage;
    }
    return languages[0];
  };

  const [currentLanguage, setCurrentLanguage] = useState<Language>(getSavedLanguage());

  const setLanguage = useCallback((language: Language) => {
    console.log(`Setting language to ${language.label}`);
    setCurrentLanguage(language);
    // Save language preference to localStorage
    localStorage.setItem("language", language.code);
    // Update document direction
    document.documentElement.dir = language.direction || "ltr";
    document.documentElement.lang = language.code;
  }, []);

  // Translation function
  const t = useCallback((path: string): string => {
    const keys = path.split('.');
    let current: any = translations[currentLanguage.code as keyof typeof translations];
    
    for (const key of keys) {
      if (current && key in current) {
        current = current[key];
      } else {
        // Fallback to English if translation not found
        let fallback: any = translations.en;
        for (const fallbackKey of keys) {
          if (fallback && fallbackKey in fallback) {
            fallback = fallback[fallbackKey];
          } else {
            console.warn(`Translation key not found: ${path}`);
            return path;
          }
        }
        return typeof fallback === 'string' ? fallback : path;
      }
    }
    
    return typeof current === 'string' ? current : path;
  }, [currentLanguage.code]);

  // Current direction
  const direction = currentLanguage.direction || "ltr";

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, direction }}>
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
