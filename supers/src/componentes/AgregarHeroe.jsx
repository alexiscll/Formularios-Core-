import styles from './../css/AgregarHeroe.module.css'

const AgregarHeroe = (props) => {
let contraOculta = ""

for(let letra of props.contraseña){
    contraOculta += '*'
}

    return (
        <div className={styles.AgregarHeroe}>
            <div>
                <img src="https://media.tenor.com/GuBd9dSrXbAAAAAM/heroes.gif" alt="gif" />
            </div>
        <div>
                <h3>{props.nombre} {props.apellido}</h3>
                <p>{props.correo}</p>
                <p>CONTRASEÑA: {contraOculta}</p>
            </div>
        </div>
    )

}



export default AgregarHeroe