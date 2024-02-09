import { useState } from 'react'

import './App.css'
import ListEmployeComponent from './Component/ListEmployeComponent'
import Header from './Component/Header'
import FooterC from './Component/FooterC'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './Component/EmployeeComponent'

function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<ListEmployeComponent/>}></Route>

      <Route path='/employees' element={<ListEmployeComponent/>}></Route>

      <Route path='/add-employee' element={<EmployeeComponent/>}></Route>

      <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
    </Routes>
     
      <FooterC></FooterC>

      </BrowserRouter>
     
    </>
  )
}

export default App
