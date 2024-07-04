import university from '../assets/Images/University_of_Chittagong_logo.svg'
const Education = () => {
    return (
        <div className="my-16">
               <h1 className="text-4xl text-center font-bold font-primary mb-12">Education</h1>
               <div className='flex justify-center items-center gap-28'>
                <div><img src={university} alt="" /></div>
                <div className='font-secondary space-y-4 font-medium border-2 border-dotted py-12 px-5 rounded-2xl shadow-2xl'>
                    <h1 className='text-xl'>Studying at B.S.S (Honours) </h1>
                    <hr />
                    <h2 className='text-xl'>Department Of Public Administration</h2>
                    <hr />
                    <h3 className='text-xl'>University Of Chittagong</h3>
                    <hr />
                </div>
               </div>
        </div>
    );
};

export default Education;