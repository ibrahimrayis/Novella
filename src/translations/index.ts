
import { en } from './en';
import { tr } from './tr';
import { ar } from './ar';
import { ru } from './ru';

export const translations = {
  en,
  tr,
  ar,
  ru
};

export type TranslationKeys = keyof typeof en;
export type NestedTranslationKeys = keyof typeof en.common | keyof typeof en.services | keyof typeof en.stats | keyof typeof en.projects;

// A utility function to check if all translations have the same structure
export function validateTranslations(): boolean {
  const languages = Object.keys(translations);
  const referenceStructure = JSON.stringify(Object.keys(en).sort());
  
  for (const lang of languages) {
    if (lang === 'en') continue;
    const currentStructure = JSON.stringify(Object.keys(translations[lang as keyof typeof translations]).sort());
    if (currentStructure !== referenceStructure) {
      console.warn(`Translation structure mismatch for language: ${lang}`);
      return false;
    }
  }
  return true;
}
