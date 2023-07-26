import React, { useState } from 'react';
import Nav from "./components/Nav";
import Home from './components/Home';
import { FaGithub } from 'react-icons/fa';
import './App.css'

function App() {
  const [pages] = useState([
    { name: "Home", description: "Home Page." }

  ]);


  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const renderPage = () => {
    if (currentPage.name === "Home") {
      return <Home currentPage={currentPage} />
    }
    // if (currentPage.name === "Projects") {
    //   return <Projects currentPage={currentPage} />
    // }
  }

  return (
    <div className="app-container" onMouseLeave={() => setMenuOpen(false)}>
      {/* Separate container for header image and navigation */}
      <header className="header-container">
        <div className="header-bg"></div>
        <div className="nav-container">
          <Nav
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
          />
        </div>
      </header>

      {/* Main content container */}
      <main className="main-content">
        {renderPage()}
      </main>

      <footer className='footer'>
  <div className='col'>
    <div>Qapital Impressions 2023&copy;</div>
    <div>
      <a className='text-white' href='github.com/jrera1796'>GitHub <FaGithub /></a>
    </div>
    <div className="contact-info">
      <h4>Contact Information</h4>
      <p>Email: info@qapitalimpressions.com</p>
    </div>
  </div>
  <div className="footer-message">
    <p>This website is a work in progress. Check back for updates and exciting new features!</p>
  </div>
</footer>
    </div>
  );
}

export default App;
