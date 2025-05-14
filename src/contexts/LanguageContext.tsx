
import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from "react";
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

  // Update document direction and language on initial load
  useEffect(() => {
    document.documentElement.dir = currentLanguage.direction || "ltr";
    document.documentElement.lang = currentLanguage.code;
  }, [currentLanguage]);

  // Translation function with improved path resolution
  const t = useCallback((path: string): string => {
    try {
      const keys = path.split('.');
      const langCode = currentLanguage.code as keyof typeof translations;
      
      if (!translations[langCode]) {
        console.warn(`Translation not found for language: ${langCode}`);
        return getFallbackTranslation(path, keys) || path;
      }
      
      let current: any = translations[langCode];
      
      for (const key of keys) {
        if (current && key in current) {
          current = current[key];
        } else {
          return getFallbackTranslation(path, keys) || path;
        }
      }
      
      return typeof current === 'string' ? current : path;
    } catch (error) {
      console.error(`Translation error for key: ${path}`, error);
      return path;
    }
  }, [currentLanguage.code]);
  
  // Helper function to get fallback translation
  const getFallbackTranslation = (path: string, keys: string[]): string | null => {
    try {
      let fallback: any = translations.en;
      for (const key of keys) {
        if (fallback && key in fallback) {
          fallback = fallback[key];
        } else {
          console.warn(`Translation key not found (even in fallback): ${path}`);
          return null;
        }
      }
      return typeof fallback === 'string' ? fallback : null;
    } catch {
      return null;
    }
  };

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
