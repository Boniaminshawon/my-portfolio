import bgFooter from '../assets/Images/row-bgimage-2.jpg'

const Footer = () => {
    return (
        <div style={{backgroundImage:`url('${bgFooter}')`} } className="text-white font-secondary text-center space-y-4 text-xl  py-16">
            <p className='font-bold text-2xl'>Boni Amin Shawon</p>
            <div className='space-x-5 underline'>
                <a href="">About</a>
                <a href="">Skills</a>
                <a href="">Education</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </div>
        <p className="text-base">Copyright © 2024 - All right reserved</p>
        </div>
    );
};

export default Footer;