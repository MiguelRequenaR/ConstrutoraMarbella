import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import '../styles/style.css';

function Header() {
  return (
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
  );
}

export default Header;
