import React from 'react';

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
    linkSelected,
    setLinkSelected
   
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
              className={`mx-1 ${ currentPage.name === reference.name && !linkSelected && 'navActive'
              }`}
              key={reference.name} href={`#${reference.name}1`}
                
              
                onClick={() => {
                  setCurrentPage(reference);
                  setLinkSelected(false);
                  console.log("I've been clicked");
                }}
              >
              {reference.name}
              
            </li>
          ))}
             <li className={`mx-1 ${linkSelected && 'navActive'}`}>
            <span onClick={() => setLinkSelected(true)}>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
