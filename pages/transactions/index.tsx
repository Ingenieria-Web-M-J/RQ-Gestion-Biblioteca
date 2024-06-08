import { NavbarDesk, NavbarMobile, TransactionsMain } from "@/components/plantilla";
import PrivateRoute from "@/components/PrivateRoute";



export default function Transactions() {
    return (
        <PrivateRoute>

        <div className="flex flex-col md:flex-row ">
           
            <div className="md:block hidden">
                <NavbarDesk/>
            </div>
            <div className="block md:hidden ">
                <NavbarMobile/>
            </div>
            <div className="flex items-center justify-between border border-blue-700 w-full">
                <TransactionsMain/>
            </div>
        
        </div>
        </PrivateRoute>
    );
}