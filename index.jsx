import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  redirect
} from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from "./pages/vans/Vans"
import VanDetail, { loader as vansDetailLoader } from "./pages/vans/VanDetail"
import Layout from "./components/Layout"
import Dashboard, {loader as dashboardLoader} from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"
import HostVans, { loader as hostVansLoader } from "./pages/host/HostVans"
import HostLayout from './components/HostLayout';
import HostDetailLayout, { loader as hDLLoader } from './pages/host/HostDetailLayout'
import HostVanDetail from './pages/host/HostVanDetail'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'

import Login, {loader as loginLoader, action as loginAction} from './pages/Login';

import NotFound from './pages/NotFound';
import Error from './components/Error';

import { auth } from './utils';


import "./server"



const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />} >
    <Route index element={<Home />} />
    <Route action={loginAction} loader={loginLoader} path='/login' element={<Login />} />
    <Route path='/about' element={<About />} />
    <Route errorElement={<Error />} loader={vansLoader} path='/vans' element={<Vans />} />
    <Route errorElement={<Error />} loader={vansDetailLoader} path='/vans/:id' element={<VanDetail />} />
    <Route path='/host' element={<HostLayout />} >
      <Route loader={dashboardLoader} index element={<Dashboard />} />
      <Route loader={async ({request}) => await auth(request)} path='income' element={<Income />} />
      <Route errorElement={<Error />} loader={hostVansLoader} path='vans' element={<HostVans />} />
      <Route loader={async ({request}) => await auth(request)} path='reviews' element={<Reviews />} />
      <Route errorElement={<Error />} loader={hDLLoader} path='vans/:id' element={<HostDetailLayout />}>
        <Route loader={async ({request}) => await auth(request)} index element={<HostVanDetail />} />
        <Route loader={async ({request}) => await auth(request)} path='pricing' element={<HostVanPricing />} />
        <Route loader={async ({request}) => await auth(request)} path='photos' element={<HostVanPhotos />} />
      </Route>
    </Route>
    <Route path='*' element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);