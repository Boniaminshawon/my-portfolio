import university from '../assets/Images/University_of_Chittagong_logo.svg'
const Education = () => {
    return (
        <div id='education' className="md:my-16 my-8">
               <h1 className="md:text-4xl text-3xl text-center font-bold font-primary mb-12 text-[#2d4a8a]">Education</h1>
               <div className='flex justify-center items-center flex-col md:flex-row gap-5 md:gap-28'>
                <div><img className='h-[200px]' src={university} alt="" /></div>
                <div className='font-secondary space-y-2 md:space-y-4 font-medium border-2 border-dotted py-5 md:py-12 px-5 rounded-2xl shadow-2xl'>
                    <h1 className='text-lg md:text-xl'>Studying at B.S.S (Honours) </h1>
                    <hr />
                    <h2 className='text-lg md:text-xl'>Department Of Public Administration</h2>
                    <hr />
                    <h3 className='text-lg md:text-xl'>University Of Chittagong</h3>
                    <hr />
                </div>
               </div>
        </div>
    );
};

export default Education;