import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NavTabs from './components/NavTabs';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  function handlePageChange(page) {
    setCurrentPage(page)
  }
  function renderCurrentPage() {
    if(currentPage == "About"){
      return <About/>
    }
    if(currentPage == "Portfolio"){
      return <Portfolio/>
    }
    if(currentPage == "Contact"){
      return <Contact/>
    }
    if(currentPage == "Resume"){
      return <Resume/>
    }
  }
  return (
    <div className="App">
    <header>

        <h1>Asiyah Ahmed</h1>

        <nav>

            <NavTabs handlePageChange={handlePageChange}/>
            <Header handlePageChange={handlePageChange}/>
            <Footer handlePageChange={handlePageChange}/>

        </nav>

    </header>

    <section id="hero">

        <img src="https://cdni.iconscout.com/illustration/premium/thumb/black-muslim-woman-4240831-3518326.png"
            alt="image of Muslim women in Hijab"/>

    </section>

    <main>

      {renderCurrentPage()}

        
    </main>

    </div>
  );
}

export default App;
