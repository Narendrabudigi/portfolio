import React, { useState, useEffect, useRef } from 'react';
import '../css/AboutPage.css';
import Navigation from '../../common/jsx/Navigation';
import BackgroundAnimations from '../../common/jsx/BackgroundAnimations';

const AboutPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  
  const sectionRefs = {
    personal: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    skills: useRef(null),
    languages: useRef(null)
  };

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
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    if (isMobile) {
      setShowMenu(false);
    }
  };

  const skillCategories = [
    {
      title: "Programming & Core CS",
      icon: "fas fa-laptop-code",
      skills: [
        { name: "Java", percentage: 85, icon: "fab fa-java" },
        { name: "Python", percentage: 85, icon: "fab fa-python" },
        { name: "SQL", percentage: 80, icon: "fas fa-database" },
        { name: "Data Structures & Algorithms", percentage: 80, icon: "fas fa-code" },
        { name: "DBMS & OOP", percentage: 75, icon: "fas fa-server" }
      ]
    },
    {
      title: "Web, Tools & Data",
      icon: "fas fa-globe",
      skills: [
        { name: "React", percentage: 80, icon: "fab fa-react" },
        { name: "Django", percentage: 80, icon: "fas fa-layer-group" },
        { name: "Spring Boot", percentage: 70, icon: "fas fa-leaf" },
        { name: "Docker / CI-CD / Jenkins", percentage: 70, icon: "fas fa-cogs" },
        { name: "Machine Learning / Data Analysis", percentage: 75, icon: "fas fa-chart-line" }
      ]
    }
  ];

  return (
    <div className="about-page">
      <BackgroundAnimations />

      <Navigation 
        showMenu={showMenu}
        isMobile={isMobile}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        currentPage="about"
      />

      <div className={`content-overlay ${showMenu && isMobile ? 'expanded' : ''}`}>
        <main className="main-content">
          <section className="about-section">
            <div className="section-header animate-fade-in">
              <h1 className="text-gradient">About <span>Me</span></h1>
              <p className="subtitle">Get to know me better</p>
              <div className="header-divider"></div>
            </div>

            <div 
              id="personal"
              ref={sectionRefs.personal}
              className={`personal-info scroll-animation ${isVisible.personal ? 'animate-left' : ''}`}
            >
              <div className="info-card">
                <div className="info-image">
                  <img 
                    src={import.meta.env.BASE_URL + 'assets/nandu-profile.jpg'} 
                    alt="Narendra Budigi" 
                    className="profile-img"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x500/00ff00/000000?text=NARENDRA+BUDIGI';
                    }}
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="info-content">
                  <div className="info-header">
                    <h1>Narendra Budigi</h1>
                    <h3 className="text-gradient">BTech Computer Science Student | Data Science & Full Stack Developer</h3>
                  </div>
                  
                  <p className="bio">
                    Motivated BTech student with a strong foundation in Data Science and Full Stack Development. 
                    Skilled in Java, Python, SQL, and modern web technologies with hands-on project experience in 
                    building scalable applications and data-driven solutions. Seeking opportunities in Software 
                    Development, Full Stack Development, or Data Science roles.
                  </p>
                  
                  <div className="personal-details">
                    <div className="detail-item">
                      <div className="detail-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="detail-text">
                        <span className="detail-label">Email</span>
                        <p className="detail-value">narendrayadavbudigi@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="detail-item">
                      <div className="detail-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="detail-text">
                        <span className="detail-label">Phone</span>
                        <p className="detail-value">8309377748</p>
                      </div>
                    </div>
                    
                    <div className="detail-item">
                      <div className="detail-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="detail-text">
                        <span className="detail-label">Location</span>
                        <p className="detail-value">Chagalamarri, Kurnool, Andhra Pradesh, India</p>
                      </div>
                    </div>

                    <div className="detail-item">
                      <div className="detail-icon">
                        <i className="fab fa-linkedin"></i>
                      </div>
                      <div className="detail-text">
                        <span className="detail-label">LinkedIn</span>
                        <p className="detail-value">linkedin.com/in/narendrabudigi</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="resume-buttons">
                    <a
                      href={`${import.meta.env.BASE_URL}assets/NARENDRA-RESUME-D.pdf`}
                      className="btn btn-primary"
                      download
                    >
                      <i className="fas fa-download"></i> Download Resume
                    </a>

                    <a
                      href={`${import.meta.env.BASE_URL}assets/NARENDRA-RESUME-D.pdf`}
                      className="btn btn-outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-eye"></i> View Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div 
              id="experience"
              ref={sectionRefs.experience}
              className={`experience-section scroll-animation ${isVisible.experience ? 'animate-right' : ''}`}
            >
              <div className="section-title-container">
                <h2 className="section-title">
                  <i className="fas fa-briefcase"></i> Work Experience
                </h2>
                <div className="title-divider"></div>
              </div>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content-wrapper">
                    <div className="timeline-date">June 2023 - Dec 2023</div>
                    <div className="timeline-content">
                      <h3>Young Mind Technologies</h3>
                      <div className="timeline-company">Python & Web Development Intern</div>
                      <p className="timeline-description">
                        Developed and maintained web applications using Python and Django, including backend logic, 
                        APIs, and database integration. Built full-stack modules by integrating Django backend with 
                        HTML, CSS, and JavaScript front-end. Executed CRUD operations, user authentication, and 
                        RESTful APIs for scalable application features. Collaborated with senior developers to debug 
                        issues, perform code reviews, and improve code quality.
                      </p>
                      <div className="tech-used">
                        <span className="tech-tag">Python</span>
                        <span className="tech-tag">Django</span>
                        <span className="tech-tag">HTML</span>
                        <span className="tech-tag">CSS</span>
                        <span className="tech-tag">JavaScript</span>
                        <span className="tech-tag">REST APIs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div 
              id="education"
              ref={sectionRefs.education}
              className={`education-section scroll-animation ${isVisible.education ? 'animate-left' : ''}`}
            >
              <div className="section-title-container">
                <h2 className="section-title">
                  <i className="fas fa-graduation-cap"></i> Education
                </h2>
                <div className="title-divider"></div>
              </div>
              
              <div className="education-grid">
                <div className="education-card">
                  <div className="edu-header">
                    <div className="edu-logo">
                      <i className="fas fa-university"></i>
                    </div>
                    <div className="edu-title">
                      <h3>KL University</h3>
                      <h4>Bachelor of Technology in Computer Science</h4>
                    </div>
                  </div>
                  <div className="edu-details">
                    <div className="edu-detail">
                      <i className="fas fa-calendar-alt"></i>
                      <span>June 2024 - May 2027</span>
                    </div>
                    <div className="edu-detail">
                      <i className="fas fa-percentage"></i>
                      <span>CGPA: 9.5</span>
                    </div>
                  </div>
                </div>
                
                <div className="education-card">
                  <div className="edu-header">
                    <div className="edu-logo">
                      <i className="fas fa-school"></i>
                    </div>
                    <div className="edu-title">
                      <h3>Sri Venkateswara Government Polytechnic</h3>
                      <h4>Diploma in Computer Engineering</h4>
                    </div>
                  </div>
                  <div className="edu-details">
                    <div className="edu-detail">
                      <i className="fas fa-calendar-alt"></i>
                      <span>July 2021 - May 2024</span>
                    </div>
                    <div className="edu-detail">
                      <i className="fas fa-percentage"></i>
                      <span>Percentage: 94.6</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div 
              id="skills"
              ref={sectionRefs.skills}
              className={`skills-section scroll-animation ${isVisible.skills ? 'animate-right' : ''}`}
            >
              <div className="section-title-container">
                <h2 className="section-title">
                  <i className="fas fa-code"></i> Technical Skills
                </h2>
                <div className="title-divider"></div>
              </div>
              
              <div className="skills-categories">
                {skillCategories.map((category, index) => (
                  <div key={index} className="skill-category">
                    <div className="category-header">
                      <i className={category.icon}></i>
                      <h3>{category.title}</h3>
                    </div>
                    <div className="skills-container">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-item">
                          <div className="skill-info">
                            <div className="skill-icon">
                              <i className={skill.icon}></i>
                            </div>
                            <div className="skill-details">
                              <span className="skill-name">{skill.name}</span>
                              <span className="skill-percentage">{skill.percentage}%</span>
                            </div>
                          </div>
                          <div className="skill-bar">
                            <div 
                              className="skill-progress" 
                              style={{ width: `${skill.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div 
              id="languages"
              ref={sectionRefs.languages}
              className={`languages-section scroll-animation ${isVisible.languages ? 'animate-left' : ''}`}
            >
              <div className="section-title-container">
                <h2 className="section-title">
                  <i className="fas fa-language"></i> Languages
                </h2>
                <div className="title-divider"></div>
              </div>
              
              <div className="languages-grid">
                <div className="language-card">
                  <div className="language-header">
                    <div className="language-info">
                      <i className="fas fa-flag-usa"></i>
                      <span className="language-name">English</span>
                    </div>
                    <span className="language-level">Professional</span>
                  </div>
                  <div className="language-progress">
                    <div className="progress-dots">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-circle active"></i>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="language-card">
                  <div className="language-header">
                    <div className="language-info">
                      <i className="fas fa-flag"></i>
                      <span className="language-name">Telugu</span>
                    </div>
                    <span className="language-level">Native</span>
                  </div>
                  <div className="language-progress">
                    <div className="progress-dots">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-circle active"></i>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="language-card">
                  <div className="language-header">
                    <div className="language-info">
                      <i className="fas fa-flag"></i>
                      <span className="language-name">Hindi</span>
                    </div>
                    <span className="language-level">Conversational</span>
                  </div>
                  <div className="language-progress">
                    <div className="progress-dots">
                      <i className="fas fa-circle active"></i>
                      <i className="fas fa-circle active"></i>
                      <i className="fas fa-circle active"></i>
                      <i className="fas fa-circle"></i>
                      <i className="fas fa-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AboutPage;