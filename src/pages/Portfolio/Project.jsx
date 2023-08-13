import useTheme from "../../hooks/useTheme";


const Project = ({ project }) => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`card project shadow-xl ${isDarkMode ? 'bg-stone-800' : 'bg-base-100 '}`}>
            <div className="h-80 porject_image rounded-tr-xl rounded-tl-xl" style={{ backgroundImage: `url(${project.project_image})` }}></div>
            <div className="card-body">
                <h2 className="card-title">{project.project_name}</h2>
                <p>{project.project_description}</p>
            </div>
        </div>
    );
};

export default Project;