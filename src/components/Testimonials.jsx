import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Марат К.",
      role: "CEO, Tech Startup",
      text: "Алтынай создала потрясающий дизайн для нашего приложения. Профессионально, быстро и с отличным чувством стиля!",
      rating: 5
    },
    {
      name: "Айгуль С.",
      role: "Маркетинг директор",
      text: "Работа с Алтынай была приятной. Она прислушивается к пожеланиям и всегда предлагает креативные решения.",
      rating: 5
    },
    {
      name: "Данияр Б.",
      role: "Владелец бизнеса",
      text: "Брендинг для нашей компании получился именно таким, как мы хотели. Рекомендую!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">ОТЗЫВЫ</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

