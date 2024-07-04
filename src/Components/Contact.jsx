import { MdAttachEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="my-16 ">
            <h1 className="text-4xl text-center font-bold font-primary mb-12">Contact With Me</h1>

            <div>
                {/* form */}
                <div className="hero ">
                    <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                        <div className=" flex-1 font-primary text-[26px] font-semibold space-y-7 pl-10" >
                            <h1 className="flex items-center gap-2 text-blue-600 "> <FaFacebook className="text-3xl "></FaFacebook> Facebook</h1>
                            <h1 className="flex items-center gap-2 "><FaGithub className="text-3xl "></FaGithub> GitHub</h1>
                            <h1 className="flex items-center gap-2  text-blue-500 "> <FaLinkedin className="text-3xl "></FaLinkedin>Linkedin</h1>
                           
                            <h1 className="flex items-center gap-2 "><MdAttachEmail className="text-3xl text-red-600"></MdAttachEmail> boniamin2971@gmail.com</h1>
                            <h1 className="flex items-center gap-2 "><BiSolidPhoneCall className="text-3xl text-green-600"></BiSolidPhoneCall> +8801876758706</h1>
                            <h1 className="flex items-center gap-2 "><GrLocation className="text-3xl text-orange-500"></GrLocation> Chattogram, Bangladesh</h1>
                           
                        </div>

                        <div className="card flex-1 w-full   font-secondary  rounded-md  p-12 shrink-0 shadow-2xl">
                            <p className="text-lg">If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
                            <form className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl ">Name:</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl ">Email:</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl ">Message:</span>
                                    </label>
                                    <textarea
                                        placeholder="Type Your Massage"
                                        className="textarea textarea-bordered textarea-lg w-full "></textarea>

                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary text-xl">Send Message</button>
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