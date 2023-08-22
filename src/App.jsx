
// import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import Dashboard from './components/Dashboard/Dashboard'; 
// import Login from './components/Login/Login';
import 'remixicon/fonts/remixicon.css';
import logo from './assets/images/logoCM.png';
import imghome from './assets/images/home1.jpg';
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
                    <li><a href="">Dashboard</a></li>
                </ul>
            </header>
            <div className='content-home'>
                <div className='info-home'>
                    <h2>Constructora <br /> <span>Marbella</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ullam ipsum vel natus atque hic sit, obcaecati tempora 
                        tenetur eius quam voluptatem quasi, nihil tempore repellat 
                        illum quo cum magnam fugiat!
                    </p>
                    <a href="#">Ver más</a>
                </div>
                <div className='content-img'>
                    <img src={imghome} alt="" className='home-img'/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default App
