import { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import logo from '../../assets/images/navbar-photos/temp-segue-logo.png';
import { primaryNavigationSections } from '../../config/navigation';
import { useTranslation } from '../../hooks/useTranslation';

function Sidebar({ isOpen, onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const { t } = useTranslation('common');

  if (typeof onClose !== 'function') {
    return null;
  }

  const toggleDropdown = (labelKey) => {
    setOpenDropdown((currentDropdown) =>
      currentDropdown === labelKey ? null : labelKey,
    );
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <Link to="/Home" className="sidebar-logo-container" onClick={onClose}>
          <img src={logo} alt={t('footer.logoAlt.segue')} className="sidebar-logo" />
        </Link>

        <div className="sidebar-content">
          <ul className="sidebar-menu">
            {primaryNavigationSections.map((section) => {
              if (section.type === 'link') {
                return (
                  <li key={section.labelKey} className="sidebar-item">
                    <Link to={section.path} onClick={onClose} className="sidebar-link sidebar-link-direct">
                      {t(section.labelKey)}
                    </Link>
                  </li>
                );
              }

              const isExpanded = openDropdown === section.labelKey;

              return (
                <li key={section.labelKey} className="sidebar-item">
                  <div
                    className="sidebar-link"
                    onClick={() => toggleDropdown(section.labelKey)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        toggleDropdown(section.labelKey);
                      }
                    }}
                  >
                    <span>{t(section.labelKey)}</span>
                    <FaAngleRight className={`sidebar-arrow ${isExpanded ? 'rotate' : ''}`} />
                  </div>

                  {isExpanded && (
                    <ul className="sidebar-submenu">
                      {section.items.map((item) => (
                        <li key={item.labelKey} className="sidebar-subitem">
                          {item.external ? (
                            <a
                              href={item.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="sidebar-sublink"
                              onClick={onClose}
                            >
                              {t(item.labelKey)}
                            </a>
                          ) : (
                            <Link to={item.path} onClick={onClose} className="sidebar-sublink">
                              {t(item.labelKey)}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
    </>
  );
}

export default Sidebar;
