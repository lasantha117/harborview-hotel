import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import useScrollAnimation from 'components/useScrollAnimation';

const Home = () => {
  const setAnimatedElement = useScrollAnimation();

  return (
    <div className="page">
      <HeroSlider />

      <section className="welcome">
        <div className="container">
          <h2>Welcome to The Harborview Hotel</h2>
          <p>Nestled along the stunning coastline, The Harborview Hotel offers an unparalleled experience of luxury and comfort. Our elegantly appointed rooms, exceptional amenities, and breathtaking ocean views create the perfect setting for both business and leisure travelers.</p>
          <Link to="/rooms" className="btn btn-primary">Explore Our Rooms</Link>
        </div>
      </section>

      <section className="amenities">
        <div className="container">
          <h2>Featured Amenities</h2>
          <div className="amenities-grid">
            <div className="amenity-card" ref={setAnimatedElement}>
              <h3>Free WiFi</h3>
              <p>High-speed internet access throughout the hotel</p>
            </div>
            <div className="amenity-card" ref={setAnimatedElement}>
              <h3>Pool</h3>
              <p>Outdoor swimming pool with lounge area</p>
            </div>
            <div className="amenity-card" ref={setAnimatedElement}>
              <h3>On-site Restaurant</h3>
              <p>Fine dining restaurant serving local and international cuisine</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>Guest Testimonials</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card" ref={setAnimatedElement}>
              <p>"The Harborview Hotel exceeded all our expectations. The room was immaculate, the staff was incredibly friendly, and the ocean views were breathtaking. We'll definitely be back!"</p>
              <div className="testimonial-author"><strong>Sarah & Michael T.</strong></div>
            </div>
            <div className="testimonial-card" ref={setAnimatedElement}>
              <p>"Perfect location with stunning views and exceptional service. The restaurant was outstanding, and the pool area was so relaxing. Highly recommend for both business and leisure travelers."</p>
              <div className="testimonial-author"><strong>Jennifer L.</strong></div>
            </div>
            <div className="testimonial-card" ref={setAnimatedElement}>
              <p>"A hidden gem! The Harborview Hotel offers luxury without the pretense. Clean, comfortable rooms and the most helpful staff we've ever encountered. Five stars!"</p>
              <div className="testimonial-author"><strong>David R.</strong></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
