// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Link to the home page specific CSS

const Home = () => {
  return (
    <div className="home-page">
      <section className="intro">
        <h1>Welcome to the C Programming Tutorial</h1>
        <p>
          Whether you're new to programming or want to expand your knowledge, this C Programming tutorial is the perfect place to start. Learn the fundamentals of C programming and build a strong foundation for future development.
        </p>
      </section>

      <section className="why-learn">
        <h2>Why Learn C Programming?</h2>
        <div className="benefits">
          <div className="benefit">
            <h3>Foundation for Other Languages</h3>
            <p>C is the foundation of many other programming languages like C++, Java, and Python.</p>
          </div>
          <div className="benefit">
            <h3>Efficient and Fast</h3>
            <p>C is known for its efficiency and performance, which is why it's widely used in system-level programming.</p>
          </div>
          <div className="benefit">
            <h3>Widespread Use in Industry</h3>
            <p>C is used in operating systems, embedded systems, and high-performance applications.</p>
          </div>
        </div>
      </section>

      <section className="course-overview">
        <h2>Course Overview</h2>
        <p>Our C programming course covers everything from basic syntax to advanced concepts. Below are some of the main topics you'll explore:</p>
        <div className="course-links">
          <Link to="/content/intro" className="course-link">Introduction to C</Link>
          <Link to="/content/syntax" className="course-link">C Syntax</Link>
          <Link to="/content/variables" className="course-link">Variables in C</Link>
          <Link to="/content/functions" className="course-link">Functions in C</Link>
          <Link to="/content/loops" className="course-link">Loops in C</Link>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Start Learning?</h2>
        <p>Click the button below to dive into the first lesson and start your C programming journey!</p>
        <Link to="/content/intro" className="cta-button">Get Started</Link>
      </section>
    </div>
  );
};

export default Home;
