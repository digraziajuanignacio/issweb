"use client";
import React from "react";
import "../CSS/form.css";
import { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [dniAlumno, setDniAlumno] = useState("");
  const [dniRespo, setDniRespo] = useState("");
  const [solicitudVacante, setSolicitudVacante] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Dni Responsable: ", dniRespo);
    console.log("Dni Alumno: ", dniAlumno);
    console.log("Solicitud de Vacante: ", solicitudVacante);

    const res = await fetch("api/form", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        dniAlumno,
        dniRespo,
        solicitudVacante,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setDniRespo("");
      setDniAlumno("");
      setSolicitudVacante("");
    }
  };

  return (
    <>
  

      <div className="form-container">
      <form
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email de Contacto
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            aria-label="Email de Contacto"
            placeholder="ejemplo@mail.com"
            maxLength="254"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Nombre y Apellido del Ingresante
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Coloque Nombre y Apellido del Alumno a Inscribir"
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            aria-label="Nombre y Apellido del Ingresante"
            maxLength="100"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            D.N.I
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Coloque DNI sin puntuaciones, EJ: 12345678"
            aria-label="DNI, Solo Numeros"
            inputMode="numeric"
            pattern="\d*"
            title="Solo se permiten números"
            maxLength="8"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\D/g, "");
            }}
            onChange={(e) => setDniRespo(e.target.value)}
            value={dniRespo}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            D.N.I del Ingresante
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Coloque DNI del Ingresante sin puntuaciones, EJ: 12345678"
            aria-label="DNI, Solo Numeros"
            inputMode="numeric"
            pattern="\d*"
            title="Solo se permiten números"
            maxLength="8"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\D/g, "");
            }}
            onChange={(e) => setDniAlumno(e.target.value)}
            value={dniAlumno}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="exampleSelect" className="form-label">
            Solicitar Vacante Para:
          </label>
          <select
            className="form-select"
            id="exampleSelect"
            value={solicitudVacante}
            onChange={(e) => setSolicitudVacante(e.target.value)}
            required
          >
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

        <div className="d-flex justify-content-center mb-4">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          </div>
        </form>

          <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => (
            <div class="alert alert-success" role="alert">
                {e}
            </div>
          ))}
      </div>
        </div>
    </>
  );
}
