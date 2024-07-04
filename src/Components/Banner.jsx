
import picture from '../assets/Images/boni.png'
import resume from '../assets/Images/Md. Boni Amin_Resume.pdf'

const Banner = () => {
    
    return (
        <div
        id='about'
        className='lg:py-16 py-5 font-secondary '>
  
            <div className='flex md:justify-between flex-col-reverse gap-5 md:flex-row'>
                <div className='md:pl-20 px-2  flex-1 flex flex-col justify-center md:text-start text-center'>
                    <h2 className='font-primary font-semibold md:text-4xl text-2xl mb-4 text-[#2d4a8a]'>Boni Amin Shawon</h2>
                    <p className='md:text-2xl text-xl font-medium'> A Front-end Web Developer </p>
                    <p className='md:text-lg text-base md:mt-8 mt-3 '>I am Hardworking and passionate  Frontend Web Developer with a keen interest in full stack web development. Known for being a quick learner and adaptable, always ready to tackle new challenges with energy and innovation. Aspiring to become a skilled Software Engineer, committed to ongoing learning and achieving excellence in every project. </p>
    
                    <a href={resume} download={'resume'} className='btn  bg-[#2d4a8a] text-white rounded text-lg font-secondary md:mt-7 mt-4 md:w-1/3 border border-black '>Download Resume</a>

                </div>
                <div className='  flex-1 flex justify-center'><img className='h-[300px] md:h-full' src={picture} alt="" /></div>
            </div>
        </div>
    );
};

export default Banner;