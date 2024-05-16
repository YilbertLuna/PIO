import NavBarMovile from "./mobile"
import NavBarDesktop from "./desktop"

export default function NavBar() {
    return(
        <div>
            <div className="md:hidden">
                <NavBarMovile />
            </div>
            <div className="hidden md:flex fixed top-0 h-full">
                <NavBarDesktop />
            </div>
        </div>
    )
}