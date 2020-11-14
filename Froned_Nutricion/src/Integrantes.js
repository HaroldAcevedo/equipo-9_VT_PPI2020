import React from "react";
import imagenes from "./imagenes";

export default function Integrantes() {
  return (
    <div className="fondo">
      <br />
      <h1 className="titulo">Integrantes</h1>
      <br />
      <br />
      <br />

      <div className="contenedor">
        <img src={imagenes.img2} />
        <h1>Harold Acevedo</h1>
      </div>

      <div className="contenedor">
        <img src={imagenes.img3} />
        <h1>Esteban Jaramillo</h1>
      </div>

      <div className="contenedor">
        <img src={imagenes.img4} />
        <h1>Kevin Romero</h1>
      </div>
    </div>
  );
}
