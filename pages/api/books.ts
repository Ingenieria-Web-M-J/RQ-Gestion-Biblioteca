// pages/api/books.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/config/prisma'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const books = await prisma.book.findMany({
                where: { available: true },
            });
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching available books' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
