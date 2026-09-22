import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import './About.css';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title text-gradient animate-fade-in">{t.title}</h2>
        
        <div className="about-content">
          <div className="about-text premium-card animate-fade-in delay-1">
            <h3>{t.summaryTitle}</h3>
            <p>{t.summary}</p>
          </div>

          <div className="skills-container premium-card animate-fade-in delay-2">
            <h3>{t.skillsTitle}</h3>
            
            <div className="skill-category">
              <h4>{t.progLangs}</h4>
              <div className="tech-stack">
                {['Python', 'Java', 'C#', 'C++', 'PHP', 'JavaScript', 'HTML', 'CSS', 'SQL'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h4>{t.frameworks}</h4>
              <div className="tech-stack">
                {['React', 'Angular', 'ASP.NET Core MVC', 'Flask', 'Entity Framework', 'Bootstrap', 'Streamlit'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h4>{t.aiData}</h4>
              <div className="tech-stack">
                {['Machine Learning', 'Deep Learning (CNN)', 'NLP', 'HistGradientBoosting', 'XGBoost', 'Random Forest'].map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="timeline-section animate-fade-in delay-3">
          <h3 className="text-gradient">{t.experience}</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content premium-card">
                <h4>ESEN Sistem Entegrasyon</h4>
                <h5>{t.exp1Role}</h5>
                <p>{t.exp1Desc}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content premium-card">
                <h4>PrimeIT Bilişim A.Ş.</h4>
                <h5>{t.exp2Role}</h5>
                <p>{t.exp2Desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="timeline-section animate-fade-in delay-3" style={{ marginTop: '3rem' }}>
          <h3 className="text-gradient">{t.education}</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content premium-card">
                <h4>{t.edu1}</h4>
                <p>{t.edu1Desc}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content premium-card">
                <h4>{t.edu2}</h4>
                <p>{t.edu2Desc}</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content premium-card">
                <h4>{t.edu3}</h4>
                <p>{t.edu3Desc}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
