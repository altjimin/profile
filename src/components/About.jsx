import React from 'react';
import './About.css';
import profileImage from '../assets/index.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">ОБО МНЕ</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="placeholder-image">
              <img src={profileImage} alt="Алтынай" className="profile-photo" />
              <span>Altynay</span>
            </div>
          </div>
          <div className="about-text">
            <h3>Привет! Я Алтынай — UI/UX дизайнер</h3>
            <p>
              С опытом работы более года. Создаю не только стильный дизайн,
              но и инструмент, который помогает бренду говорить
              с аудиторией и вести её к действию.
            </p>
            <p>
              Я верю в силу хорошего дизайна для решения реальных задач
              и улучшения жизни людей. Будь то мобильное приложение, сайт или
              веб-приложение, я стремлюсь создавать опыт, который является
              одновременно красивым и удобным для пользователей.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Проектов</span>
              </div>
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Лет опыта</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Клиентов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

