import useTheme from "../../hooks/useTheme";
import { AiOutlineArrowRight } from 'react-icons/ai';


const Project = ({ project }) => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`card project shadow-xl ${isDarkMode ? 'bg-stone-800' : 'bg-base-100 '}`}>
            <div className="h-80 porject_image rounded-tr-xl rounded-tl-xl" style={{ backgroundImage: `url(${project.project_image})` }}></div>
            <div className="card-body">
                <h2 className="card-title">{project.project_name}</h2>
                <p>{project.project_description}</p>
                <div className="flex justify-end gap-2 flex-wrap">
                    {
                        project.technology.map(tech => {
                            return (
                                <div key={tech.value} className="border rounded-full px-1 text-sm border-primary hover:bg-primary hover:text-zinc-50">
                                    {tech.value}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex">
                    <a href={project.live_link} target="_blank" rel="noreferrer">
                        <AiOutlineArrowRight className="bg-primary text-4xl p-2 rounded-full text-zinc-50" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;