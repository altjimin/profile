import React from 'react';
import './Posters.css';
import poster1 from '../assets/8443206.jpg';
import poster2 from '../assets/7207111.jpg';

const Posters = () => {
  // Create array of 25 posters (using the 2 images we have and repeating them)
  const posters = [
    { id: 1, image: poster1, title: 'Design 01' },
    { id: 2, image: poster2, title: 'Design 02' },
    { id: 3, image: poster1, title: 'Design 03' },
    { id: 4, image: poster2, title: 'Design 04' },
    { id: 5, image: poster1, title: 'Design 05' },
    { id: 6, image: poster2, title: 'Design 06' },
    { id: 7, image: poster1, title: 'Design 07' },
    { id: 8, image: poster2, title: 'Design 08' },
    { id: 9, image: poster1, title: 'Design 09' },
    { id: 10, image: poster2, title: 'Design 10' },
    { id: 11, image: poster1, title: 'Design 11' },
    { id: 12, image: poster2, title: 'Design 12' },
    { id: 13, image: poster1, title: 'Design 13' },
    { id: 14, image: poster2, title: 'Design 14' },
    { id: 15, image: poster1, title: 'Design 15' },
    { id: 16, image: poster2, title: 'Design 16' },
    { id: 17, image: poster1, title: 'Design 17' },
    { id: 18, image: poster2, title: 'Design 18' },
    { id: 19, image: poster1, title: 'Design 19' },
    { id: 20, image: poster2, title: 'Design 20' },
    { id: 21, image: poster1, title: 'Design 21' },
    { id: 22, image: poster2, title: 'Design 22' },
    { id: 23, image: poster1, title: 'Design 23' },
    { id: 24, image: poster2, title: 'Design 24' },
    { id: 25, image: poster1, title: 'Design 25' },
  ];

  return (
    <section id="posters" className="posters">
      <div className="container">
        <h2 className="section-title">ПОСТЕРЫ</h2>
        <p className="posters-subtitle">
          Коллекция моих дизайн-работ
        </p>
        <div className="posters-grid">
          {posters.map((poster) => (
            <div key={poster.id} className="poster-item">
              <div className="poster-image-wrapper">
                <img src={poster.image} alt={poster.title} className="poster-image" />
                <div className="poster-overlay">
                  <span className="poster-title">{poster.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posters;

