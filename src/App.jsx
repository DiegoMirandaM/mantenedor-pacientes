import { useState } from 'react'
import ListadoPacientes from './components/ListadoPacientes'
import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {

  return (
    <div className="w-11/12 mx-auto mt-10">
      <Header />

      <div className='mt-12 md:flex'>
        <Formulario />
        <ListadoPacientes />
      </div>

    </div>
  )
}

export default App
