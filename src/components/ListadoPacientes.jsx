import { useEffect } from "react"
import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPacienteSeleccionado }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">

            {
                pacientes.length > 0 ? (
                    <>
                        <h2 className=" font-black text-3xl text-center">Listado de pacientes</h2>
                        <p className="text-center mb-10 text-xl mt-5">
                            Administra tus {' '}
                            <span className="text-indigo-600 font-bold text-xl">
                                pacientes y sus datos
                            </span>
                        </p>

                        {pacientes.map(paciente => {
                            return (
                                <Paciente
                                    key={paciente.id}
                                    paciente={paciente}
                                    setPacienteSeleccionado={setPacienteSeleccionado}
                                />
                            )
                        })}
                    </>
                ) : (
                    <>
                        <h2 className=" font-black text-3xl text-center">Todavía no hay pacientes</h2>
                        <p className="text-center mb-10 text-xl mt-5">
                            Agrega pacientes y aparecerán {' '}
                            <span className="text-indigo-600 font-bold text-xl">
                                aquí abajo
                            </span>
                        </p>
                    </>
                )
            }




        </div>

    )

}

export default ListadoPacientes