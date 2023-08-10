import 'remixicon/fonts/remixicon.css';
import '../styles/dashboardstyle.css';
import logoCM from '../assets/images/logoCM.png';

function Dashboard() {
  return (
    <div>
      <div className='sidebar'>
          <a href="#" className='logo'>
              <i className="ri-building-2-fill"></i>
              <div className='logo-name'><span>Constr</span>Marbella</div>
          </a>
          <ul className='side-menu'>
              <li><a href=""><i className="ri-dashboard-fill"></i>Dashboard</a></li>
              <li><a href=""><i className="ri-store-2-line"></i>Shop</a></li>
              <li className='active'><a href=""><i className="ri-line-chart-line"></i>Analytics</a></li>
              <li><a href=""><i className="ri-chat-1-line"></i>Message</a></li>
              <li><a href=""><i className="ri-group-fill"></i>Usuarios</a></li>
              <li><a href=""><i className="ri-file-settings-fill"></i>Configuración</a></li>
          </ul>
          <ul className='side-menu'>
              <li>
                  <a href="" className='logout'>
                      <i className="ri-logout-box-line"></i>
                      Logout
                  </a>
              </li>
          </ul>
      </div>

      <div className='content'>
          <nav>  
              <i className="ri-menu-2-line"></i>
              <form action="#">
                  <div className='form-input'>
                      <input type="search" placeholder='Buscar...' />
                      <button className='search-btn' type='submit'><i className="ri-search-line"></i></button>
                  </div>
              </form>
              <input type="checkbox" id='theme-toggle' hidden/>
              <label htmlFor="theme-toggle" className='theme-toggle' id='theme-toggle'></label>
              <a href="#" className='notif'>
                  <i className="ri-notification-fill"></i>
                  <span className='count'>12</span>
              </a>
              <a href="#" className='profile'>
                  <img src={logoCM} alt="" />
              </a>   
          </nav>
      </div>

      <main>
          <div className='header'>
              <div className='left'>
                  <h1>Dashboard</h1>
                  <ul className='breadcrumb'>
                      <li>
                          <a href="#">
                              Analytics
                          </a>
                      </li>
                      /
                      <li><a href="#" className='active'>Shop</a></li>
                  </ul>
              </div>
              <a href='#' className='report'>
                  <i className="ri-download-cloud-2-line"></i>
                  <span>Descargar CSV</span>
              </a>
          </div>

          <ul className="insights">
            <li>
              <i className="ri-calendar-line"></i>
              <span className='info'>
                  <h3>
                      1074
                  </h3>
                  <p>Orden de Pago</p>
              </span>
            </li>
            <li>
            <i className="ri-slideshow-line"></i>
              <span className='info'>
                  <h3>
                      3000
                  </h3>
                  <p>Visitar Sitio</p>
              </span>
            </li>
            <li>
            <i className="ri-line-chart-line"></i>
              <span className='info'>
                  <h3>
                      14,721
                  </h3>
                  <p>Searches</p>
              </span>
            </li>
            <li>
            <i className="ri-money-dollar-box-line"></i>
              <span className='info'>
                  <h3>
                      $6,450
                  </h3>
                  <p>Ventas totales</p>
              </span>
            </li>
          </ul>

      </main>


    </div>
  );
}

export default Dashboard;   