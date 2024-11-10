import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/form";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Cors from "cors";

const cors = Cors({
  methods: ["GET", "POST"],
  origin: "https://issweb.onrender.com",
});
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export async function POST(req) {
  const { fullname, email, dniAlumno, dniRespo, solicitudVacante } =
    await req.json();

  try {
    await connectDB();
    await Contact.create({
      fullname,
      email,
      dniAlumno,
      dniRespo,
      solicitudVacante,
    });

    return NextResponse.json({
      msg: ["Inscripción enviada correctamente."],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({
        msg: ["La inscripción no se ha podido enviar correctamente."],
      });
    }
  }
}
