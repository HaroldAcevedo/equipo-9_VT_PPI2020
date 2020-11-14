import React from "react";
import "./styles.css";

export default function Home() {
  return (
    <div className="fondo">
      <nav className="navegacion">
        <ul className="menu">
          <li>
            <a href="Integrantes"> Integrantes</a>
          </li>
          <li>
            <a className="a"> Ejercicios</a>
            <ul className="submenu">
              <li>
                <a href="EjerciciosNA"> Ejercicios Nivel Amateur</a>
              </li>
              <li>
                <a href="EjerciciosNP"> Ejercicios Nivel Profesional</a>
              </li>
              <li>
                <a href="EjerciciosNL"> Ejercicios Nivel Leyenda</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="./Recetas"> Recetas</a>
          </li>
          <li>
            <a className="a"> Contactos</a>
            <ul className="submenu">
              <li>
                <a href="https://www.facebook.com/harold.acevedomoreno">
                  Harold
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/esteban1247/"> Esteban</a>
              </li>
              <li>
                <a href="https://www.facebook.com/kevin.romerobedoya.1">
                  Kevin
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <br></br>

      <h1 className="titulo">Bienvenidos a nutricion lite</h1>
      <br></br>
      <br></br>
      <h1 className="contenedor">
        Esta pagina esta especificamente desarrollada para aquellas personas
        preocupadas por su salud y que desean llevar una vida más saludable y
        además, propone una serie de ejercicios físicos.
      </h1>
      <h1 className="contenedor">
        Hemos observado que en nuestro barrio las personas no se están
        alimentando correctamente, y menos aún en esta cuarentena, lo que están
        haciendo es comer y comer desproporcionadamente y adicionalmente son muy
        sedentarias, no son conscientes de las consecuencias que esto podría
        traer a su salud
      </h1>
      <h1 className="titulo_p">¿Que necesidad observamos en la poblaciòn?</h1>
      <h1 className="contenedor">
        Los habitantes del "BARRIO CAICEDO" no saben cómo tener una alimentación
        balanceada y se ha elevado el numero de personas que no le prestan
        atención a su salud y comen más o menos de la cantidad de alimento
        necesario para su correcto funcionamiento gracias a la llegada de la
        cuarentena impuesta por culpa del CO-VID 19, por esto buscamos una forma
        de ayudar a las personas a tener una alimentación correcta y no tengan
        problemas en algún momento de sus vidas gracias a sus malos hábitos.
      </h1>
    </div>
  );
}
