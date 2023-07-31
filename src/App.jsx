import { useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import './styles/style.css';
import logo from './assets/images/logo.png';
import ScrollReveal from 'scrollreveal';

function App() {
  useEffect(() => {
    let menu = document.querySelector('.ri-menu-line');
    let navlist = document.querySelector('.navlist');

    menu.onclick = () => {
      menu.classList.toggle('bx-menu');
      navlist.classList.toggle('open');
    };
  }, []);

  const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
  });
  sr.reveal('.frontpage-text', {delay:200, origin:'top'});

  return (
    <>
      <header>
        <a href="" className="logo">Marbella</a>

        <ul className='navlist'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Clans</a></li>
          <li><a href="#">Town hall</a></li>
          <li><a href="#">Troops</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="bx bx-menu" ><i className="ri-menu-line"></i></div>

      </header>

      <section className='frontpage'>
        <div className='frontpage-text'>
            <h5>#2 Trending</h5>
            <h4>Constructora</h4>
            <h1>Constructora Marbella</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis accusamus provident magnam facilis laboriosam,
              nemo voluptate dignissimos tempora ut. Reprehenderit voluptatum quisquam itaque quas odio sunt ex nulla, recusandae cumque!
            </p>
            <a href="">Compare</a>
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
