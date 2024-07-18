"use client"
import React from 'react'
import '../CSS/form.css'
function InscripcionesForm() {
  return (
    <>
    <div className="form-container">
    <div className="mb-4">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email de Contacto</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" aria-label="Email de Contacto" placeholder="ejemplo@mail.com" maxLength="254"/>
    </div>

    <div className="mb-4">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Nombre y Apellido del Ingresante</label>
        <input class="form-control" type="text" placeholder="Coloque Nombre y Apellido del Alumno a Inscribir" aria-label="Nombre y Apellido del Ingresante" maxLength="100"/>
    </div>

    {/* <div className="mb-3">
    <label htmlFor="exampleDataList" className="form-label"></label>
    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
        <datalist id="datalistOptions">
            <option value="San Francisco" />
            <option value="New York" />
            <option value="Seattle" />
            <option value="Los Angeles" />
            <option value="Chicago" />
        </datalist>
    </div> */}

    <div className="mb-4">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">D.N.I</label>
        <input class="form-control" type="text" placeholder="Coloque DNI sin puntuaciones, EJ: 12345678" aria-label="DNI, Solo Numeros" inputMode="numeric" pattern="\d*" title="Solo se permiten números" maxLength="8" onInput={(e) => {e.target.value = e.target.value.replace(/\D/g, '');}}/>
    </div>

    <div className="mb-4">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">D.N.I del Ingresante</label>
        <input class="form-control" type="text" placeholder="Coloque DNI del Ingresante sin puntuaciones, EJ: 12345678" aria-label="DNI, Solo Numeros" inputMode="numeric" pattern="\d*" title="Solo se permiten números" maxLength="8" onInput={(e) => {e.target.value = e.target.value.replace(/\D/g, '');}}/>
    </div>

    <div className="mb-4">

    <label htmlFor="exampleSelect" className="form-label">Solicitar Vacante Para:</label>
        <select className="form-select" id="exampleSelect">
            <option value="Inicial Cuatro Años">Inicial Cuatro Años</option>
            <option value="Inicial Cinco Años">Inicial Cinco Años</option>
            <option value="1er Grado">1er Grado</option>
            <option value="2do Grado">2do Grado</option>
            <option value="3er Grado">3er Grado</option>
            <option value="4to Grado">4to Grado</option>
            <option value="5to Grado">5to Grado</option>
            <option value="6to Grado">6to Grado</option>
            <option value="7mo Grado">7mo Grado</option>
            <option value="1er Año">1er Año</option>
            <option value="2do Año">2do Año</option>
            <option value="3er Año">3er Año</option>
            <option value="4to Año">4to Año</option>
            <option value="5to Año">5to Año</option>

        </select>
    </div>

    <div class="d-flex justify-content-center mb-4">
        <button type="submit" class="btn btn-primary">Enviar</button>
      </div>

    </div>
    </>
  )
}

export default InscripcionesForm