import styles from './App.module.css'
import { Intro } from './components/Intro/Intro'
import { Navbar } from './components/navbar/Navbar'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Skills } from './components/Skills/Skills'
import { Socials } from './components/Socials/Socials'
import { UseAnimationFrame } from './components/Cube/Cube' 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

    return <div className={styles.App}>
        <Router>
        <Navbar />
        <UseAnimationFrame />
        <Routes>
          <Route path="/" element={
            <>
              <Intro />
              
              <section id="about">
                  <About />
                </section>

                <section id="experience">
                  <Experience />
                </section>

                <section id="skills">
                  <Skills />
                </section>

                <section id="socials">
                  <Socials />
                </section>
            </>
          } />
        </Routes>
      </Router>

    </div>
}

export default App
