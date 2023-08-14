import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import '../../styles/style.css';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // No renderizar el header en la ruta "/dashboard"
  if (location.pathname === '/dashboard') {
    return null;
  }else if (location.pathname === '/login') {
    return null;
  }

  return (
    <header className='navheader'>
      <a href="" className="logo">Marbella</a>
      
      <ul className={`navlist ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Proyectos en Venta</a></li>
        <li><a href="#">Proyectos Ejecutados</a></li>
        <li><a href="#">Contacto</a></li>
        <Link to="/login"><li>Iniciar Sesión</li></Link> 
        <Link to="/dashboard"><li>Dashboard</li></Link> 
      </ul>

      <div className={`bx ${isMenuOpen ? 'bx-menu' : ''}`} onClick={handleMenuClick}>
        <i className="ri-menu-line"></i>
      </div>
    </header>
  );
}

export default Header;
