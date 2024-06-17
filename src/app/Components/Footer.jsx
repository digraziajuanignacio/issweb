import React from 'react'
import '../CSS/home.css'


function Footer() {

  return (

    <>
    <footer className="footer-nav">
    <div data-aos="zoom-in" data-aos-duration="2000" className="row g-0">
        <div className="col-lg-4 col-md-12 col-sm-12 nopadding">
        <h2><i className='bx bxs-user'></i> Participantes</h2>
        <p>Juan Ignacio Di Grazia <br /> Lara Simona <br /> Andrea Simon</p>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 nopadding">
          <h2><i className='bx bx-error'></i> Redes </h2>
          <p>Instagram: @santisimosacramento</p>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 nopadding">
          <h2><i className='bx bx-copyright' ></i> Copyright</h2>
          <p>Todos los derechos sobre esta Pagina Web <br/> las tiene Juan Ignacio Di Grazia y Lara Simona.</p>
        </div>
    </div>
    </footer>
    </>

  )
}

export default Footer