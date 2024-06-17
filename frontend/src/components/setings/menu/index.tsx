import { FiX } from "react-icons/fi";
import ButtonLogout from "@/components/logout";

type props = {
    active: boolean
    setActive: (value: boolean) => void
}

export function Menu({ active, setActive }: props) {

    const closeMenu = () => {
        setActive(false);
    }

    return(
        <div className={`${active === true ? 'w-[90%] px-2' : 'w-0'} h-28 fixed top-2 left-90 right-0 bg-color3 rounded-l-3xl transition-all duration-300 md:hidden`}>
            <div className={`${active === false ? 'hidden' : null} flex flex-col justify-start items-start text-start pl-8`}>
                <span onClick={closeMenu} className="ml-4 py-5 text-3xl">
                    <FiX />
                </span>
                
                <span className="text-white">
                    <ButtonLogout/>
                </span>
            </div>
        </div>
    )
}