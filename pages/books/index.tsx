import { NavbarDesk, NavbarMobile, BooksMain } from "@/components/plantilla";

export default function Books() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:block hidden">
                <NavbarDesk/>
            </div>
            <div className="block md:hidden">
                <NavbarMobile/>
            </div>
            <div className="flex items-center justify-between border px-[450px] bg-black w-full">
                <BooksMain/>
            </div>
        </div>
    );
}