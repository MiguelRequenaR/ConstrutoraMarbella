import 'remixicon/fonts/remixicon.css';
import '../styles/style.css';
import logo from '../assets/images/logo.png';

function Home() {
  return (
    <div>
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
    </div>
  )
}

export default Home