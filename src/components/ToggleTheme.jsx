import useTheme from '../hooks/useTheme';
import { BsSun, BsMoonStars } from "react-icons/bs";

const ToggleTheme = () => {
    const { isDarkMode, toggleTheme } = useTheme()
    return (
        <div onClick={toggleTheme} className='fixed z-50 cursor-pointer transition right-6 bg-white top-10 border border-primary p-2 rounded-full'>
            <div className='text-xl'>
                {
                    isDarkMode ? <BsSun className='text-black' />
                        : <BsMoonStars className='text-black' />
                }
            </div>
        </div>
    );
};

export default ToggleTheme;