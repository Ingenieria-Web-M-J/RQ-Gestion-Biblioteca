import Link from "next/link";
import { useState } from "react";

export default function NavbarMobile() {
    const [open, setOpen] = useState(false);

    return (
        <nav className={`relative bg-white shadow dark:bg-gray-800`}>
            <div className="container px-6 py-4 mx-auto">
                <div>
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <img 
                                className="w-auto h-16" 
                                src="/logo.png" 
                                alt="">
                            </img>
                        </Link>

                        <div className="flex">
                            {open && (
                                <button type="button" onClick={() => setOpen(!open)} className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">            
                                    <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                            {!open && (
                                <button type="button" onClick={() => setOpen(!open)} className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 16 16">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/>
                                    </svg>
                                </button>
                            )}
                            
                        </div>
                    </div>

                    <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 ${open ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                        <div className="flex items-center mt-4">
                            <button className="hidden mx-4 text-gray-600 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>

                            <Link href="/home">
                            <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                    <img 
                                        src="/user.png" 
                                        className="object-cover w-full h-full" 
                                        alt="avatar">
                                    </img>
                                </div>

                                <h3 className="mx-2 text-gray-700 dark:text-gray-200">John Doe</h3>
                            </button>
                            </Link>
                        </div>
                        
                        <div className="flex flex-col justify-between flex-1 mt-2">
                            <nav>
                                <Link href="/transactions" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-200 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" stroke-width="2" d="M2 7h18m-4-5l5 5l-5 5m6 5H4m4-5l-5 5l5 5"/>
                                    </svg>
                                    <span className="mx-4 font-medium">Transacciones</span>
                                </Link>

                                <Link href="/books" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-200 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 16 16">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 3.75c-1.75-1-2.25-1-6.25-1v9.5c4 0 4.5 0 6.25 1c1.75-1 3.25-1 6.25-1v-9.5c-4 0-4.5 0-6.25 1m0 .5v8.5"/>
                                    </svg>
                                    <span className="mx-4 font-medium">Libros</span>
                                </Link>

                                <Link href="/users" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-200 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3m9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"/>
                                    </svg>
                                    <span className="mx-4 font-medium">Usuarios</span>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </nav>        
    );
}