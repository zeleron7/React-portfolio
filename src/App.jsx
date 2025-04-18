import styles from './App.module.css'
import { Intro } from './components/Intro/Intro'
import { Navbar } from './components/navbar/Navbar'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Contact } from './components/Contact/Contact'
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
              
              {/* You can include About here too if you want on homepage */}
              {/* <About /> */}
              <section id="about">
                  <About />
                </section>

                <section id="experience">
                  <Experience />
                </section>

                <section id="contact">
                  <Contact />
                </section>
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

    </div>
}

export default App
