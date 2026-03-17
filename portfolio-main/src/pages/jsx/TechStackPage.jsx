import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/TechStackPage.css';
import Navigation from '../../common/jsx/Navigation';
import BackgroundAnimations from '../../common/jsx/BackgroundAnimations';

const TechStackPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Updated Tech Stack Data from resume
  const techStack = [
    { name: 'C', icon: 'fas fa-code', class: 'c' },
    { name: 'Java', icon: 'fab fa-java', class: 'java' },
    { name: 'Python', icon: 'fab fa-python', class: 'python' },
    { name: 'SQL', icon: 'fas fa-database', class: 'sql' },
    { name: 'HTML5', icon: 'fab fa-html5', class: 'html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', class: 'css3' },
    { name: 'JavaScript', icon: 'fab fa-js-square', class: 'javascript' },
    { name: 'PHP', icon: 'fab fa-php', class: 'php' },
    { name: 'React', icon: 'fab fa-react', class: 'react' },
    { name: 'Django', icon: 'fas fa-layer-group', class: 'django' },
    { name: 'Spring Boot', icon: 'fas fa-leaf', class: 'springboot' },
    { name: 'Jenkins', icon: 'fas fa-tools', class: 'jenkins' },
    { name: 'GitHub Actions', icon: 'fab fa-github', class: 'githubactions' },
    { name: 'CI/CD', icon: 'fas fa-infinity', class: 'cicd' },
    { name: 'Docker', icon: 'fab fa-docker', class: 'docker' },
    { name: 'MySQL', icon: 'fas fa-database', class: 'mysql' },
    { name: 'Machine Learning', icon: 'fas fa-brain', class: 'ml' },
    { name: 'Data Analysis', icon: 'fas fa-chart-line', class: 'dataanalysis' },
    { name: 'Tableau', icon: 'fas fa-chart-bar', class: 'tableau' },
    { name: 'Scikit-Learn', icon: 'fas fa-robot', class: 'scikitlearn' },
    { name: 'NLTK', icon: 'fas fa-language', class: 'nltk' },
    { name: 'TF-IDF', icon: 'fas fa-project-diagram', class: 'tfidf' },
    { name: 'Figma', icon: 'fab fa-figma', class: 'figma' },
    { name: 'UI/UX', icon: 'fas fa-pencil-ruler', class: 'uiux' }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedTechStack = [...techStack, ...techStack, ...techStack];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    if (isMobile) {
      setShowMenu(false);
    }
  };

  const renderTechStack = () => {
    return duplicatedTechStack.map((tech, index) => (
      <div key={`${tech.name}-${index}`} className="tech-item">
        <div className={`tech-icon ${tech.class}`}>
          <i className={tech.icon}></i>
        </div>
        <span className="tech-name">{tech.name}</span>
      </div>
    ));
  };

  return (
    <div className="techstack-page">
      <BackgroundAnimations />
      <Navigation
        showMenu={showMenu}
        isMobile={isMobile}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        currentPage="techstack"
      />

      <div className={`content-overlay ${showMenu && isMobile ? 'expanded' : ''}`}>
        <main className="main-content">
          <section className="techstack-section">
            {/* Header */}
            <div className="section-header">
              <h1 className="text-gradient">
                My <span>Tech Stack</span>
              </h1>
              <div className="header-divider"></div>
            </div>

            {/* Tech Stack Scrolling Section */}
            <div className="tech-stack-section">
              <div className="scrolling-section-wrapper">
                <div className="scrolling-container">
                  <div className="tech-stack-scroll">
                    {renderTechStack()}
                  </div>
                </div>
              </div>
            </div>

            {/* Heatmaps / Profiles Section */}
            <div className="heatmaps-section">
              <h2 className="section-title">Coding Activity</h2>
              <div className="heatmaps-grid">
                {/* GitHub */}
                <div className="heatmap-card">
                  <div className="heatmap-header">
                    <div className="heatmap-icon">
                      <i className="fab fa-github"></i>
                    </div>
                    <h3 className="heatmap-title">GitHub Contributions</h3>
                  </div>
                  <div className="heatmap-container">
                    <div className="heatmap-placeholder">
                      <i className="fas fa-chart-bar" style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }}></i>
                      GitHub Contribution Activity
                      <br />
                      <span style={{ fontSize: '0.9rem', opacity: '0.7' }}>
                        Explore repositories and commits
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://github.com/Narendrabudigi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="heatmap-link"
                  >
                    View GitHub Profile
                  </a>
                </div>

                {/* LeetCode */}
                <div className="heatmap-card">
                  <div className="heatmap-header">
                    <div className="heatmap-icon">
                      <i className="fas fa-code"></i>
                    </div>
                    <h3 className="heatmap-title">LeetCode Progress</h3>
                  </div>
                  <div className="heatmap-container">
                    <div className="heatmap-placeholder">
                      <i className="fas fa-laptop-code" style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }}></i>
                      LeetCode Problem Solving
                      <br />
                      <span style={{ fontSize: '0.9rem', opacity: '0.7' }}>
                        250+ coding problems solved
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://leetcode.com/u/NarendraBudigi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="heatmap-link"
                  >
                    View LeetCode Profile
                  </a>
                </div>

                {/* CodeChef */}
                <div className="heatmap-card">
                  <div className="heatmap-header">
                    <div className="heatmap-icon">
                      <i className="fas fa-trophy"></i>
                    </div>
                    <h3 className="heatmap-title">CodeChef Activity</h3>
                  </div>
                  <div className="heatmap-container">
                    <div className="heatmap-placeholder">
                      <i className="fas fa-chart-line" style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }}></i>
                      CodeChef Submission Activity
                      <br />
                      <span style={{ fontSize: '0.9rem', opacity: '0.7' }}>
                        Competitive programming practice
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://www.codechef.com/users/n300039131"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="heatmap-link"
                  >
                    View CodeChef Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="stats-section">
              <h2 className="section-title">Coding Statistics</h2>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Technologies</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Learning & Building</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Major Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">250+</div>
                  <div className="stat-label">Problems Solved</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default TechStackPage;