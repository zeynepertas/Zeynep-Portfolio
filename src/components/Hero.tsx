import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import './Hero.css';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content animate-fade-in">
          <div className="profile-image-container delay-1">
            <img src="https://github.com/zeynepertas.png" alt="Zeynep Sude Ertaş" className="profile-image" />
          </div>
          <h2 className="hero-subtitle delay-2">{t.greeting}</h2>
          <h1 className="hero-title delay-3">
            <span className="text-gradient">Zeynep Sude Ertaş</span>
          </h1>
          <p className="hero-description delay-4">
            {t.subtitle} <br/>
            {t.description}
          </p>
          <div className="hero-actions delay-4">
            <a href="#projects" className="btn btn-primary">{t.viewWork}</a>
            <a href="#contact" className="btn btn-outline">{t.contactMe}</a>
          </div>
        </div>
      </div>
      
      <div className="decor decor-1"></div>
      <div className="decor decor-2"></div>
      <div className="decor decor-3"></div>
    </section>
  );
};

export default Hero;
