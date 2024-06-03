import Link from "next/link";

//Template para la barra de navegación
export default function NavbarDesk() {
    return (
        <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
            <Link href="/home" className="flex flex-col items-center mt-6 -mx-2">
                <img
                    className="w-24 h-24"
                    src="/logo.png"
                    alt="Logo"
                />
            </Link>

            <div className="flex flex-col items-center mt-6 -mx-2">
                <Link href="/home">
                    <img 
                        className="object-cover w-24 h-24 mx-2 rounded-full" 
                        src="/user.png" 
                        alt="avatar">
                    </img>
                </Link>
                <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">John Doe</h4>
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">john@example.com</p>
            </div>

            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    <Link href="/transactions" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="2" d="M2 7h18m-4-5l5 5l-5 5m6 5H4m4-5l-5 5l5 5"/>
                        </svg>
                        <span className="mx-4 font-medium">Transacciones</span>
                    </Link>

                    <Link href="/books" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 16 16">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 3.75c-1.75-1-2.25-1-6.25-1v9.5c4 0 4.5 0 6.25 1c1.75-1 3.25-1 6.25-1v-9.5c-4 0-4.5 0-6.25 1m0 .5v8.5"/>
                        </svg>
                        <span className="mx-4 font-medium">Libros</span>
                    </Link>

                    <Link href="/users" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3m9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"/>
                        </svg>
                        <span className="mx-4 font-medium">Usuarios</span>
                    </Link>
                </nav>
            </div>
        </aside>
    );
  }
