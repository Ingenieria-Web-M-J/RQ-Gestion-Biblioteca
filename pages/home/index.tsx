import { NavbarDesk, NavbarMobile, HomeMain } from "@/components/templates";

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:block hidden">
                <NavbarDesk/>
            </div>
            <div className="block md:hidden">
                <NavbarMobile/>
            </div>
            <HomeMain/>
        </div>
    );
}