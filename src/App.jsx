import { useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'; 
import Home from './components/Home/Home';
import Header from './components/Home/Header';
import Login from './components/Login/Login';
import 'remixicon/fonts/remixicon.css';

function App() {
  useEffect(() => {
    let menu = document.querySelector('.ri-menu-line');
    let navlist = document.querySelector('.navlist');

    if (menu && navlist) {
      menu.onclick = () => {
        menu.classList.toggle('bx-menu');
        navlist.classList.toggle('open');
      };
    }
  }, []);



  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
