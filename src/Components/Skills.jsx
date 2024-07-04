import { FaGithub, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiFirebase, SiMongodb, SiTailwindcss, SiVite } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";



const Skills = () => {
   
    return (
        <div id="skills"  className="md:my-16 my-5">
            <h1 className="md:text-4xl text-3xl text-center font-bold font-primary text-[#2d4a8a]">Skills</h1>
            <p className="text-center md:text-lg text-base font-secondary mt-5 md:px-28 px-2">As a hardworking and passionate Frontend Web Developer, I possess a keen interest in full stack web development. I have honed my skills in HTML, Raw CSS, Tailwind CSS, JavaScript, React.js, Node.js, MongoDB etc. My dedication to continuous learning enables me to build dynamic and responsive web applications.</p>
            <div className="flex justify-center md:text-7xl text-5xl gap-3 md:gap-4 mt-6">
             <p data-tip="HTML" className="tooltip">   <FaHtml5   className="text-red-600 "></FaHtml5></p>
             <p data-tip="CSS" className="tooltip">   <IoLogoCss3 className="text-sky-500"></IoLogoCss3></p>
             <p data-tip="Tailwind CSS" className="tooltip">  <SiTailwindcss className="text-sky-400"></SiTailwindcss></p>
             <p data-tip="Javascript" className="tooltip">   <TbBrandJavascript className="text-yellow-500"></TbBrandJavascript></p>
             <p data-tip="React.js" className="tooltip"> <FaReact className="text-sky-500"></FaReact></p>
               
              
             
                
                
            </div>
            <div className="flex justify-center  md:text-7xl text-5xl gap-3 md:gap-4 mt-6">
            <p data-tip="Node.js" className="tooltip">     <FaNode></FaNode></p>
            <p data-tip="MongoDB" className="tooltip">            <SiMongodb className="text-green-700"></SiMongodb> </p>
            <p data-tip="Github" className="tooltip">     <FaGithub></FaGithub></p>
            <p data-tip="vite" className="tooltip">         <SiVite className="text-purple-500"></SiVite></p>
            <p data-tip="Firebase" className="tooltip">     <SiFirebase className="text-yellow-400"></SiFirebase></p>
               
        
        
                
           
               
                
            </div>

        </div>
    );
};

export default Skills;