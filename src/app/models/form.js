import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Se requiere el nombre y apellido."],
    trim: true,
    minLength: [2, "El Nombre debe ser mas largo que 50 caracteres."],
    maxLength: [100, "El nombre no puede sobrepasar los 100 caracteres."],
  },

  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "El Mail es Invalido."],
  },

  dniAlumno: {
    type: String,
    required: [true, "Se requiere el DNI del Alumno."],
  },

  dniRespo: {
    type: String,
    required: [true, "Se requiere el DNI del Responsable."],
  },

  solicitudVacante: {
    type: String,
    required: [true, "Se requiere la solicitud al ingreso"],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;