import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import './Navbar.css';
import Sidebar from './Sidebar';
import Hamburger from './Hamburger';
import LanguageDropdown from './LanguageDropdown';
import { primaryNavigationSections } from '../../config/navigation';
import { useTranslation } from '../../hooks/useTranslation';

function Navbar() {
  const [click, setClick] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const checkboxRef = useRef(null);
  const { t } = useTranslation('common');

  const toggleDropdown = (menuKey) => {
    setActiveMenu((previousMenu) => (previousMenu === menuKey ? null : menuKey));
  };

  const openDropdown = (menuKey) => {
    setActiveMenu(menuKey);
  };

  const closeDropdown = () => {
    setActiveMenu(null);
  };

  const handleToggle = () => {
    setClick((previousState) => {
      const nextState = !previousState;

      if (checkboxRef.current) {
        checkboxRef.current.checked = nextState;
      }

      return nextState;
    });
  };

  const closeSidebar = () => {
    setClick(false);

    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  const renderLink = (item, className, onClick) => {
    if (item.external) {
      return (
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onClick={onClick}
        >
          {t(item.labelKey)}
        </a>
      );
    }

    return (
      <Link to={item.path} className={className} onClick={onClick}>
        {t(item.labelKey)}
      </Link>
    );
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="navbar-container">
          <div className="navbar-mobile-controls">
            <div className="navbar-language-mobile">
              <LanguageDropdown />
            </div>
            <Hamburger click={click} checkboxRef={checkboxRef} handleToggle={handleToggle} />
          </div>

          <ul className="nav-menu">
            {primaryNavigationSections.map((section) => {
              if (section.type === 'link') {
                return (
                  <li key={section.labelKey} className="nav-item nav-item-home">
                    {renderLink(section, 'nav-links-mobile', closeSidebar)}
                  </li>
                );
              }

              const isActive = activeMenu === section.labelKey;

              return (
                <li
                  key={section.labelKey}
                  className={`nav-item dropdown ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => openDropdown(section.labelKey)}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    type="button"
                    className="nav-dropdown-trigger"
                    onClick={() => toggleDropdown(section.labelKey)}
                    onFocus={() => openDropdown(section.labelKey)}
                    aria-expanded={isActive}
                  >
                    <span className="nav-links-mobile">{t(section.labelKey)}</span>
                    <FaAngleDown className={`dropdown-arrow ${isActive ? 'rotate' : ''}`} />
                  </button>

                  <ul className={`dropdown-menu ${isActive ? 'show' : ''}`}>
                    {section.items.map((item) => (
                      <li key={item.labelKey}>{renderLink(item, 'dropdown-link', closeSidebar)}</li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>

          <div className="navbar-language-desktop">
            <LanguageDropdown />
          </div>
        </div>
      </nav>

      <Sidebar isOpen={click} onClose={closeSidebar} />
    </>
  );
}

export default Navbar;
