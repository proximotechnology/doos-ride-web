import type { TranslationKey } from "@/lib/types/translation";
import { createContext, useContext } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, options?: Record<string, string | number>) => string;
  dir: string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: TranslationKey, _?: Record<string, string | number>) => {
    return key;
  },
  dir: "ltr",
});

const useLanguage = () => useContext(LanguageContext);

export { LanguageContext, useLanguage };
