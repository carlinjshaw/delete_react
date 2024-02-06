import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  // Destructuring props to extract currentTab and handleTabChange
  const { currentTab, handleTabChange } = props;

  // useEffect to update the document title when the currentTab changes
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);

  return (
    <nav>
      {/* Navigation list with Bootstrap styling */}
      <ul className="nav nav-tabs">
        {/* About Me link */}
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handleTabChange('About')}
            // Ternary to set the active link class based on the currentTab
            className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        {/* Portfolio link */}
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handleTabChange('Portfolio')}
            className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        {/* Contact Me link */}
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handleTabChange('Contact')}
            className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </a>
        </li>
        {/* Resume link */}
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handleTabChange('Resume')}
            className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
