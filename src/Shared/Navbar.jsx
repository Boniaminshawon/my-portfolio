
import resume from '../assets/Images/Md. Boni Amin_Resume.pdf'

const Navbar = () => {
    return (
        <div className="navbar lg:px-8 bg-[#FFFFFFCC] text-[#2d4a8a] fixed z-10 font-secondary font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <a href="" className="md:text-2xl text-xl">Boni Amin</a>
            </div>
            <a  href={resume} download={'resume'} className='px-2 py-1 rounded md:hidden flex justify-end  bg-[#2d4a8a] text-white text-base font-secondary  border border-black '> Resume</a>
            <div className="navbar-end hidden lg:flex">
           
                <ul className="menu menu-horizontal px-1 text-lg">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>
            </div>
            <div className="">

            </div>
        </div>
    );
};

export default Navbar;