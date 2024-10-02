import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/vans/Home"
import About from "./pages/vans/About"
import Vans from "./pages/vans/Vans"
import VanDetail from "./pages/vans/VanDetail"
import Layout from "./components/Layout"
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"
import HostVans from "./pages/host/HostVans"
import HostLayout from './components/HostLayout';
import HostDetailLayout from './components/HostDetailLayout'
import HostVanDetail from './pages/host/HostVanDetail'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'


import "./server"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/vans' element={<Vans />} />
            <Route path='/vans/:id' element={<VanDetail />} />
            <Route path='/host' element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='vans' element={<HostVans />} />
              <Route path='vans/:id' element={<HostDetailLayout />}>
                <Route index element={<HostVanDetail />} />
                <Route path='pricing' element={<HostVanPricing />} />
                <Route path='photos' element={<HostVanPhotos />} />
              </Route>
              <Route path='reviews' element={<Reviews />} />

            </Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);