import { NavbarDesk, NavbarMobile, HomeMain } from "@/components/plantilla";
import PrivateRoute from "@/components/PrivateRoute";

export default function Home() {
    return (
        <PrivateRoute>

        <div className="flex flex-col md:flex-row">
            <div className="md:block hidden">
                <NavbarDesk/>
            </div>
            <div className="block md:hidden">
                <NavbarMobile/>
            </div>
            <HomeMain/>
        </div>
        </PrivateRoute>
    );
}