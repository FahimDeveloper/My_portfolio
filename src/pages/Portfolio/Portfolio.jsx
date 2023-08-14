import { useEffect } from "react";
import Title from "../../components/Title";
import ToggleTheme from "../../components/ToggleTheme";
import useTheme from "../../hooks/useTheme";
import { useState } from "react";
import Project from "./Project";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from "axios";


const Portfolio = () => {
    const [projectsData, setProjectsData] = useState([])
    const { isDarkMode } = useTheme();
    useEffect(() => {
        axios("http://localhost:5000/allProjects").then(data => {
            setProjectsData(data.data)
        })
    }, []);
    console.log(projectsData)
    const dynamicWeb = projectsData.filter(project => project.web_format === "Dynamic")
    const staticWeb = projectsData.filter(project => project.web_format === "Static")
    return (
        <div className={`sm:py-16 py-10 ${isDarkMode ? 'bg-dark text-zinc-50' : 'bg-zinc-50'} min-h-screen`}>
            <div className="lg:w-4/5 sm:w-10/12 w-11/12 mx-auto space-y-10">
                <ToggleTheme />
                <Title title={`my`} mainTitle={`portfolio`} subTitle={`I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.`} />
                <Tabs>
                    <TabList className={`react-tabs__tab-list text-center`}>
                        <Tab>All</Tab>
                        <Tab>Dynaic Web</Tab>
                        <Tab>Static Web</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 pt-5">
                            {
                                projectsData.map((project, index) => <Project key={index} project={project} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-4 pt-5">
                            {
                                dynamicWeb.map((project, index) => <Project key={index} project={project} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-4 pt-5">
                            {
                                staticWeb.map((project, index) => <Project key={index} project={project} />)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Portfolio;