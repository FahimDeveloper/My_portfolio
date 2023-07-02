import { useEffect } from "react";
import Title from "../../components/Title";
import ToggleTheme from "../../components/ToggleTheme";
import useTheme from "../../hooks/useTheme";
import { useState } from "react";
import Project from "./project";


const Portfolio = () => {
    const [projectsData, setProjectsData] = useState([])
    const { isDarkMode } = useTheme();
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjectsData(data))
    }, [])
    return (
        <div className={`sm:py-16 py-10 ${isDarkMode ? 'bg-dark text-zinc-50' : 'bg-zinc-50'} min-h-screen`}>
            <div className="lg:w-4/5 sm:w-10/12 w-11/12 mx-auto space-y-10">
                <ToggleTheme />
                <Title title={`my`} mainTitle={`portfolio`} subTitle={`I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.`} />
                <div className="grid grid-cols-3 gap-5">
                    {
                        projectsData.map((project, index) => <Project key={index} project={project} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;