import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'DESIGN',
      skills: [
        'UI/UX Design',
        'Figma',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Adobe InDesign',
        'Sketch',
        'Prototyping',
        'Wireframing',
        'Brand Identity',
        'Typography'
      ]
    },
    {
      title: 'TOOLS',
      skills: [
        'Adobe After Effects',
        'Adobe XD',
        'InVision',
        'Miro',
        'Notion',
        'Canva',
        'CorelDRAW',
        'Procreate',
        'Blender',
        'Principle'
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">НАВЫКИ</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-tags">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

