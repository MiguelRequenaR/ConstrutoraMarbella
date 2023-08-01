import { useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import './styles/style.css';
import logo from './assets/images/logo.png';

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
    <>
      <header>
        <a href="" className="logo">Marbella</a>

        <ul className='navlist'>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Proyectos en Venta</a></li>
          <li><a href="#">Proyectos Ejecutados</a></li>
          <li><a href="#">Constructora</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>

        <div className="bx bx-menu" ><i className="ri-menu-line"></i></div>

      </header>

      <section className='frontpage'>
        <div className='frontpage-text'>
            <h5>Número 1 en Proyectos de la Región</h5>
            <h4>Grandes obras, Grandes personas</h4>
            <h1>Constructora Marbella S.R.L.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis accusamus provident magnam facilis laboriosam,
              nemo voluptate dignissimos tempora ut. Reprehenderit voluptatum quisquam itaque quas odio sunt ex nulla, recusandae cumque!
            </p>
            <a href="">Contáctenos</a>
            <a href="" className='movie'><i className='ri-play-fill'></i>Mira un video</a>
        </div>

        <div className='logo-img'>
          <img src={logo} alt="" />
        </div>

      </section>

      <div className='icons'>
        <a href="#"><i className='ri-instagram-line'></i></a>
        <a href="#"><i className='ri-youtube-line'></i></a>
        <a href="#"><i className='ri-facebook-line'></i></a>
      </div>

      <div className='scroll-down'>
        <a href="#"><i className='ri-arrow-down-s-fill'></i></a>
      </div>

    </>
  )
}

export default App
