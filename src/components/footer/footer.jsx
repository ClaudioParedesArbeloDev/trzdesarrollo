import React, { useState, useEffect } from 'react';

import './footer.scss'

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); 

    return () => clearInterval(interval);
  }, []);


    return(
        <footer>
            <div className='footerUp'>
                <div className= 'leftSide'>
                         <a href="home"><img src="/img/logoBlanco.png" alt="Logo Empresa" /></a>
                         <div className='socialMedia'>
                             <a href="https://web.facebook.com/TRZGestionInmobiliaria/?_rdc=1&_rdr" target="blank"><i class="fa-brands fa-square-facebook"></i></a>
                             <a href="https://instagram.com/trz.gi?igshid=MzMyNGUyNmU2YQ==" target="blank"><i class="fa-brands fa-square-instagram"></i></a>
                             <a href="https://wa.me/+5493413181379" target="blank"><i class="fa-brands fa-square-whatsapp"></i></a>
                         </div>
                </div>
                <div className='contact'>
                     <h3 className='h3'>Contacto</h3>
                     <div className='direction'>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Av Madres Plaza 25 de Mayo 3020 piso 11 oficina 4</p>
                        <p>Rosario - Argentina - CP2000</p>
                     </div>
                     <div className='mail'>
                         <i className="fa-solid fa-envelope"></i><p>comercial@trz.com.ar</p>
                     </div>
                     <div className='phone'>
                         <i className="fa-solid fa-phone"></i><p>+5493417525735</p>
                     </div>
                </div>
                <div className='links'>
                    <h3>Links</h3>
                    <i className="fa-solid fa-chevron-right"></i><a href="empresa"><p>Empresa</p></a>
                    <i className="fa-solid fa-chevron-right"></i><a href="emprendimientos"><p>Emprendimientos</p></a>
                    <i className="fa-solid fa-chevron-right"></i><a href="unidades"><p>Unidades</p></a>
                    <i className="fa-solid fa-chevron-right"></i><a href="news"><p>News</p></a>
                    <i className="fa-solid fa-chevron-right"></i><a href="contacto"><p>Contacto</p></a>
                </div>
            </div>
            <div className='footerDown'>
            <p>Desarrollo Web C P A &copy; {currentYear}</p>
            </div>
        </footer>
    )
}

export default Footer