// About.js
import React from 'react';
import './About.css'; // Importing the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About this Tutorial</h1>
      
      <section className="about-section">
        <h2 className="section-title">Introduction</h2>
        <p className="section-description">
          Welcome to this C Programming tutorial! This course is designed for beginners who wish to learn the fundamentals of C programming from scratch. Whether you're new to programming or just need a refresher, this tutorial will help you grasp key concepts and start writing your own programs in C.
        </p>
      </section>
      
      <section className="about-section">
        <h2 className="section-title">Course Objectives</h2>
        <ul className="objectives-list">
          <li>Understand the basics of the C programming language.</li>
          <li>Learn how to write, compile, and debug C programs.</li>
          <li>Master important concepts like variables, loops, and functions.</li>
          <li>Explore memory management and pointers in C.</li>
          <li>Write efficient, modular programs using C's features.</li>
        </ul>
      </section>
      
      <section className="about-section">
        <h2 className="section-title">Why Learn C Programming?</h2>
        <p className="section-description">
          C programming is the foundation for many other programming languages like C++, Python, Java, and even JavaScript. It gives you a deep understanding of how computers work at a low level, including memory management and data manipulation. C is widely used in systems programming, embedded systems, game development, and high-performance applications.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-title">Course Structure</h2>
        <p className="section-description">
          This tutorial is divided into easy-to-follow chapters, each focused on a specific concept or topic. Here's a brief overview of the course structure:
        </p>
        <ul className="course-structure-list">
          <li>Chapter 1: Introduction to C Programming</li>
          <li>Chapter 2: Variables, Data Types, and Operators</li>
          <li>Chapter 3: Control Flow - If, Else, Switch</li>
          <li>Chapter 4: Functions and Arrays</li>
          <li>Chapter 5: Pointers and Memory Management</li>
          <li>Chapter 6: File Handling and Structures</li>
          <li>Chapter 7: Advanced C Concepts (optional)</li>
        </ul>
      </section>

      <section className="about-section">
        <h2 className="section-title">Instructor Information</h2>
        <p className="section-description">
          This tutorial is created by an experienced programmer and educator who has a passion for teaching the fundamentals of computer science. With years of practical experience in C programming and systems development, the instructor aims to make C programming accessible to everyone, regardless of prior programming experience.
        </p>
      </section>

      <section className="about-section">
        <h2 className="section-title">Get Started</h2>
        <p className="section-description">
          Ready to dive in? Head over to the <strong><a href="/content/intro">Introduction</a></strong> chapter to begin your C programming journey. Let’s start coding!
        </p>
      </section>
    </div>
  );
};

export default About;
