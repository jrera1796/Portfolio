import React, { useState } from 'react';
import Nav from "./components/Nav";
import About from './components/About';
import Resume from './components/Resume';
import './App.css'

function App() {
  const [pages] = useState([
    {name: "About", description: "A little about myself."},
    {name: "Projects", description: "A summary of the projects I'ved worked on"},
    {name: "Contact", description: "How to get in touch with me."}

]);
  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [linkSelected, setLinkSelected] = useState(false);

  
  return (
    <div>
      <Nav
    pages={pages}
    setCurrentPage={setCurrentPage}
    currentPage={currentPage}
    linkSelected={linkSelected}
    setLinkSelected={setLinkSelected}
  />
      <main style={{display: "flex", flexDirection: "column", alignContent: "center"}}>{!linkSelected ?(
        <>
    <About/>
    </>):(
      
      <Resume/>
    )}
      </main>

    </div>
  );
}

export default App;
