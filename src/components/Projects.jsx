import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Мобильное приложение для доставки',
      description: 'Современный UI/UX дизайн мобильного приложения с интуитивной навигацией и яркими визуалами.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping'],
      category: 'Mobile Design'
    },
    {
      title: 'Брендинг для стартапа',
      description: 'Полный фирменный стиль включая логотип, цветовую палитру, типографику и брендбук.',
      technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
      category: 'Branding'
    },
    {
      title: 'Лендинг для IT компании',
      description: 'Современный одностраничный сайт с анимациями, адаптивным дизайном и конверсионными элементами.',
      technologies: ['Figma', 'Wireframing', 'UI Design'],
      category: 'Web Design'
    },
    {
      title: 'Дизайн для социальной сети',
      description: 'Интерфейс социальной платформы с продуманной архитектурой информации и user flow.',
      technologies: ['Figma', 'User Research', 'Prototyping'],
      category: 'UI/UX'
    },
    {
      title: 'SMM контент для бренда',
      description: 'Серия постов и сторис для Instagram с единым визуальным стилем и айдентикой.',
      technologies: ['Photoshop', 'After Effects', 'Canva'],
      category: 'SMM Design'
    },
    {
      title: 'Презентация для бизнеса',
      description: 'Корпоративная презентация с инфографикой, диаграммами и современным дизайном.',
      technologies: ['PowerPoint', 'Illustrator', 'InDesign'],
      category: 'Presentation'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">МОИ ПРОЕКТЫ</h2>
        <p className="projects-subtitle">
          Вот некоторые из моих недавних работ, демонстрирующих мои навыки и креативность
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>{project.category}</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <button className="project-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

