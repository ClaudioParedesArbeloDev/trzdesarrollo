import React, { useState, useEffect } from 'react';
import './navbar.scss';

const NavBar = () => {
  const [isNavbarHidden, setNavbarHidden] = useState(false);

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

  return (
    <div className={`header ${isNavbarHidden ? 'hidden' : ''}`}>
      <header className='headers'>
        <a href="/"><img src="/img/logoBlanco.png" alt="Logo Empresa" /></a>
        <nav>
          <a href="/empresa"><li>Empresa</li></a>
          <a href="/emprendimientos"><li>Emprendimientos</li></a>
          <a href="/unidades"><li>Unidades</li></a>
          <a href="/news"><li>News</li></a>
          <a href="/contacto"><li>Contacto</li></a>
        </nav>
        <div>
          <a href="/login">
            <p>COMPRAR</p>
            <i className="fa-regular fa-building"></i>
          </a>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
