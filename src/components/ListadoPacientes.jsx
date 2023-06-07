const ListadoPacientes = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5">
            <h2 className=" font-black text-3xl text-center">Listado de pacientes</h2>

            <p className="text-center mb-10 text-xl mt-5">
                Administra tus {' '}
                <span className="text-indigo-600 font-bold text-xl">
                    pacientes y citas
                </span>
            </p>

            <div className=" m-3 px-5 py-7 bg-white rounded-md shadow-md">
                <p className=" font-bold uppercase mb-3 text-gray-600"
                >Nombre: {' '}
                    <span className=" font-normal normal-case">Hook</span>
                </p>

                <p className=" font-bold uppercase mb-3 text-gray-600"
                >Propietario: {' '}
                    <span className=" font-normal normal-case">Diego</span>
                </p>

                <p className=" font-bold uppercase mb-3 text-gray-600"
                >Email: {' '}
                    <span className=" font-normal normal-case">correo@correo.com</span>
                </p>

                <p className=" font-bold uppercase mb-3 text-gray-600"
                >Síntomas: {' '}
                    <span className=" font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga alias cum maxime nobis? Perferendis suscipit laboriosam magni, tempore sit, eveniet illum consequatur, cumque similique impedit asperiores delectus molestias atque.</span>
                </p>

                <div className="flex justify-between mt-5">
                    <button className="bg-indigo-600 px-10 py-2 rounded-md text-white font-bold uppercase hover:bg-indigo-800 transition-colors">
                        Editar
                    </button>

                    <button className="bg-red-700 px-10 py-2 rounded-md text-white font-bold uppercase hover:bg-red-800 transition-colors">
                        Eliminar
                    </button>
                </div>


            </div>


        </div>

    )

}

export default ListadoPacientes