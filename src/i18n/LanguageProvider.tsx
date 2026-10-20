import { createContext, useContext, useState, type ReactNode } from 'react';
import { dictionary, type Dictionary, type Language } from './dictionary';

type LanguageContextValue = {
  language: Language;
  t: Dictionary;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  language: 'ko',
  t: dictionary.ko,
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko');
  const toggleLanguage = () => setLanguage(current => (current === 'ko' ? 'en' : 'ko'));
  return (
    <LanguageContext.Provider value={{ language, t: dictionary[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
