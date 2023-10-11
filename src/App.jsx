
// import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import Dashboard from './components/Dashboard/Dashboard'; 
// import Login from './components/Login/Login';
import 'remixicon/fonts/remixicon.css';
import logo from './assets/images/logoCM.png';
import './styles/home.css';

function App() {
 
  return (
    <div>
        <section className='front-page'>
            <header className='header-home'>
                <a href="" className="logo"><img src={logo} alt="" /></a>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Proyectos</a></li>
                    <li><a href="">Contacto</a></li>
                    <li><a href="">Iniciar Sesión</a></li>

                      <li><a href="/src/components/Dashboard/Dashboard.jsx">Dashboard</a></li>                   

                </ul>
            </header>
        </section>
    </div>
  )
}

export default App
