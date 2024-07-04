import { useRef } from 'react';
import { MdAttachEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_6sd6oh8', 'template_kpc44wb', 
            form.current, {
            publicKey: 'mVMZUUxqWR6j3nB_k',
          })
          .then(
            () => {
          
              toast.success('Successfully send your message!')
            },
            (error) => {
              console.log('FAILED...', error.text);
              toast.error('Sorry! Something have wrong . Please try again.')
            },
          );
      };
    return (
        <div id='contact' className="md:my-16  my-8">
            <h1 className="text-3xl md:text-4xl text-center font-bold font-primary mb-5 md:mb-12 text-[#2d4a8a]">Contact With Me</h1>
            <Toaster />
            <div>
                {/* form */}
                <div className="hero ">
                    <div className="hero-content flex-col gap-5 md:gap-10 lg:flex-row-reverse">
                        <div className=" flex-1 font-primary text-xl md:text-[26px] font-semibold md:space-y-8 space-y-3 md:pl-10 " >
                            <h1  ><a className="flex items-center gap-2 text-blue-600 " href="https://www.facebook.com/mdboni.amin.71271"> <FaFacebook className="text-2xl md:text-3xl "></FaFacebook> Facebook</a></h1>

                            <h1 > <a className="flex items-center gap-2 " href="https://github.com/Boniaminshawon"><FaGithub className="text-2xl md:text-3xl "></FaGithub> GitHub</a></h1>
                           
                            <h1 ><a  className="flex items-center gap-2  text-blue-500 " href="https://linkedin.com/in/md-boni-amin/"> <FaLinkedin className="text-2xl md:text-3xl "></FaLinkedin>Linkedin</a></h1>
                            
                           
                            <h1 className="flex items-center gap-2 "><MdAttachEmail className="text-2xl md:text-3xl text-red-600"></MdAttachEmail> boniamin2971@gmail.com</h1>
                            <h1 className="flex items-center gap-2 "><BiSolidPhoneCall className="text-2xl md:text-3xl text-green-600"></BiSolidPhoneCall> +8801876758706</h1>
                            <h1 className="flex items-center gap-2 "><GrLocation className="text-2xl md:text-3xl text-orange-500"></GrLocation> Chattogram, Bangladesh</h1>
                           
                        </div>

                        <div className="card flex-1 w-full   font-secondary  rounded-md p-3 md:p-12 shrink-0 shadow-2xl">
                            
                            <p className="md:text-lg">If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-lg md:text-xl ">Name:</span>
                                    </label>
                                    <input type="text" name="user_name" placeholder="Enter Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-lg md:text-xl ">Email:</span>
                                    </label>
                                    <input type="email" name="user_email" placeholder="Enter Your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-lg md:text-xl ">Message:</span>
                                    </label>
                                    <textarea
                                        placeholder="Type Your Massage" name='message'
                                        className="textarea textarea-bordered textarea-lg w-full "></textarea>

                                </div>

                                <div className="form-control mt-6">
                                    <button  type="submit" value="Send" className="btn btn-primary bg-[#2d4a8a] text-white text-xl">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;