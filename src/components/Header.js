import React from 'react';
import './Header.css';
import coverPic from '../assets/cover-pic.avif'; // Update with your actual path
import profilePic from '../assets/profile-pic.jpg'; // Update with your actual path

const Header = () => {
  return (
    <header className="header">
      <img src={coverPic} alt="Cover" className="cover-pic" />
      <div className="profile-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Siva Prakash K</h1>
        <nav className="header-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#internship">Internship</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
