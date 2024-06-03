import { useEffect, useState } from 'react';

export default function Transactions() {
    const [borrows, setBorrows] = useState([]);
    const [availableBooks, setAvailableBooks] = useState([]);
    const [userId, setUserId] = useState(''); // Establece el ID del usuario actual aquí

    useEffect(() => {
        // Fetch user borrows
        const fetchBorrows = async () => {
            const response = await fetch(`/api/borrows?userId=${userId}`);
            const data = await response.json();
            setBorrows(data);
        };

        // Fetch available books
        const fetchAvailableBooks = async () => {
            const response = await fetch('/api/books');
            const data = await response.json();
            setAvailableBooks(data);
        };

        if (userId) {
            fetchBorrows();
            fetchAvailableBooks();
        }
    }, [userId]);

    const borrowBook = async (bookId: string) => {
        const response = await fetch('/api/borrows', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, bookId }),
        });

        if (response.ok) {
            const updatedBorrows = await fetch(`/api/borrows?userId=${userId}`);
            const updatedBorrowsData = await updatedBorrows.json();
            setBorrows(updatedBorrowsData);

            const updatedAvailableBooks = await fetch('/api/books');
            const updatedAvailableBooksData = await updatedAvailableBooks.json();
            setAvailableBooks(updatedAvailableBooksData);
        } else {
            console.error('Error borrowing book');
        }
    };

    return (
        <div className="bg-gray-900 w-screen h-screen flex flex-col items-center justify-center">
            <div className="py-6 text-center">
                <h2 className="font-semibold text-3xl md:text-4xl text-gray-100">
                    Gestión de Préstamos
                </h2>
                <h3 className="mt-2 font-semibold text-2xl text-gray-100">
                    <span className="text-blue-400">Tus Préstamos</span>
                </h3>
                <div className="mt-4 text-gray-100">
                    {borrows.length === 0 ? (
                        <p>No tienes préstamos actualmente.</p>
                    ) : (
                        <ul>
                            {borrows.map((borrow) => (
                                <li key={borrow.id}>
                                    {borrow.book.title} por {borrow.book.author}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <h3 className="mt-6 font-semibold text-2xl text-gray-100">
                    <span className="text-blue-400">Libros Disponibles</span>
                </h3>
                <div className="mt-4 text-gray-100">
                    {availableBooks.length === 0 ? (
                        <p>No hay libros disponibles para prestar.</p>
                    ) : (
                        <ul>
                            {availableBooks.map((book) => (
                                <li key={book.id}>
                                    {book.title} por {book.author} - 
                                    <button
                                        className="ml-2 px-2 py-1 bg-blue-500 text-white rounded"
                                        onClick={() => borrowBook(book.id)}
                                    >
                                        Prestar
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
