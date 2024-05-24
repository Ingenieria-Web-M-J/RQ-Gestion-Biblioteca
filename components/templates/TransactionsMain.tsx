//Template para el contenido principal de la página de gestión de transacciones
export default function TransactionsMain() {
    return (
        <div className="bg-gray-900 w-screen h-screen flex items-center justify-center">
            <div className="flex md:flex-row flex-col py-6 items-center justify-center text-center">
                <div className="md:w-1/2 w-5/6 min-w-96">
                    <h2 className="font-semibold text-3xl text-gray-100 md:text-4xl">
                        Página gestión de transacciones
                    </h2>
                    <h3 className="mt-2 font-semibold text-2xl text-gray-100">
                        <span className="text-blue-400">Bienvenido</span>
                    </h3>
                    <p className="mt-4 text-gray-100">
                        Esta es la página gestión de transacciones.
                    </p>
                </div>
            </div>
        </div>
    )
}