import project1 from '../assets/Images/project1.png'
import project2 from '../assets/Images/project2.png'
import project3 from '../assets/Images/project3.png'

const Projects = () => {
    return (
        <div className="my-16">
            <h1 className="text-4xl text-center font-bold font-primary mb-10">Projects</h1>
            {/* card container */}
            <div className='grid grid-cols-2 gap-6'>
                {/* project 1 */}
                <div className="card rounded-sm  card-compact bg-base-100  shadow-xl">
                    <figure>
                        <img className='h-[280px] w-full'
                            src={project1}
                            alt="" />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title font-primary text-2xl">Project : Hotel Luxury</h2>
                        <h2 className=" font-primary text-xl"><span className='font-bold'>Live Link :</span> <a href="https:hotel-luxury-6656d.web.app" className='text-sky-600 underline'>https:hotel-luxury-6656d.web.app</a> </h2>

                        <h2 className=" font-primary text-xl"><span className='font-bold'>Github Code :</span> <a href="https://github.com/Boniaminshawon/Hotel_Luxury_Client" className='text-sky-600 underline'>Client Side  </a>   <a href="" className='text-sky-600 underline ml-6'> Server Side</a> </h2>

                        <p className='text-lg font-secondary'><span className='font-bold '>Overview:</span>This project involves developing a hotel booking website featuring integrated map locations, user reviews, and a price range filter for rooms. Users can register and log in for a personalized experience and access private routes requiring authentication. The website is fully responsive across all devices, ensuring a seamless user experience.
                            {/* Additionally, it includes robust error handling, directing users to a dedicated error page with options to return to the home page in case of any issues. */}
                        </p>
                        <div className='text-base font-secondary'><span className='font-bold font-primary text-xl'>Key Features:</span> <br />
                            <span className='font-semibold'>Room Review System:-</span>
                            Users can post reviews for the rooms they have booked. This review system will help future users make informed decisions based on previous guests' experiences. <br />

                            <span className='font-semibold'>Room Price Range Filter:-</span>
                            The website includes a filter option allowing users to search for rooms within a specified price range. This feature ensures users can find accommodations that fit their budget. <br />

                            <span className='font-semibold'>User Registration and Login:-</span>
                            Users can register and log in to the website to access a personalized experience. This includes features such as saving favorite hotels, booking history, and faster checkouts.
                        </div>
                        <div className=' text-lg font-secondary'>
                            <span className='font-bold font-primary text-xl '>Technology: </span>
                            HTML , Tailwind CSS , React.js , Node.js , Express.js , Firebase Auth , Mongodb Atlas .

                        </div>
                    </div>
                </div>
                {/* project 2 */}
                <div className="card  card-compact bg-base-100 rounded-sm shadow-xl">
                    <figure>
                        <img className='h-[280px] w-full'
                            src={project2}
                            alt="" />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title font-primary text-2xl">Project : AItech</h2>
                        <h2 className=" font-primary text-xl"><span className='font-bold'>Live Link :</span> <a href="https:ai-tech-ae69b.web.app" className='text-sky-600 underline'>https:ai-tech-ae69b.web.app</a> </h2>

                        <h2 className=" font-primary text-xl"><span className='font-bold'>Github Code :</span> <a href="https://github.com/Boniaminshawon/AItech-client" className='text-sky-600 underline'>Client Side  </a>   <a href="" className='text-sky-600 underline ml-6'> Server Side</a> </h2>

                        <p className='text-lg font-secondary'><span className='font-bold '>Overview:</span>This project is an employee management platform with three user roles (Admin, HR, Employee) to ensure secure operations. Admins can view verified users, adjust salaries, promote employees, and terminate accounts. HR personnel can verify employees, manage salaries via Stripe, view employee profiles with statistics, and track work histories. Employees can log work details and view payment history.
                        </p>
                        <div className='text-base font-secondary'><span className='font-bold font-primary text-xl'>Key Features:</span> <br />
                            <span className='font-semibold'>Admin Dashboard:-</span>
                            Admins can view all verified employees and HR personnel, adjust salaries (increase only), promote employees to HR, and fire employees or HR members, preventing further access to the site. <br />

                            <span className='font-semibold'>HR Verification & Salary Management:-</span>
                            HR personnel can verify/unverify employees and manage salary payments securely via Stripe. <br />

                            <span className='font-semibold'>Employee Work & Payment Management:-</span>
                            Employees can log their work information and view detailed payment histories, facilitating easy tracking and transparency.
                        </div>
                        <div className=' text-lg font-secondary'>
                            <span className='font-bold font-primary text-xl '>Technology: </span>
                            HTML , Tailwind CSS , React.js , Node.js , Express.js , Firebase Auth , Mongodb Atlas .

                        </div>
                    </div>
                </div>
            </div>
           <div className='flex justify-center mt-6'>
           <div className='w-2/3'>
                {/* project 3 */}
                <div className="card rounded-sm  card-compact bg-base-100  shadow-xl">
                    <figure>
                        <img className='h-[340px]  w-full'
                            src={project3}
                            alt="" />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title font-primary text-2xl">Project : Art and Crafts</h2>
                        <h2 className=" font-primary text-xl"><span className='font-bold'>Live Link :</span> <a href="https:https://handi-crafts.web.app" className='text-sky-600 underline'>https:https://handi-crafts.web.app</a> </h2>

                        <h2 className=" font-primary text-xl"><span className='font-bold'>Github Code :</span> <a href="https://github.com/Boniaminshawon/Handi-Crafts-Client" className='text-sky-600 underline'>Client Side  </a>   <a href="" className='text-sky-600 underline ml-6'> Server Side</a> </h2>

                        <p className='text-lg font-secondary'><span className='font-bold '>Overview:</span>This project is a website dedicated to Jute and Wooden Crafts within the Art and Crafts category. Users can browse various jute and wooden handicraft items and view all available data in the "All Art and Crafts" section. Registered users can create and display their own crafts in the "My Art and Craft" section, with the ability to filter their added items. The website includes private routes that require users to log in for access, offering login options via Google and GitHub for convenience. The site is fully responsive, ensuring an optimal experience across all devices. 
                      
                        </p>
                        <div className='text-base font-secondary'><span className='font-bold font-primary text-xl'>Key Features:</span> <br />
                            <span className='font-semibold'>Art and Crafts Display:-</span>
                            Users can showcase jute and wooden handicraft items under the dedicated Art and Crafts category, providing a comprehensive view of available crafts. <br />

                            <span className='font-semibold'>User-Created Content:-</span>
                            Registered users can create and manage their own crafts, displaying them in the "My Art and Craft" section for personalized showcasing. <br />

                            <span className='font-semibold'>Authentication and Authorization:-</span>
                            Secure login functionality with options to login via Google and GitHub, ensuring access to private routes and a personalized experience.
                        </div>
                        <div className=' text-lg font-secondary'>
                            <span className='font-bold font-primary text-xl '>Technology: </span>
                            HTML , Tailwind CSS , React.js , Node.js , Express.js , Firebase Auth , Mongodb Atlas .

                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Projects;