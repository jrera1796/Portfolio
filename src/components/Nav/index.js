import React, { useRef } from 'react';

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage, menuOpen, toggleMenu } = props;
  const menuRef = useRef(null);

  // Handle click outside of the menu to close it
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      toggleMenu();
    }
  };

  return (
    <nav className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
      <div
        id="menuToggle"
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        onBlur={handleOutsideClick} // Hide the menu when it loses focus
        onMouseLeave={handleOutsideClick} // Hide the menu when the cursor leaves the menu area
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* Use a ref to capture the menu container */}
      <div ref={menuRef} className="nav-container">
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`} id="menu">
          {pages.map((reference) => (
            <li
              className={`${currentPage.name === reference.name && 'navActive'}`}
              key={reference.name}
              onClick={() => {
                setCurrentPage(reference);
                toggleMenu(); // Close the menu after selecting a page
              }}
            >
              {reference.name}
            </li>
          ))}
        </ul>
        </div>
    </nav>

  );
}

export default Nav;
