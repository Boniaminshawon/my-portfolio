import { FaGithub, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiFirebase, SiMongodb, SiTailwindcss, SiVite } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const Skills = () => {
    return (
        <div className="my-16">
            <h1 className="text-4xl text-center font-bold font-primary">Skills</h1>
            <p className="text-center text-lg font-secondary mt-5 px-28">As a hardworking and passionate Frontend Web Developer, I possess a keen interest in full stack web development. I have honed my skills in HTML, Raw CSS, Tailwind CSS, JavaScript, React.js, Node.js, MongoDB etc. My dedication to continuous learning enables me to build dynamic and responsive web applications.</p>
            <div className="flex justify-center text-7xl gap-4 mt-6">
                <FaHtml5 className="text-red-600"></FaHtml5>
                <IoLogoCss3 className="text-sky-500"></IoLogoCss3>
                <SiTailwindcss className="text-sky-400"></SiTailwindcss>
                <TbBrandJavascript className="text-yellow-500"></TbBrandJavascript>
                <FaReact className="text-sky-500"></FaReact> 
                
            </div>
            <div className="flex justify-center  text-7xl gap-4 mt-6">
            <FaNode></FaNode>
                <SiMongodb className="text-green-700"></SiMongodb>
                <FaGithub></FaGithub>
                <SiVite className="text-purple-500"></SiVite>
                <SiFirebase className="text-yellow-400"></SiFirebase>
                
            </div>

        </div>
    );
};

export default Skills;