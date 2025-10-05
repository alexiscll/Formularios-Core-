import { useState } from 'react'

import './App.css'
import RegistroHeroe from './componentes/RegistroHeroe'
import AgregarHeroe from './componentes/AgregarHeroe'


function App() {



  const [listaSuperHereos, setListaSuperHereos] = useState([])
  const [encabezado, setEncabezado] = useState("")


  const agregarHeroe = (nombre, apellido, correo, contraseña) => {
    setListaSuperHereos([...listaSuperHereos, {nombre, apellido, correo, contraseña }])
    setEncabezado(`¡${nombre} ${apellido} fue agregado con éxito!`)
  }


  return (
    <>
    <h1>Bienvenido a la Liga de Superhéroes</h1>
    <img src="https://t4.ftcdn.net/jpg/06/00/71/39/360_F_600713911_ItK5Nj9WqBjJkRUVTLmmlhML6is9eaLg.jpg" alt="supers" />
    <br />
    <br />
    <hr />
    < RegistroHeroe agregarHeroe={agregarHeroe}/>
    <h3 style={{color: "green"}}>{encabezado}</h3>
    <h3>SUPERHÉROES</h3>
    <div className="contenedorHeroes">
      

    {listaSuperHereos.map(heroe => < AgregarHeroe nombre={heroe.nombre} apellido={heroe.apellido} correo={heroe.correo} contraseña={heroe.contraseña}/>)}
    </div>
    </>
  )
}

export default App
