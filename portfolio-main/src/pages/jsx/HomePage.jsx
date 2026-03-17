import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';
import Navigation from '../../common/jsx/Navigation';
import BackgroundAnimations from '../../common/jsx/BackgroundAnimations';

const HomePage = () => {
  const [displayText, setDisplayText] = useState('');
  const [changingText, setChangingText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const buttonSoundRef = useRef(null);
  const backgroundMusicRef = useRef(null);
  const welcomeSoundRef = useRef(null);

  const fullText = "NARENDRA BUDIGI";
  const roles = [
    "DATA SCIENCE STUDENT",
    "FULL STACK DEVELOPER",
    "PYTHON DEVELOPER",
    "SOFTWARE ENGINEER ASPIRANT"
  ];

  // Sound effects
  const playButtonSound = () => {
    if (buttonSoundRef.current) {
      buttonSoundRef.current.currentTime = 0;
      buttonSoundRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  const playWelcomeSound = () => {
    if (welcomeSoundRef.current) {
      welcomeSoundRef.current.currentTime = 0;
      welcomeSoundRef.current.play().catch(e => console.log('Welcome audio play failed:', e));
    }
  };

  // Text-to-Speech for Welcome Message
  const speakWelcomeMessage = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const speech = new SpeechSynthesisUtterance();
      speech.text = "Welcome to Narendra's Portfolio";
      speech.rate = 0.9;
      speech.pitch = 1;
      speech.volume = 1;

      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        const englishVoice = voices.find(voice => voice.lang.includes('en'));
        if (englishVoice) {
          speech.voice = englishVoice;
        }
        window.speechSynthesis.speak(speech);
      } else {
        setTimeout(() => {
          const loadedVoices = window.speechSynthesis.getVoices();
          const englishVoice = loadedVoices.find(voice => voice.lang.includes('en'));
          if (englishVoice) {
            speech.voice = englishVoice;
          }
          window.speechSynthesis.speak(speech);
        }, 100);
      }
    }
  };

  useEffect(() => {
    const firstVisit = !sessionStorage.getItem('hasVisitedBefore');

    if (firstVisit) {
      sessionStorage.setItem('hasVisitedBefore', 'true');

      const timer = setTimeout(() => {
        speakWelcomeMessage();
        // playWelcomeSound();
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('hasVisitedBefore');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    setIsVisible(true);

    return () => {
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let index = 0;
    const nameTimer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(nameTimer);
      }
    }, 100);

    return () => clearInterval(nameTimer);
  }, []);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      const currentRole = roles[roleIndex];

      if (isTyping) {
        if (charIndex < currentRole.length) {
          setChangingText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        if (charIndex > 0) {
          setChangingText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsTyping(true);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, 100);

    return () => clearInterval(roleTimer);
  }, [roleIndex, charIndex, isTyping]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    if (isMobile) {
      setShowMenu(false);
    }
  };

  const handleButtonClick = () => {
    playButtonSound();

    if (!isMusicPlaying && backgroundMusicRef.current) {
      backgroundMusicRef.current.play()
        .then(() => setIsMusicPlaying(true))
        .catch(e => console.log('Music play on interaction failed:', e));
    }
  };

  return (
    <div className="home-page">
      {/* Audio Elements */}
      <audio ref={buttonSoundRef}>
        <source src={import.meta.env.BASE_URL + 'sounds/button-click.mp3'} type="audio/mpeg" />
      </audio>

      {/* Background Music */}
      <audio ref={backgroundMusicRef} loop>
        <source src={import.meta.env.BASE_URL + 'sounds/background-music.mp3'} type="audio/mpeg" />
        <source src={import.meta.env.BASE_URL + 'sounds/background-music.ogg'} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Welcome Sound */}
      <audio ref={welcomeSoundRef}>
        <source src={import.meta.env.BASE_URL + 'sounds/welcome-message.mp3'} type="audio/mpeg" />
      </audio>

      <BackgroundAnimations />

      <Navigation
        showMenu={showMenu}
        isMobile={isMobile}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        currentPage="home"
      />

      <div className={`content-overlay ${showMenu && isMobile ? 'expanded' : ''}`}>
        <main className="main-content">
          <section className={`hero-section ${isVisible ? 'animate-visible' : ''}`}>
            <div className="hero-content">
              <h4 className="text-gradient animate-fade-in animate-on-scroll delay-1">HELLO, I'M</h4>

              <h1 className="typing-animation animate-slide-up animate-on-scroll delay-2">
                Narendra Budigi
                <span className="cursor">|</span>
              </h1>

              <div className="about-container animate-slide-up animate-on-scroll delay-3">
                <span>I AM A</span>
                <span id="changing-text">{changingText}</span>
                <span className="text-cursor">|</span>
              </div>

              <div className="btech animate-fade-in animate-on-scroll delay-4">
                PURSUING MY <span>B.TECH</span> DEGREE AT <span>KL UNIVERSITY</span>
              </div>

              <div className="hacking-info">
                <p className="animate-fade-in-delay-1 animate-on-scroll delay-1">
                  Python & Web Development Intern at Young Mind Technologies
                </p>
                <p className="animate-fade-in-delay-2 animate-on-scroll delay-2">
                  Skilled in Java, Python, SQL, React, Django, Spring Boot, Docker, and CI/CD
                </p>
                <p className="animate-fade-in-delay-3 animate-on-scroll delay-3">
                  Built real-world projects like Event Flow, Service Hub Website, and Sentiment Analysis of E-Commerce Reviews
                </p>
              </div>
            </div>

            <div className="hero-image animate-slide-right animate-on-scroll delay-4">
              <div className="image-container">
                <div className="hacking-frame">
                  <img
                    src={import.meta.env.BASE_URL + 'assets/nandu-profile.jpg'}
                    alt="Narendra Budigi"
                    className="profile-img"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x500/00ff00/000000?text=NARENDRA+BUDIGI';
                    }}
                  />
                  <div className="glow-effect"></div>
                </div>
              </div>
            </div>
          </section>

          <div className="action-buttons animate-on-scroll">
            <a
              href="https://github.com/Narendrabudigi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn github-btn animate-on-scroll delay-1"
              onClick={handleButtonClick}
            >
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>

            <Link to="/projects" className="btn projects-btn animate-on-scroll delay-2" onClick={handleButtonClick}>
              <i className="fas fa-project-diagram"></i>
              <span>View Projects</span>
            </Link>
          </div>

          <section className="quick-links">
            <div className="link-card animate-slide-up-delay-1 animate-on-scroll delay-1">
              <i className="fas fa-laptop-code"></i>
              <h3>TECH STACK</h3>
              <p>Explore my technical skills in programming, full stack development, data science, and modern development tools</p>
              <Link to="/skills" className="btn-link" onClick={handleButtonClick}>
                VIEW SKILLS <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="link-card animate-slide-up-delay-2 animate-on-scroll delay-2">
              <i className="fas fa-tasks"></i>
              <h3>PROJECTS</h3>
              <p>Discover my full-stack and machine learning projects built using Django, PHP, MySQL, Python, and modern web technologies</p>
              <Link to="/projects" className="btn-link" onClick={handleButtonClick}>
                VIEW PROJECTS <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="link-card animate-slide-up-delay-3 animate-on-scroll delay-3">
              <i className="fas fa-award"></i>
              <h3>ACHIEVEMENTS</h3>
              <p>Check out my certifications, academic achievements, internship experience, and coding progress</p>
              <Link to="/achievements" className="btn-link" onClick={handleButtonClick}>
                VIEW ACHIEVEMENTS <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;