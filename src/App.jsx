import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Dashboard from './pages/Dashboard'; 
import Home from './pages/Home';
import 'remixicon/fonts/remixicon.css';
import './styles/style.css';

function App() {
  useEffect(() => {
    let menu = document.querySelector('.ri-menu-line');
    let navlist = document.querySelector('.navlist');

    menu.onclick = () => {
      menu.classList.toggle('bx-menu');
      navlist.classList.toggle('open');
    };
  }, []);


  return (
    <BrowserRouter>

       <header>
          <a href="" className="logo">Marbella</a>
          
          <ul className='navlist'>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Proyectos en Venta</a></li>
            <li><a href="#">Proyectos Ejecutados</a></li>
            <Link to="/dashboard"><li>Dashboard</li></Link> 
            <li><a href="#">Contacto</a></li>
          </ul>

          <div className="bx bx-menu" ><i className="ri-menu-line"></i></div>
        </header>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>
  )
}

export default App
