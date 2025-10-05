import { useState } from 'react'
import styles from './../css/RegistroHeroe.module.css'


const RegistroHeroe  = ({agregarHeroe}) => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [correo, setCorreo] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [confirmarContraseña, setConfirmarContraseña] = useState("")
    const [errores, setErrores] = useState({nombre: "", apellido: "", correo: "", contraseña: "",
    })



   

    const registrarHereo = (event) => {
        event.preventDefault()

        
    let nombreValidator = "";
    let apellidoValidator = "";
    let correoValidator = "";
    let contraseñaValidator = "";


    //Validaciones

    if (nombre.length<4){
        nombreValidator = "El nombre debe tener por lomenos 4 caracteres";
    }
    if (apellido.length<4){
        apellidoValidator = "El apellido debe tener por lomenos 4 caracteres";
    }
    if (correo.length<10){
        correoValidator = "El correo debe tener por lomenos 10 caracteres";
    }

    if(contraseña.length<12){
        contraseñaValidator = "La contraseña debe tener por lo menos 8 caracteres"
    }else if(contraseña!==confirmarContraseña){
        contraseñaValidator = "Las contraseñas deben ser iguales"
    }
   

    if(nombre.length < 4 || contraseña!==confirmarContraseña || contraseña.length<12 || correo.length<10) {
            setErrores({ "nombre": nombreValidator, "apellido": apellidoValidator, "correo": correoValidator, "contraseña": contraseñaValidator })
            return;
        }

        agregarHeroe(nombre, apellido, correo, contraseña)


        setNombre("")
        setApellido("")
        setCorreo("")
        setContraseña("")
        setConfirmarContraseña("")
        setErrores({nombre: "", apellido: "", correo: "", contraseña: "", confirmarContraseña: ""
    })
    }

    return (
        
        <form className={styles.RegistroHeroe} onSubmit={registrarHereo}>
            <h2>Registro SuperHéroe</h2>
            <div className={styles.campo}>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" name="nombre" id="nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                {errores.nombre? <p className={styles.campoErrado}>{errores.nombre}</p> : ""}
            </div>
            <div className={styles.campo}>
                <label htmlFor="apellido">Apellido: </label>
                <input type="text" name="apellido" id="apellido" required value={apellido} onChange={(e) => setApellido(e.target.value)}/>
                {errores.apellido? <p className={styles.campoErrado}>{errores.apellido}</p> : ""}
            </div>
            <div className={styles.campo}>
                <label htmlFor="correo">Correo Electronico: </label> 
                <input type="email" name="correo" id="correo" required value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                {errores.correo? <p className={styles.campoErrado}>{errores.correo}</p> : ""}
            </div>
            <div className={styles.campo}>
                <label htmlFor="contraseña">Contraseña: </label>
                <input type="password" name="contraseña" id="contraseña" required value={contraseña} onChange={(e) => setContraseña(e.target.value)}/>
            </div>
            <div className={styles.campo}>
                <label htmlFor="conformar">Confirmar Contraseña: </label>
                <input type="password" name="confirmarContraseña" id="confirmar" required value={confirmarContraseña} onChange={(e) => setConfirmarContraseña(e.target.value)}/>
                {errores.contraseña? <p className={styles.campoErrado}>{errores.contraseña}</p> : ""}
            </div>
            <button className={styles.botonRegistrar}>REGISTRAR</button>
        </form>
    )
}


export default RegistroHeroe