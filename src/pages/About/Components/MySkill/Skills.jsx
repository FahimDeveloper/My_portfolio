import Marquee from "react-fast-marquee";
import { skillsData } from "./skillData";

const Skills = () => {
    return (
        <div className="space-y-5">
            <h4 className="text-xl font-medium">Expertise, Comportable & Familiar Skill</h4>
            <Marquee speed={80} pauseOnHover={true}>
                {
                    skillsData.map(skill => {
                        return (
                            <div key={skill.label} className="sm:w-32 w-28 border flex flex-col justify-center items-center sm:h-32 h-28 rounded-xl">
                                <skill.Icon className={`sm:text-7xl text-6xl text-${skill.color} mx-auto`} />
                                <p className="font-medium">{skill.label}</p>
                            </div>
                        )
                    })
                }
            </Marquee>
        </div>
    )
};

export default Skills;