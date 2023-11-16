//Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';

//Estilos
import './index.css';

//Componentes
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Navbar />
      <Footer />
  </React.StrictMode>
);


reportWebVitals();
