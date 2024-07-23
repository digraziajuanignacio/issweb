import React from 'react';
import './CSS/home.css';
import 'animate.css';
import FloatingButton from './Components/FloatingButton';
import Carrousel from './Components/Carrousel';
import Image from 'next/image';


export default function Home() {
  return (
<>
    <div className="main-content">
      <section className='header'>
      <Image
        src="/fotoprincipal.jpg" // Ruta relativa a la carpeta public
        alt="Descripción de la imagen"
        layout='fill'
        className='image' // Alto de la imagen
      />
      <div className="text-overlay">
            <div className="row">
          <div className="col-lg-6 mx-3 mx-5 my-5">
            <h1>Instituto Santisimo Sacramento</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque, erat vel suscipit semper, enim libero euismod ligula, at elementum sapien turpis vitae purus. Nulla facilisi. Aliquam erat volutpat. Integer vel turpis nec velit viverra bibendum.</p>
          </div>
          </div>
        </div>
      </section>
    </div>
    {/* <Carrousel/> */}
    <FloatingButton/>



</>
  );
}
