import React from 'react'



function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white" data-bs-theme="white">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Santisimo Sacramento</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/quienes-somos">Quienes Somos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/actividades">Actividades</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/inicial-primaria">Inicial Primaria</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/secundaria">Secundaria</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/inscripciones-24">Inscripciones 2024</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar