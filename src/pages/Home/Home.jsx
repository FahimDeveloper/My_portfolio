/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";
import ToggleTheme from "../../components/ToggleTheme";
import useTheme from "../../hooks/useTheme";
import myImg from '../../assets/fahim.jpg'
import { BsBagCheck, BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";
import resume from "../../assets/Resume/MyResume.pdf";


const Home = () => {
    const { isDarkMode } = useTheme()
    return (
        <div className={`${isDarkMode ? 'bg-dark text-zinc-50' : 'bg-zinc-50'}`}>
            <div className='relative overflow-hidden'>
                <ToggleTheme />
                <div className="bg-effect lg:block hidden"></div>
                <div className="lg:grid flex flex-col lg:grid-cols-12 gap-3 min-h-screen pb-16 justify-center items-center lg:max-w-[2520px] container mx-auto sm:px-14">
                    <div data-aos='fade-right' className="xl:col-span-5 lg:col-span-6 my_img lg:block hidden"></div>
                    <div className="lg:hidden block">
                        <img className="w-64 h-64 object-cover mx-auto rounded-full" src={myImg} alt="my image" />
                    </div>
                    <div data-aos='fade-left' className="xl:col-span-7 lg:col-span-6 text-center">
                        <p className="text-xl">Hello!</p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h5 className="text-3xl">I'm</h5>
                        <TypeAnimation
                            sequence={[
                                'Tuohidul Islam Fahim',
                                1000,
                                'A Frontend Developer',
                                1000,
                                'A Junior Web Developer',
                                1000,
                                'Working With MERN Stack',
                                1000,
                                'Working With Full Stack',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className="xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-primary"
                            repeat={Infinity}
                        />
                        <p className="md:text-lg text-base mt-1">Transforming ideas into stunning web experiences. Skilled in MERN stack development, I combine the power of React.js with MongoDB, Express.js, and Node.js to build robust and scalable applications. Let's bring your vision to life.</p>
                        <div className="flex justify-center items-center gap-5 mt-5">
                            <a href={resume} download className="actionBtn"><BsDownload className="text-xl" /> Donwload Resume</a>
                            <Link to="/portfolio" className="sm:block hidden"><button className="outLineBtn"><BsBagCheck className="text-xl" /> Portfolio</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;