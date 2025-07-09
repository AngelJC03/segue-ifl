// TranslationWidget.jsx
import { useEffect } from 'react';

const TranslationWidget = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (window.google && window.google.translate) return;

      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
          'google_translate_element'
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  return <div id="google_translate_element"></div>;
};

export default TranslationWidget;
