import React from 'react';
import './CSS/home.css';
import 'animate.css';
import FloatingButton from './Components/FloatingButton';
import Carrousel from './Components/Carrousel';



export default function Home() {
  return (
<>
<div className="info-header">
              <div className="row g-0 pt-5">
                <div className="col-lg-12 col-md-12 col-sm-12 prueba1">
                  <h1 className="animate__animated animate__fadeInDown animate__slow">Santisimo Sacramento</h1>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 prueba">
                  <h3 className="animate__animated animate__fadeInDown animate__slow">Paz y Bien</h3>
                </div>
              </div>
              <div className="wave">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    {/* Definición del gradiente */}
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#24243e', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#302b63', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#0f0c29', stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    {/* Uso del gradiente en el path */}
    <path
      fill="url(#grad1)"
      fillOpacity="1"
      d="M0,64L48,96C96,128,192,192,288,186.7C384,181,480,107,576,80C672,53,768,75,864,112C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
  </svg>
              </div>
</div>
    <Carrousel/>
    <FloatingButton/>


</>
  );
}
