import bgFooter from '../assets/Images/row-bgimage-2.jpg'

const Footer = () => {
    return (
        <div style={{backgroundImage:`url('${bgFooter}')`} } className="text-white font-secondary text-center space-y-4 md:text-xl text-lg  py-12  md:py-16">
            <p className='font-bold text-2xl'>Boni Amin Shawon</p>
            <div className='md:space-x-5 space-x-2 underline'>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#education">Education</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        <p className="text-base">Copyright © 2024 - All right reserved</p>
        </div>
    );
};

export default Footer;