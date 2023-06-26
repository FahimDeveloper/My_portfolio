import Title from "../../components/Title";
import ToggleTheme from "../../components/ToggleTheme";
import useTheme from "../../hooks/useTheme";
import AboutMe from "./Components/AboutMe/AboutMe";
import MySkill from "./Components/MySkill/MySkill";


const About = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`py-16 ${isDarkMode ? 'bg-dark text-zinc-50' : 'bg-zinc-50'} min-h-screen`}>
            <div className="container mx-auto">
                <ToggleTheme />
                <Title title={`about`} mainTitle={`me`} subTitle={`I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.`} />
                <div className="">
                    <AboutMe />
                    <hr className="border" />
                    <MySkill />
                </div>
            </div>
        </div>
    );
};

export default About;

