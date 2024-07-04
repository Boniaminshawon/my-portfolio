
import picture from '../assets/Images/boni.png'
import resume from '../assets/Images/Md. Boni Amin_Resume.pdf'
const Banner = () => {
    return (
        <div className='py-16 font-secondary bg-red-400'>
            <div className='flex justify-between'>
                <div className='pl-20  flex-1 flex flex-col justify-center'>
                    <h2 className='font-primary font-semibold text-4xl mb-4'>Boni Amin Shawon</h2>
                    <p className='text-2xl'> A Front-end Web Developer </p>
                    <p className='text-lg mt-8'>I am Hardworking and passionate  Frontend Web Developer with a keen interest in full stack web development. Known for being a quick learner and adaptable, always ready to tackle new challenges with energy and innovation. Aspiring to become a skilled Software Engineer, committed to ongoing learning and achieving excellence in every project. </p>
                    <a href={resume} download={'resume'} className='btn mt-7 w-1/3 border border-black '>Download Resume</a>

                </div>
                <div className='  flex-1 flex justify-center'><img src={picture} alt="" /></div>
            </div>
        </div>
    );
};

export default Banner;