import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/AchievementsPage.css';
import Navigation from '../../common/jsx/Navigation';
import BackgroundAnimations from '../../common/jsx/BackgroundAnimations';

const AchievementsPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const observerRef = useRef(null);

  // Achievements Data
  const achievements = [
    {
      id: 1,
      title: "Python Internship - YoungMinds Technology Solutions Pvt. Ltd.",
      image: import.meta.env.BASE_URL + 'assets/certificates/python-internship.jpg',
      certificateLink: "#",
      category: "Internship"
    },
    {
      id: 2,
      title: "Programming in Java - NPTEL",
      image: import.meta.env.BASE_URL + 'assets/certificates/nptel-java.jpg',
      certificateLink: "#",
      category: "Programming"
    },
    {
      id: 3,
      title: "Google AI/ML Virtual Internship - AICTE & Google",
      image: import.meta.env.BASE_URL + 'assets/certificates/google-aiml.jpg',
      certificateLink: "#",
      category: "AI/ML"
    },
    {
      id: 4,
      title: "Data Science using Python - NPTEL",
      image: import.meta.env.BASE_URL + 'assets/certificates/data-science-python.jpg',
      certificateLink: "#",
      category: "Data Science"
    },
    {
      id: 5,
      title: "Software Engineer Role Certification - HackerRank",
      image: import.meta.env.BASE_URL + 'assets/certificates/hackerrank-se.jpg',
      certificateLink: "#",
      category: "Programming"
    },
    {
      id: 6,
      title: "CI/CD Pipelines with Jenkins & Docker - ICT Academy / AWS Academy",
      image: import.meta.env.BASE_URL + 'assets/certificates/jenkins-docker.jpg',
      certificateLink: "#",
      category: "DevOps"
    },
    {
      id: 7,
      title: "Academic Topper in Diploma in Computer Science",
      image: import.meta.env.BASE_URL + 'assets/certificates/academic-topper.jpg',
      certificateLink: "#",
      category: "Achievement"
    },
    {
      id: 8,
      title: "2nd Prize in TechFest for Service Hub Website",
      image: import.meta.env.BASE_URL + 'assets/certificates/techfest-prize.jpg',
      certificateLink: "#",
      category: "Achievement"
    },
    {
      id: 9,
      title: "Solved 250+ Coding Problems",
      image: import.meta.env.BASE_URL + 'assets/certificates/coding-achievement.jpg',
      certificateLink: "https://leetcode.com/u/NarendraBudigi/",
      category: "Coding"
    },
    {
      id: 10,
      title: "Built Multiple Full-Stack Applications",
      image: import.meta.env.BASE_URL + 'assets/certificates/fullstack-projects.jpg',
      certificateLink: "https://github.com/Narendrabudigi",
      category: "Projects"
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Initialize intersection observer
    initScrollAnimations();
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const initScrollAnimations = () => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setAnimatedElements(prev => new Set(prev).add(id));
            }
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all scroll-animate elements
    setTimeout(() => {
      document.querySelectorAll('.scroll-animate').forEach(el => {
        observerRef.current.observe(el);
      });
    }, 100);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    if (isMobile) {
      setShowMenu(false);
    }
  };

  const renderAchievements = () => {
    return achievements.map((achievement, index) => (
      <div 
        key={achievement.id} 
        className="achievement-card scroll-animate"
        data-id={achievement.id}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <a 
          href={achievement.certificateLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="certificate-link"
        >
          <div className="certificate-image-container">
            <img
              src={achievement.image}
              alt={achievement.title}
              className="certificate-image"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/300x200/001a00/00ff00?text=${encodeURIComponent(achievement.title)}`;
              }}
              loading="lazy"
            />
            <div className="view-icon">
              <i className="fas fa-external-link-alt"></i>
            </div>
          </div>
          <div className="certificate-title">
            <h3>{achievement.title}</h3>
            <span className="achievement-category">{achievement.category}</span>
          </div>
        </a>
      </div>
    ));
  };

  // Calculate stats
  const totalAchievements = achievements.length;
  const categories = [...new Set(achievements.map(a => a.category))];
  const categoryCount = categories.length;

  return (
    <div className="achievements-page">
      <BackgroundAnimations />
      <Navigation 
        showMenu={showMenu}
        isMobile={isMobile}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        currentPage="achievements"
      />

      <div className={`content-overlay ${showMenu && isMobile ? 'expanded' : ''}`}>
        <main className="main-content">
          <section className="achievements-section">
            {/* Header */}
            <div className="section-header scroll-animate" data-direction="up">
              <h1 className="text-gradient">
                My <span>Achievements</span>
              </h1>
              <p className="subtitle">
                Certifications, accomplishments, and milestones from my learning and development journey
              </p>
              <div className="header-divider"></div>
            </div>

            {/* Stats */}
            <div className="achievement-stats scroll-animate">
              <div className="stat-card">
                <h2>{totalAchievements}</h2>
                <p>Total Achievements</p>
              </div>
              <div className="stat-card">
                <h2>{categoryCount}</h2>
                <p>Categories</p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="achievements-container">
              <div className="achievements-grid">
                {renderAchievements()}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AchievementsPage;