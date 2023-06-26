import SkillProgress from "./SkillProgress";
import Skills from "./Skills";
import ToolsSkill from "./ToolsSkill";


const MySkill = () => {
    return (
        <div className="py-10 space-y-5">
            <h3 className="text-4xl font-medium">Skill and Technologies</h3>
            <Skills />
            <SkillProgress />
            <ToolsSkill />
        </div>
    );
};

export default MySkill;