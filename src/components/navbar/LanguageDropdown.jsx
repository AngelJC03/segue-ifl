import { useEffect, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './LanguageDropdown.css';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';

function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { language, setLanguage, supportedLanguages } = useLanguage();
  const { t } = useTranslation('common');

  const currentLanguageLabel = t(`languageSwitcher.languages.${language}`);
  const availableLanguages = supportedLanguages
    .filter((languageCode) => languageCode !== language)
    .sort((firstLanguage, secondLanguage) =>
      t(`languageSwitcher.languages.${firstLanguage}`).localeCompare(
        t(`languageSwitcher.languages.${secondLanguage}`),
      ),
    );

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, []);

  return (
    <div
      className="language-dropdown"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="language-dropdown-trigger"
        aria-label={t('languageSwitcher.ariaLabel')}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previousState) => !previousState)}
        onFocus={() => setIsOpen(true)}
      >
        <span>{currentLanguageLabel}</span>
        <FaAngleDown className={`language-dropdown-arrow ${isOpen ? 'rotate' : ''}`} />
      </button>

      {isOpen && availableLanguages.length > 0 && (
        <ul className="language-dropdown-menu">
          {availableLanguages.map((languageCode) => (
            <li key={languageCode}>
              <button
                type="button"
                className="language-dropdown-option"
                onClick={() => {
                  setLanguage(languageCode);
                  setIsOpen(false);
                }}
              >
                {t(`languageSwitcher.languages.${languageCode}`)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageDropdown;
