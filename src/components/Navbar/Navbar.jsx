import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { LuContact } from "react-icons/lu";

const Navbar = () => {
    return (
        <div className="fixed flex justify-center w-full sm:bottom-5 bottom-2 z-50">
            <nav className='flex gap-5 border border-primary rounded-full p-1 text-neutral'>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'navStyle'} to="/"><AiOutlineHome className="menuStyle" /><span className="menu">Home</span></NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'navStyle'} to="/about"><AiOutlineUser className="menuStyle" /><span className="menu">About me</span></NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'navStyle'} to="/portfolio"><BsBagCheck className="menuStyle" /><span className="menu">Portfolio</span></NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'navStyle'} to="/contact"><LuContact className="menuStyle" /><span className="menu">Contact</span></NavLink>
            </nav>
        </div>
    );
};

export default Navbar;