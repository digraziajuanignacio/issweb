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
            </div>
    <Carrousel/>
    <FloatingButton/>


</>
  );
}
