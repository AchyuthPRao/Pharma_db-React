import React from 'react'
import './App.css'
import HandleOrders from './components/handlers/HandleOrders.jsx'
import Navver from './components/Navver.jsx'
import Landing from './components/Landing.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HandleDrugs from './components/handlers/HandleDrugs.jsx'
import HandleManufacturers from './components/handlers/HandleManufs.jsx'
import HandleSuppliers from './components/handlers/HandleSuppliers.jsx'
import HandleCustomers from './components/handlers/HandleCustomers.jsx'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/orders" element={ <HandleOrders/> }/>
      <Route path="/nav" element={ <Navver/> }/>
      <Route path="/drugs" element={ <HandleDrugs/> }/>
      <Route path="/manufs" element={ <HandleManufacturers/> }/>
      <Route path="/supply" element={ <HandleSuppliers/> }/>
      <Route path="/cust" element={ <HandleCustomers/> }/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
