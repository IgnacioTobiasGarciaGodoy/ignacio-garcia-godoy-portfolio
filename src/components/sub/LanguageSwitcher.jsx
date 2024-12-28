'use client';

import { Languages } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log("Idioma actual:", i18n.language);
    setIsOpen(false);
  };

  return (
    <div className="fixed right-14 sm:right-10 top-10 z-40">
      {/* Icono de idiomas */}
      <button
        onClick={() => setIsOpen(!isOpen)} // Alterna el estado del menú desplegable
        className="p-2 text-xl text-gray-700 dark:text-gray-200 hover:text-blue-500"
      >
        <Languages className='text-yellow-600 hover:text-yellow-500' />
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-600 rounded-lg shadow-lg p-2 z-10">
          <button
            onClick={() => changeLanguage('en')}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-md"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('es')}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-md"
          >
            Español
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
