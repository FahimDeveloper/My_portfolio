import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor"
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTheme from "../hooks/useTheme";
AOS.init();


const MainLayout = () => {
    const { isDarkMode } = useTheme();
    return (
        <>
            <AnimatedCursor
                className="sm:block hidden"
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: `${isDarkMode ? '#fff' : '#fa5b0f'}`
                }}
                outerStyle={{
                    border: '2px solid #fa5b0f'
                }}
            />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;