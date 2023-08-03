import { useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'; 
import Home from './pages/Home';
import Header from './components/Header';
import 'remixicon/fonts/remixicon.css';
import './styles/style.css';

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
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </BrowserRouter>
  )
}

export default App
