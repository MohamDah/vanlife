import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link className='nav--logo' to="/">#VANLIFE</Link>
          <nav className="nav">
            <Link className='nav--about' to="/about">About</Link>
            <Link className='nav--vans'>Vans</Link>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <footer>
          <p>Ⓒ 2022 #VANLIFE</p>
        </footer>
      </BrowserRouter>
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);