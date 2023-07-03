import useTheme from "../../hooks/useTheme";


const Project = ({ project }) => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`card project shadow-xl ${isDarkMode ? 'bg-stone-800' : 'bg-base-100 '}`}>
            <div className="h-80 porject_image rounded-tr-xl rounded-tl-xl" style={{ backgroundImage: `url(${project.project_image})` }}></div>
            <div className="card-body">
                <h2 className="card-title">{project.project_name}</h2>
                <p>{project.project_description}</p>
                <div className="flex lg:gap-3 gap-1 justify-end">
                    <a className="border border-primary lg:px-2 px-1 text-sm rounded-xl hover:bg-primary hover:text-white" target="_blank" rel="noreferrer" href={project.live_link}>Live link</a>
                    <a className="border border-primary lg:px-2 px-1 text-sm rounded-xl hover:bg-primary hover:text-white" target="_blank" rel="noreferrer" href={project.client_link}>Clinet code</a>
                    <a className="border border-primary lg:px-2 px-1 text-sm rounded-xl hover:bg-primary hover:text-white" target="_blank" rel="noreferrer" href={project.server_link}>Server code</a>
                </div>
            </div>
        </div>
    );
};

export default Project;