import { useState } from 'react'
import ListadoPacientes from './components/ListadoPacientes'
import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState({});

  return (
    <div className="w-11/12 mx-auto mt-10">
      <Header />

      <div className='mt-10 md:flex'>

        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          pacienteSeleccionado={pacienteSeleccionado}
          setPacienteSeleccionado={setPacienteSeleccionado}
        />

        <ListadoPacientes
          pacientes={pacientes}
          setPacienteSeleccionado={setPacienteSeleccionado}
        />

      </div>

    </div>
  )
}

export default App
