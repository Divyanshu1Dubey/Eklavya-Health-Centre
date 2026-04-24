import React, { createContext, useContext, useState, useEffect } from 'react';
import * as enData from '../data';
import * as hiData from '../data_hi';
import translations from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Optionally auto-detect or read from localStorage
    const savedLang = localStorage.getItem('appLang');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'hi' : 'en';
    setLanguage(newLang);
    localStorage.setItem('appLang', newLang);
  };

  const data = language === 'en' ? enData : hiData;
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, data, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
