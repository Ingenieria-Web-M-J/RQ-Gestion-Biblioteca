import { NavbarDesk, NavbarMobile, BooksMain } from "@/components/templates";

export default function Books() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:block hidden">
                <NavbarDesk/>
            </div>
            <div className="block md:hidden">
                <NavbarMobile/>
            </div>
            <BooksMain/>
        </div>
    );
}