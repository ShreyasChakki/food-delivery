import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1>About DoorStep</h1>
      <p>Welcome to DoorStep - Your favorite food delivery app!</p>
      
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2020, DoorStep started with a simple mission: to connect people with the best local restaurants and deliver delicious food right to their doorstep. What began as a small startup has now grown into one of the most trusted food delivery services in the country.
        </p>
        <p>
          Our journey has been fueled by our passion for great food and exceptional service. We believe that everyone deserves access to their favorite meals without compromising on quality or convenience.
        </p>
      </section>
      
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At DoorStep, our mission is to transform the way people experience food delivery. We strive to create a seamless connection between hungry customers and their favorite local restaurants, ensuring that every meal arrives fresh, hot, and exactly as ordered.
        </p>
      </section>
      
      <section className="about-section">
        <h2>Why Choose DoorStep?</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">🚀</div>
            <h3>Lightning Fast Delivery</h3>
            <p>We pride ourselves on our quick delivery times without compromising on the quality of service.</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">🍽️</div>
            <h3>Diverse Restaurant Selection</h3>
            <p>From local favorites to national chains, we've partnered with thousands of restaurants to bring you the food you love.</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">💯</div>
            <h3>Quality Assurance</h3>
            <p>We maintain strict standards for our restaurant partners to ensure you always get the best food experience.</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">💪</div>
            <h3>Reliable Service</h3>
            <p>Come rain or shine, we deliver your food on time and in perfect condition.</p>
          </div>
        </div>
      </section>
      
      <section className="about-section">
        <h2>Our Team</h2>
        <p>
          Behind DoorStep is a dedicated team of food enthusiasts, tech experts, and customer service professionals who work tirelessly to make your food delivery experience exceptional. From our delivery partners who brave all weather conditions to our tech team ensuring our app runs smoothly, everyone at DoorStep is committed to serving you better.
        </p>
      </section>
      
      <section className="about-section">
        <h2>Join Our Journey</h2>
        <p>
          We're constantly growing and looking for ways to improve our service. Your feedback helps us get better every day. Thank you for choosing DoorStep for your food delivery needs!
        </p>
      </section>
    </div>
  );
};

export default About;