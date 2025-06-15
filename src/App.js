import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Импортируем иконки
import logoImage from './image/logo.png';
import photoImage from './image/picture.png';
import telegramIcon from './image/Ellipse1.png';
import vkIcon from './image/Ellipse2.png';
import githubIcon from './image/Ellipse3.png';
import soft from './image/1.png';
import meteor from './image/2.png';
import ux from './image/3.png';


const projects = [
  {
    id: 1,
    title: 'Голос.Софт',
    description: 'Корпоративная система управления',
    link: '#',
    image: soft
  },
  {
    id: 2,
    title: 'meteorIT',
    description: 'Веб-приложение для IT компании',
    link: '#',
    image: meteor
  },
  {
    id: 3,
    title: 'U.XI',
    description: 'Дизайн система',
    link: '#',
    image: ux
  }
];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    website: ''
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо, ${formData.name}! Я свяжусь с вами в ближайшее время.`);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${headerVisible ? 'visible' : 'hidden'} ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <motion.div 
              className="logo"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={logoImage} alt="Логотип" className="logo-img" />
            </motion.div>
            
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
              <motion.a 
                href="#about" 
                className="nav-link"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Обо мне
              </motion.a>
              <motion.a 
                href="#portfolio" 
                className="nav-link"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Портфолио
              </motion.a>
              <motion.a 
                href="#contact" 
                className="nav-link"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Контакты
              </motion.a>
            </nav>
            
            <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
  <div className="container hero-container">
    {/* Добавленные элементы для анимации фона */}
    <div className="hero-background-effects">
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="grid-lines"></div>
      <div className="gradient-circle"></div>
    </div>
    
    <motion.div
      className="hero-image-wrapper"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <img src={photoImage} alt="Фото" className="photo-img" />
    </motion.div>
    
    <div className="hero-text">
      <motion.h1 
        className="hero-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Vyacheslav Pshenichnikov
      </motion.h1>
      
      <motion.p 
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Full-stack разработчик и web-дизайнер. Имеею более 7 лет опыта разработки веб-приложений, от прототипирования до развертывания на продакшене.
      </motion.p>
      
      <motion.a 
        href="#portfolio" 
        className="cta-button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        Посмотреть работы
      </motion.a>
    </div>
  </div>
</motion.section>

      {/* Portfolio Section */}
      <motion.section
        id="portfolio"
        className="section portfolio"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2 className="section-title">Портфолио</h2>
          <p className="section-subtitle">Последние проекты</p>
          
          <div className="projects-grid">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="project-overlay">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <a href={project.link} className="project-link">Подробнее →</a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="section contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2 className="section-title">Связаться со мной</h2>
          
          <div className="contact-content">
            <motion.form 
              onSubmit={handleSubmit} 
              className="contact-form"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Ваш телефон"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="email" 
                  placeholder="Email"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
              
              <motion.button 
                type="submit" 
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Обсудить проект
              </motion.button>
            </motion.form>
            
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="info-title">Контакты</h3>
              <p>Email: vp.dev@gmail.com</p>
              <p>Телефон: +7 (999) 777-75-75</p>
              
              <div className="social-links">
                <motion.a 
                  href="https://t.me/yng_ou" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={telegramIcon} alt="Telegram" />
                </motion.a>
                
                <motion.a 
                  href="https://vk.com/web_insane" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={vkIcon} alt="VK" />
                </motion.a>
                
                <motion.a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={githubIcon} alt="GitHub" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.footer 
  className="footer"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <div className="container">
    <div className="footer-content">
      <motion.div 
        className="logo"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <img src={logoImage} alt="Логотип" className="logo-img" />
      </motion.div>
      
      <div className="footer-links-wrapper">
        <div className="copyright">© {new Date().getFullYear()} VP Все права защищены.</div>
        <div className="footer-links">
          <a href="#about" className="footer-link">Обо мне</a>
          <a href="#portfolio" className="footer-link">Портфолио</a>
          <a href="#contact" className="footer-link">Контакты</a>
        </div>
      </div>
    </div>
  </div>
</motion.footer>
    </div>
  );
}

export default App;