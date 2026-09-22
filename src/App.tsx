import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { translations } from './data/translations';
import './App.css';

const AppContent = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo text-gradient">ZE</div>
          <div className="nav-links">
            <a href="#about">{t.about}</a>
            <a href="#projects">{t.projects}</a>
            <a href="#contact">{t.contact}</a>
            <button className="lang-toggle-btn" onClick={toggleLanguage}>
              {language === 'tr' ? 'ENG' : 'TR'}
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Zeynep Sude Ertaş. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
