import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { LuContact } from "react-icons/lu";
import useTheme from "../../hooks/useTheme";

const Navbar = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className="fixed left-[calc(50%-155px)] bottom-5 z-50">
            <nav className={`flex gap-5 border border-primary rounded-full p-2 ${isDarkMode ? 'text-zinc-50' : 'text-neutral'}`}>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'navStyle'} to="/"><AiOutlineHome className="menuStyle" /><span className="menu">Home</span></NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'navStyle'} to="/about"><AiOutlineUser className="menuStyle" /><span className="menu">About me</span></NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'navStyle'} to="/portfolio"><BsBagCheck className="menuStyle" /><span className="menu">Portfolio</span></NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'navStyle'} to="/contact"><LuContact className="menuStyle" /><span className="menu">Contact</span></NavLink>
            </nav>
        </div>
    );
};

export default Navbar;