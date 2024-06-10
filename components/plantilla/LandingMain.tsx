import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

//Template para el contenido principal de la página de landing

export default function LandingMain() {
    return (
        <div>
            <header className="bg-gray-900 w-screen sm:h-screen">
                <div className="mx-auto px-6 container">
                    <nav className="flex sm:flex-row flex-col sm:justify-between sm:items-center py-6">
                        <Link href="/">
                            <img
                                className="w-24 h-24"
                                src="/logo.png"
                                alt="Logo"
                            />
                        </Link>
                        <div className="flex justify-between items-center mt-4">

                            <button
                                className="bg-white hover:bg-gray-800 dark:hover:bg-gray-700 focus:bg-gray-800 dark:focus:bg-gray-700 px-6 py-2 rounded-md font-medium text-blacl transform transition-colors duration-300 focus:outline-none"
                                onClick={() => {
                                    signIn("auth0");
                                }}>
                                Iniciar
                            </button>
                        </div>
                    </nav>
                    <div className="flex lg:flex-row flex-col items-center py-6 lg:h-[36rem]">
                        <div className="lg:w-1/2">
                            <h2 className="font-semibold text-3xl text-gray-100 lg:text-4xl">
                                RQ Gestion Biblioteca
                            </h2>
                            <h3 className="mt-2 font-semibold text-2xl text-gray-100">
                                <span className="text-blue-400">Bienvenido</span>
                            </h3>
                            <p className="mt-4 text-gray-100">
                                Esta es la página de gestión de biblioteca. En esta página el usuario podra ver el catálogo de libros, además de gestionar sus préstamos y devoluciones.
                            </p>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    );
}