import '../../styles/login.css';

function Login() {
  return (
    <div>
        <div className="login">
            <h2>Inicio de Sesión</h2>
            <h3>Constructora Marbella</h3>

            <form action="" className="formulario">
                <input type="text" placeholder="Usuario"/>
                <input type="password" placeholder="Contraseña" />
                <a href="#">¿Olvido su contraseña?</a>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    </div>
  )
}

export default Login;