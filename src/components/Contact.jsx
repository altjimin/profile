import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title-contact">КОНТАКТЫ</h2>
        
        <div className="contact-card">
          <h3 className="contact-card-title">СВЯЗАТЬСЯ СО МНОЙ</h3>
          <div className="contact-divider"></div>
          
          <div className="contact-method">
            <p className="contact-platform">phone: <span className="contact-handle">+7 707 977 79 31</span></p>
            <ul className="contact-details">
              <li>- здесь вы получите</li>
              <li>- быструю консультацию</li>
              <li>- сможете обсудить</li>
              <li>свой проект более детально</li>
            </ul>
          </div>

          <div className="contact-divider"></div>

          <div className="contact-method">
            <p className="contact-platform">tg: <span className="contact-handle">altynay_design</span></p>
            <p className="contact-description">связаться напрямую</p>
          </div>

          <div className="contact-divider"></div>

          <div className="contact-method">
            <p className="contact-platform">inst: <span className="contact-handle">altynay.design</span></p>
            <ul className="contact-details">
              <li>- публикую свои работы в дизайне</li>
              <li>- записываю туториалы</li>
              <li>- показываю процесс работы</li>
              <li>- рассказываю о своих проектах</li>
            </ul>
          </div>

          <div className="contact-divider"></div>

          <div className="contact-barcode">
            <svg width="200" height="40" viewBox="0 0 200 40">
              <rect x="0" y="0" width="2" height="40" fill="#000"/>
              <rect x="4" y="0" width="1" height="40" fill="#000"/>
              <rect x="8" y="0" width="3" height="40" fill="#000"/>
              <rect x="14" y="0" width="1" height="40" fill="#000"/>
              <rect x="18" y="0" width="2" height="40" fill="#000"/>
              <rect x="24" y="0" width="1" height="40" fill="#000"/>
              <rect x="28" y="0" width="4" height="40" fill="#000"/>
              <rect x="36" y="0" width="2" height="40" fill="#000"/>
              <rect x="42" y="0" width="1" height="40" fill="#000"/>
              <rect x="46" y="0" width="3" height="40" fill="#000"/>
              <rect x="52" y="0" width="2" height="40" fill="#000"/>
              <rect x="58" y="0" width="1" height="40" fill="#000"/>
              <rect x="62" y="0" width="4" height="40" fill="#000"/>
              <rect x="70" y="0" width="1" height="40" fill="#000"/>
              <rect x="74" y="0" width="2" height="40" fill="#000"/>
              <rect x="80" y="0" width="3" height="40" fill="#000"/>
              <rect x="86" y="0" width="1" height="40" fill="#000"/>
              <rect x="90" y="0" width="2" height="40" fill="#000"/>
              <rect x="96" y="0" width="4" height="40" fill="#000"/>
              <rect x="104" y="0" width="1" height="40" fill="#000"/>
              <rect x="108" y="0" width="3" height="40" fill="#000"/>
              <rect x="114" y="0" width="2" height="40" fill="#000"/>
              <rect x="120" y="0" width="1" height="40" fill="#000"/>
              <rect x="124" y="0" width="4" height="40" fill="#000"/>
              <rect x="132" y="0" width="2" height="40" fill="#000"/>
              <rect x="138" y="0" width="1" height="40" fill="#000"/>
              <rect x="142" y="0" width="3" height="40" fill="#000"/>
              <rect x="148" y="0" width="1" height="40" fill="#000"/>
              <rect x="152" y="0" width="2" height="40" fill="#000"/>
              <rect x="158" y="0" width="4" height="40" fill="#000"/>
              <rect x="166" y="0" width="1" height="40" fill="#000"/>
              <rect x="170" y="0" width="3" height="40" fill="#000"/>
              <rect x="176" y="0" width="2" height="40" fill="#000"/>
              <rect x="182" y="0" width="1" height="40" fill="#000"/>
              <rect x="186" y="0" width="4" height="40" fill="#000"/>
              <rect x="194" y="0" width="2" height="40" fill="#000"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

