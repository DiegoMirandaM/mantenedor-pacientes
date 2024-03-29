

export default function Paciente({ paciente, setPacienteSeleccionado, eliminarPaciente }) {

    const { nombre, propietario, email, fechaAlta, sintomas, id } = paciente;




    return (
        <>
            <div className=" m-3 px-5 py-7 bg-white rounded-md shadow-md">
                <p className=" font-bold uppercase mb-3 text-gray-600"
                >Nombre: {' '}
                    <span className=" font-normal normal-case">{nombre}</span>
                </p>

                <p className=" font-bold uppercase mb-3 text-gray-600"
                >Propietario: {' '}
                    <span className=" font-normal normal-case">{propietario}</span>
                </p>

                <p className=" font-bold uppercase mb-3 text-gray-600"
                >Email: {' '}
                    <span className=" font-normal normal-case">{email}</span>
                </p>

                <p className=" font-bold uppercase mb-3 text-gray-600"
                >Fecha de alta: {' '}
                    <span className=" font-normal normal-case">{fechaAlta}</span>
                </p>

                <p className=" font-bold uppercase mb-3 text-gray-600"
                >Síntomas: {' '}
                    <span className=" font-normal normal-case">{sintomas}</span>
                </p>

                <div className="flex justify-between mt-5">
                    <button className="bg-indigo-600 px-4 sm:px-10 py-2 rounded-md text-white font-bold uppercase hover:bg-indigo-800 transition-colors"
                        onClick={() => setPacienteSeleccionado(paciente)}
                    >
                        Editar
                    </button>

                    <button className="bg-red-700 px-4 sm:px-10 py-2 rounded-md text-white font-bold uppercase hover:bg-red-800 transition-colors"
                        onClick={ () => eliminarPaciente(id)}
                    >
                        Eliminar
                    </button>
                </div>


            </div>
        </>
    )
};
