import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/ProjectsPage.css';
import Navigation from '../../common/jsx/Navigation';
import BackgroundAnimations from '../../common/jsx/BackgroundAnimations';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());

  const sectionRef = useRef(null);
  const projectsRef = useRef(null);
  const statsRef = useRef(null);

  const projects = {
    completed: [
      {
        id: 1,
        title: "Event Flow - Campus Event Manager",
        description:
          "A centralized platform that allows students to view, register, and participate in campus events through a smooth and organized interface.",
        images: [
          import.meta.env.BASE_URL + 'assets/projects/eventflow/event1.png',
          import.meta.env.BASE_URL + 'assets/projects/eventflow/event2.png',
          import.meta.env.BASE_URL + 'assets/projects/eventflow/event3.png'
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Python", "Django", "MySQL"],
        liveDemo: "#",
        github: "#",
        features: [
          "Student event registration",
          "Admin dashboard",
          "Resource upload management",
          "Activity tracking",
          "Secure MySQL database integration"
        ],
        award: false,
        status: "completed"
      },
      {
        id: 2,
        title: "Service Hub Website",
        description:
          "A service-booking platform connecting users with local service providers such as electricians and plumbers, with secure booking and profile management features.",
        images: [
          import.meta.env.BASE_URL + 'assets/projects/servicehub/service1.png',
          import.meta.env.BASE_URL + 'assets/projects/servicehub/service2.png',
          import.meta.env.BASE_URL + 'assets/projects/servicehub/service3.png'
        ],
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        liveDemo: "#",
        github: "#",
        features: [
          "Service booking system",
          "Secure login and authentication",
          "Provider profile management",
          "Booking history tracking",
          "Responsive user interface"
        ],
        award: true,
        status: "completed"
      }
    ],
    ongoing: [
      {
        id: 3,
        title: "Sentiment Analysis of E-Commerce Reviews",
        description:
          "A machine learning-based application that classifies customer reviews into positive, neutral, and negative sentiments using NLP preprocessing and predictive models.",
        images: [
          import.meta.env.BASE_URL + 'assets/projects/sentiment/sentiment1.png',
          import.meta.env.BASE_URL + 'assets/projects/sentiment/sentiment2.png',
          import.meta.env.BASE_URL + 'assets/projects/sentiment/sentiment3.png'
        ],
        technologies: ["Python", "Django", "Scikit-Learn", "NLTK", "TF-IDF"],
        liveDemo: "#",
        github: "#",
        status: "ongoing",
        progress: 85,
        features: [
          "Sentiment classification",
          "Text preprocessing pipeline",
          "TF-IDF feature extraction",
          "Logistic Regression & Naive Bayes",
          "Batch review analysis"
        ],
        award: false
      }
    ],
    upcoming: []
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => new Set(prev).add(entry.target));
        }
      });
    }, { threshold: 0.1, rootMargin: '-50px' });

    const animatableElements = document.querySelectorAll(
      '.section-header, .project-card, .stat-card'
    );
    animatableElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
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

  const filterProjects = (category) => {
    setActiveFilter(category);
  };

  const ProjectCard = ({ project, index }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
      if (!project.images || project.images.length <= 1) return;

      const interval = setInterval(() => {
        if (isHovered) return;

        setCurrentImageIndex((prevIndex) =>
          prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);

      return () => clearInterval(interval);
    }, [project.images, isHovered]);

    const handleNextImage = () => {
      if (!project.images) return;
      setCurrentImageIndex(prev =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    };

    const handlePrevImage = () => {
      if (!project.images) return;
      setCurrentImageIndex(prev =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    };

    const displayImage = project.images
      ? project.images[currentImageIndex]
      : project.image;

    const animationDirection = index % 2 === 0 ? 'slide-in-left' : 'slide-in-right';

    return (
      <div
        ref={cardRef}
        key={project.id}
        className={`project-card ${visibleElements.has(cardRef.current) ? animationDirection : 'hidden'}`}
        data-status={project.status}
      >
        <div className="project-header">
          <div
            className="project-image"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={displayImage}
              alt={project.title}
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/400x200/00ff00/000000?text=${project.title.split(' ')[0]}`;
              }}
            />

            {project.images && project.images.length > 1 && (
              <div className="image-dots">
                {project.images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  ></span>
                ))}
              </div>
            )}

            {project.images && project.images.length > 1 && isHovered && (
              <>
                <button className="nav-arrow prev" onClick={handlePrevImage}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="nav-arrow next" onClick={handleNextImage}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </>
            )}

            <div className="project-overlay">
              <div className="project-actions">
                {project.liveDemo !== '#' && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="action-btn">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
                {project.github !== '#' && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn">
                    <i className="fab fa-github"></i>
                  </a>
                )}
              </div>
            </div>

            {project.award && (
              <div className="award-badge">
                <i className="fas fa-trophy"></i>
                <span>Featured</span>
              </div>
            )}
          </div>
        </div>

        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>

          {project.features && project.features.length > 0 && (
            <div className="project-features">
              {project.features.map((feature, index) => (
                <span key={index} className="feature-tag">
                  <i className="fas fa-check"></i>
                  {feature}
                </span>
              ))}
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="project-tech">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          )}

          {project.status === 'ongoing' && (
            <div className="project-progress">
              <div className="progress-info">
                <span>Development Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${project.progress}%`,
                    background: '#ffc107'
                  }}
                ></div>
              </div>
            </div>
          )}

          <div className="project-links">
            {project.liveDemo !== '#' && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-link demo">
                <i className="fas fa-external-link-alt"></i>
                Live Demo
              </a>
            )}

            {project.github !== '#' && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-link code">
                <i className="fab fa-github"></i>
                Source Code
              </a>
            )}

            {project.status === 'upcoming' && (
              <button className="btn-link upcoming">
                <i className="fas fa-clock"></i>
                Coming Soon
              </button>
            )}
          </div>
        </div>

        <div className="project-glow"></div>
      </div>
    );
  };

  const renderProjects = () => {
    let filteredProjects = [];

    if (activeFilter === 'all') {
      filteredProjects = [
        ...projects.completed,
        ...projects.ongoing,
        ...projects.upcoming
      ];
    } else {
      filteredProjects = projects[activeFilter] || [];
    }

    return filteredProjects.map((project, index) => (
      <ProjectCard key={project.id} project={project} index={index} />
    ));
  };

  return (
    <div className="projects-page">
      <BackgroundAnimations />
      <Navigation
        showMenu={showMenu}
        isMobile={isMobile}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        currentPage="projects"
      />

      <div className={`content-overlay ${showMenu && isMobile ? 'expanded' : ''}`}>
        <main className="main-content">
          <section ref={sectionRef} className="projects-section">
            <div className={`section-header ${visibleElements.has(sectionRef.current) ? 'fade-in-up' : 'hidden'}`}>
              <h1 className="text-gradient">My <span>Projects</span></h1>
              <p className="subtitle">Building digital solutions that solve real-world problems</p>
              <div className="header-divider"></div>
            </div>

            <div className="projects-container">
              <div className="projects-grid">
                {renderProjects()}
              </div>
            </div>

            <div ref={statsRef} className="projects-stats">
              <div className={`stat-card ${visibleElements.has(statsRef.current) ? 'slide-in-left' : 'hidden'}`}>
                <div className="stat-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="stat-content">
                  <h3>{projects.completed.length}</h3>
                  <p>Completed</p>
                </div>
              </div>

              <div className={`stat-card ${visibleElements.has(statsRef.current) ? 'fade-in-up' : 'hidden'}`}>
                <div className="stat-icon">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <div className="stat-content">
                  <h3>{projects.ongoing.length}</h3>
                  <p>In Progress</p>
                </div>
              </div>

              <div className={`stat-card ${visibleElements.has(statsRef.current) ? 'fade-in-up' : 'hidden'}`}>
                <div className="stat-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div className="stat-content">
                  <h3>{projects.upcoming.length}</h3>
                  <p>Coming Soon</p>
                </div>
              </div>

              <div className={`stat-card ${visibleElements.has(statsRef.current) ? 'slide-in-right' : 'hidden'}`}>
                <div className="stat-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="stat-content">
                  <h3>{projects.completed.length + projects.ongoing.length + projects.upcoming.length}</h3>
                  <p>Total Projects</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProjectsPage;