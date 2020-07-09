import React from "react"
import illustration from "../img/undraw_accept_tasks_po1c.svg"
import Form from "./contact-form.js"

export default () => {
  return (
    <header className="bg-indigo-200">
      <div className="container mx-auto p-12 max-w-4xl">
        <div className="flex justify-center items-center">
          <div className="flex-1">
            <h1 className="font-bold text-6xl text-indigo-700">
              ¡Hola!, Soy Christian
            </h1>
            <p className="text-xl font-light">
              Desarrollador FullStack JavaScript
            </p>
          </div>
          <img
            src={illustration}
            alt="imagen de encabezado"
            style={{ height: "300px" }}
          />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </header>
  )
}
