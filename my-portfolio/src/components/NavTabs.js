import React from 'react';

function NavTabs({ handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
        >
          My Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#About"
          onClick={() => handlePageChange('About')}
        >
          About Me
        </a>
      </li>
      {/* <li className="nav-item">
        
      </li> */}
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
        >
          My Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
