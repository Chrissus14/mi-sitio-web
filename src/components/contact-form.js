import React from "react"

export default () => {
  return (
    <form className="mt-16 text-center">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="contact-content"
      >
        Cuentame de esa idea que quieras hacer realidad
        <div className="flex shadow rounded bg-white border p-2">
          <textarea
            className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline resize-none"
            id="contact-content"
            name="contact-content"
          ></textarea>
          <button className="btn">Enviar</button>
        </div>
      </label>
    </form>
  )
}
