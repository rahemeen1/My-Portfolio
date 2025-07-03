import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import './index.css';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Extracurriculars from './components/Extracurriculars';

function App() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Extracurriculars />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
