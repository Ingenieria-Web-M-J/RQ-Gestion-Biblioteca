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
                        <div className="flex items-center -mx-2 mt-2 sm:mt-0">
                            <Link
                                href="/"
                                className="border-2 hover:bg-gray-700 px-3 py-1 rounded-md font-semibold text-sm text-white transform transition-colors duration-300"
                            >
                                Registro
                            </Link>
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
                        <div className="flex lg:justify-end mt-8 lg:mt-0 lg:w-1/2">
                            <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md">
                                <div className="px-6 py-8 text-center">
                                    <h2 className="font-semibold text-2xl text-gray-700 dark:text-white">
                                        Inicio
                                    </h2>
                                    <form action="#">
                                        <div className="mt-4">
                                            <input
                                                className="block dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-opacity-40 mt-4 px-4 py-2 border focus:border-blue-400 dark:focus:border-blue-300 rounded-md w-full text-gray-700 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-blue-300 focus:outline-none focus:ring"
                                                type="email"
                                                placeholder="Correo electrónico"
                                                aria-label="Correo electrónico"
                                            />
                                            <input
                                                className="block dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-opacity-40 mt-4 px-4 py-2 border focus:border-blue-400 dark:focus:border-blue-300 rounded-md w-full text-gray-700 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-blue-300 focus:outline-none focus:ring"
                                                type="password"
                                                placeholder="Contraseña"
                                                aria-label="Contraseña"
                                            />
                                        </div>
                                        <div className="flex justify-between items-center mt-4">
                                            <Link
                                                href="/"
                                                className="text-gray-600 text-sm dark:text-gray-200 hover:underline"
                                            >
                                                Olvidó su contraseña?
                                            </Link>
                                            <button 
                                            className="bg-gray-900 hover:bg-gray-800 dark:hover:bg-gray-700 focus:bg-gray-800 dark:focus:bg-gray-700 px-6 py-2 rounded-md font-medium text-white transform transition-colors duration-300 focus:outline-none"
                                            onClick={() => {
                                                signIn("auth0");
                                            }}>
                                                Iniciar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}