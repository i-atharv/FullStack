// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li>
          <Link
            to="/content/intro"
            className={activeSection === 'intro' ? 'active' : ''}
            onClick={() => handleLinkClick('intro')}
          >
            Introduction
          </Link>
        </li>
        <li>
          <Link
            to="/content/syntax"
            className={activeSection === 'syntax' ? 'active' : ''}
            onClick={() => handleLinkClick('syntax')}
          >
            Syntax
          </Link>
        </li>
        <li>
          <Link
            to="/content/variables"
            className={activeSection === 'variables' ? 'active' : ''}
            onClick={() => handleLinkClick('variables')}
          >
            Variables
          </Link>
        </li>
        <li>
          <Link
            to="/content/functions"
            className={activeSection === 'functions' ? 'active' : ''}
            onClick={() => handleLinkClick('functions')}
          >
            Functions
          </Link>
        </li>
        <li>
          <Link
            to="/content/loops"
            className={activeSection === 'loops' ? 'active' : ''}
            onClick={() => handleLinkClick('loops')}
          >
            Loops
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
