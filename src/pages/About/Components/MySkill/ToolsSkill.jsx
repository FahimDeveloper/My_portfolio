import Marquee from "react-fast-marquee";
import { toolsData } from "./toolsData";
import vite from "/vite.svg"


const ToolsSkill = () => {
    return (
        <div className="space-y-5">
            <h4 className="text-xl font-medium">Using Tools</h4>
            <Marquee speed={80} pauseOnHover={true}>
                <div className="sm:w-32 w-28 border flex flex-col justify-center items-center sm:h-32 gap-2 h-28 rounded-xl">
                    <img src={vite} className="sm:w-[70px] w-14 sm:h-[70px] h-14" alt="vite img" />
                    <p className="font-medium">Vite</p>
                </div>
                {
                    toolsData.map(skill => {
                        return (
                            <div key={skill.label} className="sm:w-32 w-28 border flex flex-col justify-center items-center gap-2 sm:h-32 h-28 rounded-xl">
                                <skill.Icon className={`sm:text-7xl text-6xl text-${skill.color} mx-auto`} />
                                <p className="font-medium text-center">{skill.label}</p>
                            </div>
                        )
                    })
                }
            </Marquee>
        </div>
    );
};

export default ToolsSkill;