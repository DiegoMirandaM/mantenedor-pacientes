import { useState, useEffect } from "react";

import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, pacienteSeleccionado, setPacienteSeleccionado }) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fechaAlta, setFechaAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    // Se activa al presionar editar sobre un paciente. Toma sus datos y completa el formulario para su edicion.
    useEffect(() => {
        console.log(Object.keys(pacienteSeleccionado));

        if (Object.keys(pacienteSeleccionado).length == 0) return;

        const { nombre, propietario, email, fechaAlta, sintomas } = pacienteSeleccionado;

        setNombre(nombre);
        setPropietario(propietario)
        setEmail(email);
        setFechaAlta(fechaAlta);
        setSintomas(sintomas);

    }, [pacienteSeleccionado])

    // Genera un ID unico para asignar a cada componente paciente.
    const generarId = () => {
        const fecha = Date.now().toString(36)
        const random = Math.random().toString(36).substring(2);

        return random + fecha;
    }

    const limpiarFormulario = () => {
        setNombre('');
        setPropietario('');
        setEmail('');
        setFechaAlta('');
        setSintomas('');
    }

    const cancelarEdicion = () => {
        limpiarFormulario();
        setPacienteSeleccionado({});
    }

    // Maneja el envio del formulario evitando que queden campos vacios, y creando un nuevo paciente o editandolo, segun corresponda.
    const handleSubmit = (e) => {
        e.preventDefault();

        // Si hay campos vacios, hay un error y se activa el componente Error.
        if ([nombre, propietario, email, fechaAlta, sintomas].includes('')) {
            setError(true);

            return;
        }
        else {
            setError(false);
        }

        // Se toman todos los datos del formulario, y se crea el objeto paciente.
        // El id dependera de si se esta creando (nuevo ID), o editando (mismo ID del paciente seleccionado).
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fechaAlta,
            sintomas
        }

        // Si se ha seleccionado un paciente antes, se esta editando y no creando.
        if (pacienteSeleccionado.id) {
            objetoPaciente.id = pacienteSeleccionado.id;

            // El objeto paciente reemplazara su registro original en un nuevo listado - copia que compondra el listado.
            const nuevoListado = pacientes.map(pac => {
                if (pac.id === objetoPaciente.id) {
                    return objetoPaciente;
                }
                else {
                    return pac;
                }
            })

            // Asignar el listado actualizado, y limpiar el paciente seleccionado posteriormente.
            setPacientes(nuevoListado);
            setPacienteSeleccionado({});
        }
        else {
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        // Resetear el formulario
        limpiarFormulario();
    }



    return (
        <div className=" md:w-1/2 lg:w-2/5 mx-auto">
            <h2 className=" font-black text-3xl text-center">Seguimiento de pacientes</h2>

            <p className=" text-lg mt-5 text-center mb-5 sm:mb-10">
                Añade pacientes y {' '}
                <span className=" text-indigo-600 font-bold">administralos</span>
            </p>


            <form onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-5 px-5 mb-10"
            >

                {error && <Error> <p>Todos los campos son obligatorios</p> </Error>}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block uppercase font-bold text-gray-700">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block uppercase font-bold text-gray-700">
                        Nombre propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block uppercase font-bold text-gray-700">
                        Email propietario
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de contacto del propietario"
                        className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block uppercase font-bold text-gray-700">
                        Fecha de alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                        value={fechaAlta}
                        onChange={(e) => setFechaAlta(e.target.value)}
                    />
                </div>

                <div className="">
                    <label htmlFor="sintomas" className="block uppercase font-bold text-gray-700">
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        type="text"
                        rows={4}
                        placeholder="Describe los sintomas de la mascota"
                        className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />


                    <div className="flex justify-between">
                        <input
                            type="submit"
                            className= {` ${pacienteSeleccionado.id ? 'w-[45%]' : 'w-full'} bg-indigo-600 p-3 mt-4 text-white uppercase font-semibold sm:font-bold rounded-md cursor-pointer transition-all hover:bg-indigo-800`}
                            value={pacienteSeleccionado.id ? 'Actualizar' : 'Agregar Paciente'}
                        />

                        <input
                            type="button"
                            className={` ${pacienteSeleccionado.id ? 'w-[45%]' : 'hidden'} bg-gray-600 p-3 mt-4 text-white uppercase font-semibold sm:font-bold rounded-md cursor-pointer transition-all hover:bg-gray-800`}
                            value={pacienteSeleccionado.id ? 'Cancelar' : ' '}
                            onClick={ () => cancelarEdicion() }
                        />

                    </div>


                </div>

            </form>



        </div>

    )
}

export default Formulario