import useTheme from '../hooks/useTheme';
import { BsSun, BsMoonStars } from "react-icons/bs";

const ToggleTheme = () => {
    const { isDarkMode, toggleTheme } = useTheme()
    return (
        <div onClick={toggleTheme} className='absolute cursor-pointer transition right-8 top-10 border border-primary p-2 rounded-full'>
            <div className='text-xl'>
                {
                    isDarkMode ? <BsSun />
                        : <BsMoonStars />
                }
            </div>
        </div>
    );
};

export default ToggleTheme;