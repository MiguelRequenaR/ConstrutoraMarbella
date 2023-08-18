import user from '../../assets/images/usuario.png';
import 'remixicon/fonts/remixicon.css';
import '../../styles/dashboardstyle.css';
import Dashboard from './Dashboard';

function DashboardContent() {
  return (
    <div>
        <Dashboard/>

        <main>
            <div className='header1'>
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

            <ul className="iconos1">
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
                    <p>Ganancias</p>
                </span>
                </li>
            </ul>

            <div className='bottom-data'>
                <div className='orders'>
                    <div className='header1'>
                        <i className="ri-list-ordered"></i>
                        <h3>Proyectos Recientes</h3>
                        <i className="ri-filter-3-line"></i>
                        <i className="ri-search-line"></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Usuarios</th>
                                <th>Fecha</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={user} alt="" />
                                    <p>Miguel Angel</p>
                                </td>
                                <td>20-09-2023</td>
                                <td>
                                    <span className='estado completado'>Completado</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={user} alt="" />
                                    <p>Miguel</p>
                                </td>
                                <td>20-09-2023</td>
                                <td>
                                    <span className='estado pendiente'>Pendiente</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={user} alt="" />
                                    <p>Angel</p>
                                </td>
                                <td>20-09-2023</td>
                                <td>
                                    <span className='estado proceso'>En proceso</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="alert">
                    <div className="header1">
                        <i className="ri-sticky-note-2-line"></i>
                        <h3>Recordatorio</h3>
                        <i className="ri-filter-3-line"></i> 
                        <i className="ri-add-box-line"></i>
                    </div>
                    <ul className='task-list'>
                        <li className='completado'>
                            <div className='task-title'>
                                <i className="ri-chat-check-line"></i>
                                <p>Comenzar una reunión</p>
                            </div>
                            <i className="ri-list-unordered"></i>
                        </li> 
                        <li className='completado'>
                            <div className='task-title'>
                                <i className="ri-chat-check-line"></i>
                                <p>Analizar Proyecto</p>
                            </div>
                            <i className="ri-list-unordered"></i>
                        </li>
                        <li className='no-completado'>
                            <div className='task-title'>
                                <i className="ri-close-circle-line"></i>
                                <p>Verificar Proyecto</p>
                            </div>
                            <i className="ri-list-unordered"></i>
                        </li> 
                    </ul>
                    
                </div>

            </div>
        </main>
    </div>
  )
}

export default DashboardContent