import { NavbarDesk, NavbarMobile, TransactionsMain } from "@/components/templates";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const Borrow = await prisma.borrow.create

export default function Transactions() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:block hidden">
                <NavbarDesk/>
            </div>
            <div className="block md:hidden">
                <NavbarMobile/>
            </div>
            <TransactionsMain/>
        </div>
    );
}