import { useState, useEffect } from 'react'
import ListadoPacientes from './components/ListadoPacientes'
import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {

  // El listado de pacientes toma como valor inicial lo que haya en localStorage (de haber datos), o un arreglo vacio.
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState({});

  // Cuando se modifiquen los pacientes, guardar el arreglo como texto en localstorage.
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])


  // Funcion que recibe id del componente paciente a eliminar, pide confirmacion, y lo remueve del listado.
  const eliminarPaciente = (id) => {

    const estaSeguro = confirm('¿Estás seguro que quieres eliminar el registro?');
    if (!estaSeguro) return;

    const listadoActualizado = pacientes.filter(pac => pac.id !== id)

    setPacientes(listadoActualizado);
  }

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
          eliminarPaciente={eliminarPaciente}
        />

      </div>

    </div>
  )
}

export default App
