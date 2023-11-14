import React from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('hello')}</p>
      <p>{t('bye')}</p>

      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('tr')}>Türkçe</button>
    </div>
  );
}

export default function Root() {
  return (
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
}
