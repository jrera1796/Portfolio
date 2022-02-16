import React from 'react';

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
   
  } = props;

  return (
    <header style={{display: "flex", justifyContent: "space-between"}} className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Jose Rivera
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          
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
      </nav>
    </header>
  );
}

export default Nav;
