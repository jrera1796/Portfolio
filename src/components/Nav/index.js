import React from 'react';

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
   
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Jose Rivera
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          
          {pages.map( (reference) => (
            <li
              className={`mx-1`}
              key={reference.name}>
                {reference.name}
              
            </li>
          ))}
          <li className="mx-1">
            Resume
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
