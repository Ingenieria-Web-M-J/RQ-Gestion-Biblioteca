import React from 'react'
import {BookType} from '@/types/index'

interface IndexProps {
    Book: BookType;
}

const Index = ({Book}: IndexProps) => {
    return (
        <tr>
            <td className='px-4 py-4 text-sm font-medium whitespace-nowrap'>
                <div>
                    <h2 className='font-medium text-gray-800 dark:text-white '>{Book.title}</h2>
                </div>
            </td>
            <td className='px-12 py-4 text-sm font-medium whitespace-nowrap'>
                <div
                    className={`inline px-3 py-1 text-sm font-normal rounded-full gap-x-2 ${
                        Book.available
                            ? 'text-emerald-500 bg-emerald-100/60 dark:bg-gray-800'
                            : 'text-red-500 bg-red-100/60 dark:bg-gray-800'
                    }`}
                >
                    {Book.available ? "Disponible" : "No Disponible"}
                </div>
            </td>
            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                <div>
                  
                    <p className='text-gray-500 dark:text-gray-400'>
                        {Book.author}
                    </p>
                </div>
            </td>
            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                <div className='flex items-center'>
                    <img
                        className='object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0'
                        src="/portada.png"
                        alt={Book.title}
                    />
                   
                    
                </div>
            </td>
            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                <button className='px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-6 h-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z'
                        />
                    </svg>
                </button>
            </td>
        </tr>
    )
}

export default Index
