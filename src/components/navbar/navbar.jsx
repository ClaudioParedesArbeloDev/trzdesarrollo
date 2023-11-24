import React, { useState, useEffect } from 'react';
import './navbar.scss';

const NavBar = () => {
 
  const [isNavbarHidden, setNavbarHidden] = useState(false);
  const [isImageHovered, setImageHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      if (typeof window !== 'undefined') {
        const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        setNavbarHidden(prevScrollPos => currentScrollPos > prevScrollPos);
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleImageHover = () => {
    setImageHovered(true);
  };

  const handleImageLeave = () =>{
    setImageHovered(false);
  };

  return (
    <div className={`header ${isNavbarHidden ? 'hidden' : ''}`}>
      <header className='headers'>
        <nav>
        <a href="/">
        <img
              src={isImageHovered ? "/img/logoazul.png" : "/img/logoBlanco.png"}
              alt="Logo Empresa"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
            />
          </a>
        <a href="/emprendimientos"><li>Empresa</li></a>
          <a href="/emprendimientos"><li>Emprendimientos</li></a>
          <a href="/unidades"><li>Unidades</li></a>
          <a href="/news"><li>News</li></a>
          <a href="/contacto"><li>Contacto</li></a>
        </nav>
        <div>
        <a href="/"><img src="/img/ciudad.png" alt="comprar" />Comprar</a>
          
        </div>
      </header>
    </div>
  );
};

export default NavBar;
