import { useState, useEffect } from "react";
import './NavBar.css';

const NavBar = () => {
    const [activeNav, setActiveNav] = useState('#');

    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('section');
          const header = document.querySelector('header');
          const scrollPosition = window.scrollY || document.documentElement.scrollTop;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
    
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const sectionId = `#${section.id}`;
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
    
            if (
              scrollPosition >= sectionOffsetTop - windowHeight * 0.7 &&
              (scrollPosition < sectionOffsetTop + sectionHeight ||
                scrollPosition >= documentHeight - windowHeight)
            ) {
              setActiveNav(sectionId);
              break;
            }
          }
    
          if (
            scrollPosition < header.offsetHeight - 300
          ) {
            setActiveNav('#');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    

    return ( // Navigation bar section with buttons to move between the portfolio sections
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
            <a href="#profile" onClick={() => setActiveNav('#profile')} className={activeNav === '#profile' ? 'active' : ''}>Profile</a>
            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}>Skills</a>
            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>Projects</a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>
        </nav>
    )
}

export default NavBar