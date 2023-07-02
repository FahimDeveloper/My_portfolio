import Title from "../../components/Title";
import ToggleTheme from "../../components/ToggleTheme";
import useTheme from "../../hooks/useTheme";
import AboutMe from "./Components/AboutMe/AboutMe";
import Education from "./Components/Education/Education";
import MySkill from "./Components/MySkill/MySkill";


const About = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`sm:py-16 py-10 ${isDarkMode ? 'bg-dark text-zinc-50' : 'bg-zinc-50'} min-h-screen`}>
            <div className="lg:w-4/5 sm:w-10/12 w-11/12 mx-auto">
                <ToggleTheme />
                <Title title={`about`} mainTitle={`me`} subTitle={`I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.`} />
                <div>
                    <AboutMe />
                    <hr className="border" />
                    <MySkill />
                    <hr className="border" />
                    <Education />
                </div>
            </div>
        </div>
    );
};

export default About;

