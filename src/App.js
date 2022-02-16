import React, { useState } from 'react';
import Nav from "./components/Nav";
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contacts';
import Projects from './components/Projects';
import './App.css'

function App() {
  const [pages] = useState([
    { name: "About", description: "A little about myself." },
    { name: "Projects", description: "A summary of the projects I'ved worked on" },
    { name: "Contact", description: "How to get in touch with me." },
    { name: "Resume", description: "My Resume" }

  ]);


  const [currentPage, setCurrentPage] = useState(pages[0]);

  const renderPage = () => {
    if (currentPage.name === "About") {
      return <About currentPage={currentPage} />
    }
    if (currentPage.name === "Projects") {
      return <Projects currentPage={currentPage} />
    }
    if (currentPage.name === "Contact") {
      return <Contact currentPage={currentPage} />
    }
    if (currentPage.name === "Resume") {
      return <Resume currentPage={currentPage} />
    }
  }

  return (
    <div>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>
      <main style={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
