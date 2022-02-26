import React from 'react';

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
   
  } = props;

  return (
    <header className="flex-row px-1">
      <div className='header-title'>
      <h2>
        <a data-testid="link" href="/">
          Jose Rivera
        </a>
      </h2>
      </div>
      <nav><div id="menuToggle">
      <input type="checkbox" />
      <span></span>
    <span></span>
    <span></span>
        <ul className="flex-row nav-links" id="menu">
          
          {pages.map( (reference) => (
            <li
              className={`mx-1 ${ currentPage.name === reference.name && 'navActive'
              }`}
              key={reference.name}
                
              
                onClick={() => {
                  setCurrentPage(reference);
                }}
              >
              {reference.name}
              
            </li>
          ))}
       
        </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
