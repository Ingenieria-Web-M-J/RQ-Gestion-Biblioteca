import { NavbarDesk, NavbarMobile, UsersMain } from "@/components/templates";

export default function Users() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:block hidden">
                <NavbarDesk/>
            </div>
            <div className="block md:hidden">
                <NavbarMobile/>
            </div>
            <UsersMain/>
        </div>
    );
}