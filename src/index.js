//Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';

//Estilos
import './index.css';

//Componentes
import Navbar from './components/navbar/navbar.jsx'
import Carrousel from './components/carrousel/carrousel.jsx';
import Main from './components/main/main.jsx'
import Whatsapp from './components/whatsapp/whatsapp.jsx';
import Footer from './components/footer/footer.jsx';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Navbar/> 
     <Carrousel />
     <Main />
     <Whatsapp />
     <Footer />
    
  </React.StrictMode>
);


reportWebVitals();
