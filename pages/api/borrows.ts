import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/config/prisma'; 


// Define la estructura esperada del cuerpo del POST request
interface BorrowRequestBody {
    userId: string;
    bookId: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { userId, bookId } = req.body as BorrowRequestBody;

        if (!userId || !bookId) {
            return res.status(400).json({ error: 'userId y bookId son requeridos' });
        }

        try {
            const borrow = await prisma.$transaction(async (tx) => {
                // Crear el registro de préstamo
                const borrowRecord = await tx.borrow.create({
                    data: {
                        userId,
                        bookId,
                    },
                });

                // Actualizar el estado del libro a no disponible
                await tx.book.update({
                    where: { id: bookId },
                    data: { available: false },
                });

                return borrowRecord;
            });

            res.status(200).json(borrow);
        } catch (error) {
            console.error('Error creating borrow record:', error);
            res.status(500).json({ error: 'Error creating borrow record' });
        }
    } else if (req.method === 'GET') {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({ error: 'userId es requerido' });
        }

        try {
            const borrows = await prisma.borrow.findMany({
                where: { userId: userId as string },
                include: { book: true },
            });
            res.status(200).json(borrows);
        } catch (error) {
            console.error('Error fetching borrow records:', error);
            res.status(500).json({ error: 'Error fetching borrow records' });
        }
    } else {
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
