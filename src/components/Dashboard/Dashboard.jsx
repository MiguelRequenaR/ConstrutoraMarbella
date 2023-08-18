import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import '../../styles/dashboardstyle.css';
import logoCM from '../../assets/images/logoCM.png';

function Dashboard() {
    const [activeLink, setActiveLink] = useState('Dashboard'); // Estado para almacenar el enlace activo
    const [isSidebarClosed, setIsSidebarClosed] = useState(false); 

    const handleLinkClick = (link) => {
        setActiveLink(link); // Actualizar el enlace activo cuando se hace clic
    };

    const handleToggleSidebar = () => {
        setIsSidebarClosed(!isSidebarClosed);
    };

    const sidebarLinks = [
        { label: 'Dashboard', icon: 'ri-dashboard-fill' },
        { label: 'Shop', icon: 'ri-store-2-line' },
        { label: 'Analytics', icon: 'ri-line-chart-line' },
        { label: 'Message', icon: 'ri-chat-1-line' },
        { label: 'Usuarios', icon: 'ri-group-fill' },
        { label: 'Configuración', icon: 'ri-file-settings-fill' },
    ];
    
  return (
    <div>
      <div className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
          <a href="#" className='logo'>
              <i className="ri-building-2-fill"></i>
              <div className='logo-name'><span>Marbella</span></div>
          </a>
          <ul className='side-menu'>
            
  
              {sidebarLinks.map((link, index) => (
                <li key={index} className={activeLink === link.label ? 'active' : ''}>
                        <a href="#" onClick={() => handleLinkClick(link.label)}>
                            <i className={link.icon}></i>
                            {link.label}
                        </a>
                    </li>
                ))}

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
              <i className="ri-menu-2-line" onClick={handleToggleSidebar}></i>
              <form action="#">
                  <div className='form-input'>
                      <input type="search" placeholder='Buscar...' />
                      <button className='search-btn' type='submit'><i className="ri-search-line"></i></button>
                  </div>
              </form>
              <a href="#" className='notif'>
                  <i className="ri-notification-fill"></i>
                  <span className='count'>12</span>
              </a>
              <a href="#" className='profile'>
                  <img src={logoCM} alt="" />
              </a>   
          </nav>

      </div>

    </div>
  );
}

export default Dashboard;     