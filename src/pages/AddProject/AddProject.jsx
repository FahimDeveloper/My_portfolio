import Title from "../../components/Title";
import { useForm } from "react-hook-form"
import useTheme from "../../hooks/useTheme";
import ToggleTheme from "../../components/ToggleTheme";
import CreatableSelect from 'react-select/creatable';
import { useState } from "react";
import axios from "axios";


const AddProject = () => {
    const { register, handleSubmit, reset } = useForm();
    const [selectedOption, setSelectedOption] = useState(null);
    const onSubmit = (projectData) => {
        projectData.technology = selectedOption
        projectData.date = new Date();
        const uploadkey = import.meta.env.VITE_IMAGE_UPLOAD_KEY;
        const formData = new FormData();
        formData.append("image", projectData.project_image[0]);
        fetch(`https://api.imgbb.com/1/upload?key=${uploadkey}`, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(imgResponse => {
            projectData.project_image = imgResponse.data.display_url;
            axios.post("http://localhost:5000/addProject", projectData).then(data => {
                if (data.data.insertedId) {
                    reset();
                }
            })
        });
    };
    const { isDarkMode } = useTheme();
    const options = [
        { value: 'HTML5', label: 'HTML5' },
        { value: 'CSS3', label: 'CSS3' },
        { value: 'Bootstrap', label: 'Bootstrap' },
        { value: 'TailwindCSS', label: 'TailwindCSS' },
        { value: 'DaisyUI', label: 'DaisyUI' },
        { value: 'MaterialUI', label: 'MaterialUI' },
        { value: 'Javascript', label: 'Javascript' },
        { value: 'TypeScript', label: 'TypeScript' },
        { value: 'ReactJS', label: 'ReactJS' },
        { value: 'Redux', label: 'Redux' },
        { value: 'ReactQuery', label: 'ReactQuery' },
        { value: 'NodeJS', label: 'NodeJS' },
        { value: 'ExpressJS', label: 'ExpressJS' },
        { value: 'MongoDB', label: 'MongoDB' },
    ];
    return (
        <div className={`${isDarkMode ? 'bg-dark text-zinc-50' : 'bg-zinc-50'} min-h-screen`}>
            <div className="lg:w-4/5 sm:w-10/12 w-11/12 py-16 mx-auto">
                <ToggleTheme />
                <Title title={`add new`} mainTitle={`project`} subTitle={`I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.`} />
                <form onSubmit={handleSubmit(onSubmit)} className="border p-16 mt-16 rounded-lg space-y-5">
                    <div className="flex gap-5">
                        <input {...register("project_name")} type="text" placeholder="Type project name" className={`${isDarkMode ? 'bg-dark' : 'bg-white'} input input-bordered w-full rounded-xl`} />
                        <input {...register("live_link")} type="url" placeholder="Type project live link" className={`${isDarkMode ? 'bg-dark' : 'bg-white'} input input-bordered w-full rounded-xl`} />
                    </div>
                    <CreatableSelect
                        className={`${isDarkMode ? 'bg-dark text-black' : 'bg-white'}`}
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        placeholder="select project technology"
                        options={options}
                        isMulti
                    />
                    <select className={`${isDarkMode ? 'bg-dark' : 'bg-white'} select select-bordered w-full`} {...register("web_format")} required>
                        <option selected disabled>choose web format</option>
                        <option value="Dynamic">Dynamic</option>
                        <option value="Static">Static</option>
                    </select>
                    <input {...register("project_image")} type="file" className={`${isDarkMode ? "bg-dark" : "bg-white"} file-input file-input-bordered w-full`} />
                    <textarea {...register("project_description")} className={`${isDarkMode ? 'bg-dark' : 'bg-white'} textarea textarea-bordered w-full text-base rounded-xl`} rows='5' placeholder="Type project info"></textarea>
                    <button className="actionBtn">add project</button>
                </form>
            </div>
        </div>
    );
};

export default AddProject;