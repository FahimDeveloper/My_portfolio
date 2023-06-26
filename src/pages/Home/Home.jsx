import { TypeAnimation } from "react-type-animation";
import ToggleTheme from "../../components/ToggleTheme";
import useTheme from "../../hooks/useTheme";
import myImg from '../../assets/fahim.jpg'
import { AiOutlineUser } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { Link } from "react-router-dom";


const Home = () => {
    const { isDarkMode } = useTheme()
    return (
        <div className={`${isDarkMode ? 'bg-dark text-zinc-50' : 'bg-zinc-50'}`}>
            <div className='relative overflow-hidden'>
                <ToggleTheme />
                <div className="bg-effect lg:block hidden"></div>
                <div className="lg:grid flex flex-col lg:grid-cols-12 gap-5 h-screen justify-center items-center lg:max-w-[2520px] container mx-auto px-14">
                    <div className="xl:col-span-5 lg:col-span-6 my_img lg:block hidden"></div>
                    <div className="lg:hidden block">
                        <img className="w-72 h-72 object-cover mx-auto rounded-full" src={myImg} alt="my image" />
                    </div>
                    <div className="xl:col-span-7 lg:col-span-6 text-center">
                        <p className="text-xl">Hello!</p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h5 className="text-3xl">I'm</h5>
                        <TypeAnimation
                            sequence={[
                                'Tuohidul Islam Fahim',
                                1000,
                                'Fontend developer',
                                1000,
                                'Junior Web Developer',
                                1000,
                                'Work With MERN Stack',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className="xl:text-5xl text-4xl font-bold text-primary"
                            repeat={Infinity}
                        />
                        <p className="md:text-lg text-base mt-1">I am a dynamic MERN stack wizard from Bangladesh, weaving cutting-edge web experiences using MongoDB, Express.js, React, and Node.js, while constantly pushing boundaries and embracing creativity.</p>
                        <div className="flex justify-center items-center gap-5 mt-5">
                            <Link to="/about"><button className="actionBtn"><AiOutlineUser className="text-xl" /> More about me</button></Link>
                            <Link to="/portfolio"><button className="outLineBtn"><BsBagCheck className="text-xl" /> Portfolio</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;