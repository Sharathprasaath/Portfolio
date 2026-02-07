import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown, Menu, X, Code, Briefcase, GraduationCap, Award, Cpu, Database, BarChart3 } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Image Style Transfer",
      description: "Trained cycleGAN model (Cycle-Consistent Generative Adversarial Network) for artistic style transformation without paired training examples",
      tech: ["CycleGAN", "React.js", "Computer Vision"],
      link: "https://github.com/sharathprasaath/imagestyle",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Image Captioning",
      description: "Deep learning model using VGG net for feature extraction and LSTM networks for generating descriptive captions for images",
      tech: ["NLP", "LSTM", "Deep Learning", "React"],
      link: "https://github.com/sharathprasaath/Image-Captioning",
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  const experiences = [
    {
      role: "AI and ML Intern",
      company: "Mobius Knowledge Services",
      period: "May – June 2024",
      projects: [
        {
          name: "Label Generation",
          details: [
            "Developed Label Generation using TnT LLM and T5 transformer",
            "Used GPT-4 to generate summary and taxonomy based on use cases",
            "Trained T5 transformer model on generated taxonomy for label prediction"
          ]
        },
        {
          name: "Redaction",
          details: [
            "Developed and deployed redaction model using BERT and T5 transformer",
            "Fine-tuned BERT for NER and T5 for classifying personal information",
            "Implemented fitz for highlighting classified personal details"
          ]
        }
      ]
    },
    {
      role: "ML Intern",
      company: "goML",
      period: "March – June 2024",
      projects: [
        {
          name: "Personal Health Assistant (PHA)",
          details: [
            "Developed PHA leveraging Amazon Bedrock (Claude) for personalized clinical summaries",
            "Generated actionable insights from structured FHIR-based EHR data",
            "Built chatbot with patient context understanding, diet planner, appointment checker, and risk prediction panel"
          ]
        }
      ]
    }
  ];

  const skills = {
    "Languages": ["C", "Python", "HTML", "CSS"],
    "Libraries": ["Keras", "Pandas", "NumPy", "Matplotlib", "Sklearn", "TensorFlow", "React.js"],
    "Databases": ["MySQL (Relational Database)"],
    "Data Visualization": ["Tableau", "Power BI"],
    "Coursework": [
      "Machine Learning",
      "Database Management System",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Object Oriented Programming",
      "Data Structures",
      "Web Technology",
      "Natural Language Processing"
    ]
  };

  return (
    <div className="portfolio-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Syne:wght@400;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #0A66C2;
          --primary-dark: #004182;
          --secondary: #00D9FF;
          --accent: #FF6B35;
          --bg-dark: #0A0E27;
          --bg-card: #151932;
          --bg-light: #1E2749;
          --text-primary: #E8EDF2;
          --text-secondary: #A0AEC0;
          --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          --gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        body {
          font-family: 'JetBrains Mono', monospace;
          background: var(--bg-dark);
          color: var(--text-primary);
          overflow-x: hidden;
        }

        .portfolio-container {
          position: relative;
        }

        /* Animated Background */
        .portfolio-container::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(245, 87, 108, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(0, 242, 254, 0.1) 0%, transparent 50%);
          z-index: -1;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
          background: ${scrollY > 50 ? 'rgba(10, 14, 39, 0.95)' : 'transparent'};
          transition: all 0.3s ease;
          border-bottom: 1px solid ${scrollY > 50 ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--secondary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--secondary);
          transition: width 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--text-primary);
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
        }

        /* Hero Section */
        #home {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
        }

        .hero-content {
          max-width: 900px;
          text-align: center;
          animation: fadeInUp 1s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-tag {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(0, 217, 255, 0.1);
          border: 1px solid var(--secondary);
          border-radius: 50px;
          color: var(--secondary);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 2rem;
          animation: fadeInUp 1s ease 0.2s backwards;
        }

        h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          animation: fadeInUp 1s ease 0.4s backwards;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--secondary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          line-height: 1.6;
          animation: fadeInUp 1s ease 0.6s backwards;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 1s ease 0.8s backwards;
        }

        .btn {
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--secondary), var(--primary));
          color: white;
          box-shadow: 0 4px 15px rgba(0, 217, 255, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 217, 255, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        /* Section Styles */
        section {
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-tag {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(255, 107, 53, 0.1);
          border: 1px solid var(--accent);
          border-radius: 50px;
          color: var(--accent);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .section-description {
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* About Section */
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .about-text p {
          margin-bottom: 1.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .stat-card {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: var(--secondary);
          box-shadow: 0 10px 30px rgba(0, 217, 255, 0.2);
        }

        .stat-number {
          font-family: 'Syne', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--secondary);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        /* Experience Section */
        .experience-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--secondary), var(--accent));
        }

        .experience-item {
          position: relative;
          margin-bottom: 3rem;
          padding-left: 2rem;
        }

        .experience-item::before {
          content: '';
          position: absolute;
          left: -2.5rem;
          top: 0;
          width: 12px;
          height: 12px;
          background: var(--secondary);
          border-radius: 50%;
          border: 3px solid var(--bg-dark);
        }

        .experience-card {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .experience-card:hover {
          border-color: var(--secondary);
          transform: translateX(5px);
        }

        .experience-header {
          margin-bottom: 1.5rem;
        }

        .experience-role {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .experience-company {
          color: var(--secondary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .experience-period {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .project-section {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-name {
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
        }

        .project-details {
          list-style: none;
          padding-left: 0;
        }

        .project-details li {
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
        }

        .project-details li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--secondary);
          font-weight: bold;
        }

        /* Projects Section */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--bg-card);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent);
          box-shadow: 0 20px 40px rgba(255, 107, 53, 0.2);
        }

        .project-icon {
          background: linear-gradient(135deg, var(--secondary), var(--accent));
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .project-content {
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
          flex: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          padding: 0.4rem 1rem;
          background: rgba(0, 217, 255, 0.1);
          border: 1px solid var(--secondary);
          border-radius: 50px;
          font-size: 0.8rem;
          color: var(--secondary);
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          gap: 0.75rem;
        }

        /* Skills Section */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .skill-category:hover {
          border-color: var(--secondary);
          transform: translateY(-5px);
        }

        .skill-category-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--secondary), var(--accent));
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: white;
        }

        .skill-category-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(0, 217, 255, 0.1);
          border-color: var(--secondary);
          color: var(--secondary);
          transform: translateY(-2px);
        }

        /* Education Section */
        .education-card {
          background: var(--bg-card);
          padding: 3rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          max-width: 700px;
          margin: 0 auto;
          transition: all 0.3s ease;
        }

        .education-card:hover {
          border-color: var(--secondary);
          box-shadow: 0 20px 40px rgba(0, 217, 255, 0.2);
        }

        .education-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--secondary), var(--accent));
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: white;
        }

        .education-degree {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .education-university {
          color: var(--secondary);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .education-year {
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .education-cgpa {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 107, 53, 0.1);
          border: 1px solid var(--accent);
          border-radius: 50px;
          color: var(--accent);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .certification {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .certification-title {
          font-weight: 600;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Contact Section */
        .contact-content {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .contact-method {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .contact-method:hover {
          border-color: var(--secondary);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 217, 255, 0.2);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--secondary), var(--accent));
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: white;
        }

        .contact-label {
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .contact-value {
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Footer */
        footer {
          background: var(--bg-card);
          padding: 2rem;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          color: var(--text-secondary);
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .social-link {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--secondary);
          border-color: var(--secondary);
          color: white;
          transform: translateY(-3px);
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-menu {
            position: fixed;
            top: 0;
            right: ${isMenuOpen ? '0' : '-100%'};
            width: 80%;
            max-width: 400px;
            height: 100vh;
            background: var(--bg-card);
            padding: 6rem 2rem 2rem;
            transition: right 0.3s ease;
            z-index: 999;
            border-left: 1px solid rgba(255, 255, 255, 0.1);
          }

          .mobile-menu.open {
            right: 0;
          }

          .mobile-nav-links {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .mobile-nav-links a {
            color: var(--text-primary);
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: 600;
          }

          .about-content,
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid,
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          section {
            padding: 4rem 1.5rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }

          .contact-methods {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="logo">SP</div>
          <ul className="nav-links">
            {['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'].map(section => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={activeSection === section ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'].map(section => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Section */}
      <section id="home">
        <div className="hero-content">
          <div className="hero-tag">AI & ML Engineer</div>
          <h1>
            Hi, I'm <span className="gradient-text">Sharath Prasaath</span>
          </h1>
          <p className="hero-description">
            Computer Science student specializing in Artificial Intelligence, passionate about building intelligent systems
            and transforming data into actionable insights through Machine Learning and Deep Learning.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDown size={32} color="var(--text-secondary)" />
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="section-header">
          <div className="section-tag">About Me</div>
          <h2>Building the Future with AI</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a final-year Computer Science student at Shiv Nadar University, Chennai, specializing in Artificial Intelligence.
              My journey in tech is driven by a passion for creating intelligent systems that solve real-world problems.
            </p>
            <p>
              With hands-on experience in Machine Learning, Deep Learning, and Natural Language Processing, I've worked on
              projects ranging from generative models to healthcare AI. I love exploring new technologies and turning
              complex challenges into elegant solutions.
            </p>
            <p>
              When I'm not coding, you'll find me diving deep into the latest AI research papers or experimenting with
              new frameworks and tools.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">8.2</div>
              <div className="stat-label">CGPA</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Internships</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="section-header">
          <div className="section-tag">Experience</div>
          <h2>Professional Journey</h2>
          <p className="section-description">
            Practical experience in AI/ML development across different domains
          </p>
        </div>
        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-item">
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-role">{exp.role}</h3>
                  <div className="experience-company">{exp.company}</div>
                  <div className="experience-period">{exp.period}</div>
                </div>
                {exp.projects.map((project, pidx) => (
                  <div key={pidx} className="project-section">
                    <div className="project-name">{project.name}</div>
                    <ul className="project-details">
                      {project.details.map((detail, didx) => (
                        <li key={didx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="section-header">
          <div className="section-tag">Projects</div>
          <h2>Featured Work</h2>
          <p className="section-description">
            Innovative projects showcasing my skills in AI and Deep Learning
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-icon">
                {project.icon}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, tidx) => (
                    <span key={tidx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="section-header">
          <div className="section-tag">Skills</div>
          <h2>Technical Expertise</h2>
          <p className="section-description">
            Technologies and tools I work with
          </p>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <div className="skill-category-icon">
              <Code size={24} />
            </div>
            <h3 className="skill-category-title">Languages</h3>
            <div className="skill-tags">
              {skills.Languages.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-category-icon">
              <Cpu size={24} />
            </div>
            <h3 className="skill-category-title">Libraries & Frameworks</h3>
            <div className="skill-tags">
              {skills.Libraries.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-category-icon">
              <Database size={24} />
            </div>
            <h3 className="skill-category-title">Databases</h3>
            <div className="skill-tags">
              {skills.Databases.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-category-icon">
              <BarChart3 size={24} />
            </div>
            <h3 className="skill-category-title">Data Visualization</h3>
            <div className="skill-tags">
              {skills["Data Visualization"].map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="section-header">
          <div className="section-tag">Education</div>
          <h2>Academic Background</h2>
        </div>
        <div className="education-card">
          <div className="education-icon">
            <GraduationCap size={30} />
          </div>
          <h3 className="education-degree">
            Bachelor of Technology in Computer Science and Engineering (Artificial Intelligence)
          </h3>
          <div className="education-university">Shiv Nadar University, Chennai</div>
          <div className="education-year">2021 - 2025</div>
          <div className="education-cgpa">CGPA: 8.2</div>
          <div className="certification">
            <div className="certification-title">
              <Award size={20} />
              Supervised Machine Learning: Regression and Classification
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="section-header">
          <div className="section-tag">Contact</div>
          <h2>Let's Connect</h2>
          <p className="section-description">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-methods">
            <a href="mailto:sharathprasaath@gmail.com" className="contact-method">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-label">Email</div>
              <div className="contact-value">sharathprasaath@gmail.com</div>
            </a>
            <a href="tel:+919344047695" className="contact-method">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">+91-9344047695</div>
            </a>
            <a href="https://github.com/sharathprasaath" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="contact-icon">
                <Github size={24} />
              </div>
              <div className="contact-label">GitHub</div>
              <div className="contact-value">@sharathprasaath</div>
            </a>
            <a href="https://linkedin.com/in/sharathprasaath" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="contact-icon">
                <Linkedin size={24} />
              </div>
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">@sharathprasaath</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="social-links">
            <a href="https://github.com/sharathprasaath" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/sharathprasaath" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="mailto:sharathprasaath@gmail.com" className="social-link">
              <Mail size={20} />
            </a>
          </div>
          <p>© 2025 Sharath Prasaath J. Built with React.</p>
        </div>
      </footer>
    </div>
  );
}
