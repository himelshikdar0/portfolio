import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ParticlesBackground from './components/ParticlesBackground';
import ScrollProgress from './components/ScrollProgress';
import FloatingSocialBar from './components/FloatingSocialBar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <CustomCursor />
      <ParticlesBackground />
      <ScrollProgress />
      <Navbar />
      <FloatingSocialBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Services />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
