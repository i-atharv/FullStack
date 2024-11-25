// Content.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Content = () => {
  const { section } = useParams(); // Get the section name from the URL

  let content;

  switch (section) {
    case 'intro':
      content = (
        <>
          <h1>Introduction to C Programming</h1>
          <p>C is a high-level, general-purpose programming language...</p>
        </>
      );
      break;
    case 'syntax':
      content = (
        <>
          <h1>C Programming Syntax</h1>
          <p>C programs consist of functions. Here's an example of a basic C program...</p>
          <pre>
            #include &lt;stdio.h&gt;
            int main() 
                printf("Hello, World!"); 
                return 0; 
            
          </pre>
        </>
      );
      break;
    case 'variables':
      content = (
        <>
          <h1>Variables in C</h1>
          <p>Variables in C are declared with a data type. For example:</p>
          <pre>
            int a = 5;
            float b = 3.14;
            char c = 'A';
          </pre>
        </>
      );
      break;
    case 'functions':
      content = (
        <>
          <h1>Functions in C</h1>
          <p>Functions allow you to divide your program into smaller, modular chunks...</p>
        </>
      );
      break;
    case 'loops':
      content = (
        <>
          <h1>Loops in C</h1>
          <p>Loops allow you to repeat a block of code a certain number of times...</p>
          <pre>
            for (int i = 0; i10; i++)  
                printf("%d\n", i); 
            
          </pre>
        </>
      );
      break;
    default:
      content = <p>Please select a section from the sidebar to learn more about C programming.</p>;
      break;
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default Content;
