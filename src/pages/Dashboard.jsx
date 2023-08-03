import 'remixicon/fonts/remixicon.css';
import '../styles/dashboardstyle.css';

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
    </div>
  );
}

export default Dashboard; 