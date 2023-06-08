import { useState, useEffect } from "react";

import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, pacienteSeleccionado }) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fechaAlta, setFechaAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect( () => {
        console.log(Object.keys(pacienteSeleccionado));

        if (Object.keys(pacienteSeleccionado).length == 0) return;

        const {nombre, propietario, email, fechaAlta, sintomas} = pacienteSeleccionado;

        setNombre(nombre);
        setPropietario(propietario)
        setEmail(email);
        setFechaAlta(fechaAlta);
        setSintomas(sintomas);

    }, [pacienteSeleccionado])


    const generarId = () => {
        const fecha = Date.now().toString(36)
        const random = Math.random().toString(36).substring(2);

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, propietario, email, fechaAlta, sintomas].includes('')) {
            setError(true);
            return;
        }
        else {
            setError(false);
        }

        const nuevoPaciente = {
            nombre,
            propietario,
            email,
            fechaAlta,
            sintomas,
            id: generarId()
        }

        setPacientes([...pacientes, nuevoPaciente]);

        // Resetear el formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFechaAlta('');
        setSintomas('');
    }



    return (
        <div className=" md:w-1/2 lg:w-2/5 mx-auto">
            <h2 className=" font-black text-3xl text-center">Seguimiento de pacientes</h2>

            <p className=" text-lg mt-5 text-center mb-10">
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

                    <input
                        type="submit"
                        className=" bg-indigo-600 w-full p-3 mt-4 text-white uppercase font-bold rounded-md cursor-pointer transition-all hover:bg-indigo-800"
                        value="Agregar Paciente"
                    />
                </div>


            </form>



        </div>

    )
}

export default Formulario