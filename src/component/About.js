// About.js
import React from 'react';

const About = ({ mode }) => {
  return (
    <div className="container my-4">
      <h2 className={`text-${mode === 'light' ? 'dark' : 'light'}`}>About NewsMonkey</h2>
      <p className={`text-${mode === 'light' ? 'dark' : 'light'}`}>
        NewsMonkey is a news web application that brings you the latest headlines from reliable sources using the NewsAPI.
        This app includes features like pagination, dark/light mode, and real-time updates from BBC News.
      </p>
    </div>
  );
};

export default About;
