import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoReact, BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const MySkill = () => {
    return (
        <div className="py-10 space-y-5">
            <h3 className="text-4xl font-medium">Skill and Technologies</h3>
            <div className="grid grid-cols-3 gap-5">
                <div className="space-y-2">
                    <div className="flex justify-between font-medium text-lg">
                        <p className="flex gap-2">HTML5 <AiFillHtml5 className="text-3xl text-[#e34c26]" /></p>
                        <p>90%</p>
                    </div>
                    <progress className="progress progress-primary bg-gray-100 w-full" value={90} max="100"></progress>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between font-medium text-lg">
                        <p className="flex gap-2">CSS3 <DiCss3 className="text-3xl text-[#264de4]" /></p>
                        <p>85%</p>
                    </div>
                    <progress className="progress progress-primary bg-gray-100 w-full" value={85} max="100"></progress>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between font-medium text-lg">
                        <p className="flex gap-2">JavaScript & ES6 <RiJavascriptFill className="text-3xl text-[#F0DB4F]" /></p>
                        <p>80%</p>
                    </div>
                    <progress className="progress progress-primary bg-gray-100 w-full" value={80} max="100"></progress>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between font-medium text-lg">
                        <p className="flex gap-2">React JS <BiLogoReact className="text-3xl text-[#61DBFB]" /></p>
                        <p>85%</p>
                    </div>
                    <progress className="progress progress-primary bg-gray-100 w-full" value={85} max="100"></progress>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between font-medium text-lg">
                        <p className="flex gap-2">Express JS <SiExpress className="text-3xl" /></p>
                        <p>70%</p>
                    </div>
                    <progress className="progress progress-primary bg-gray-100 w-full" value={70} max="100"></progress>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between font-medium text-lg">
                        <p className="flex gap-2">MongoDB <BiLogoMongodb className="text-3xl text-[#4DB33D]" /></p>
                        <p>75%</p>
                    </div>
                    <progress className="progress progress-primary bg-gray-100 w-full" value={75} max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default MySkill;