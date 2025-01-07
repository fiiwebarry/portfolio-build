import { FaSquareXTwitter } from "react-icons/fa6";
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SiMailchimp } from "react-icons/si";
import { useEffect, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file



const Contact = () => {

    const handleEmailClick = () => {
        window.location.href = "mailto:fiiwebarry@yahoo.com";
    };

    const handleWhatsappClick = () => {
        window.location.href = "https://wa.me/2348136719957";
    };

    const handleTwitterClick = () => {
        window.open("https://twitter.com/FIIWEBARRY9", "_blank");
    };

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        message: "",
    })

    const [submitData, setSubmitData] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmitData = (e) => {
        e.preventDefault();
        const formValidation = {};

        if (!formData.username.trim()) {
            formValidation.username = "name is required"
        }
        if (!formData.email.trim()) {
            formValidation.email = "email is required"
        }
        else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email)) {
            formValidation.email = "email is not valid"
        }

        if (!formData.message.trim()) {
            formValidation.message = "message is required"
        }
        else if (formData.message.length > 40) {
            formValidation.message = "maximum character is 40 "
        }

        setSubmitData(formValidation)
    }
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section id="contact" className="bg-[#F9FAFB] overflow-x-clip">
            <div className="">
                <div className=" mx-auto w-[85%] lg:pt-[40px] pt-[40px] lg:pb-[50px] pb-[30px] ">
                    <div className=" gap-2  hover:bg-Hover-tint hover:text-white rounded-md lg:w-[270px]  items-center w-[190px] lg:h-[70px]   p-2 flex mx-auto justify-center pt-[5px]  bg-[#F9FAFB]  border border-[#F9FAFB] shadow-2xl">
                        <button className="lg:text-[25px] lg:mt-0 mt-1 font-georgia font-bold"> Connect Today!</button>
                        <span className=" "><SiMailchimp className="text-[32px]" /></span>
                    </div>
                    <div className="  container mx-auto lg:flex  lg:flex-row md:flex-row  justify-center md:flex flex  flex-col lg:gap-[100px] md:gap-[100px] lg:mt-9">
                        <div className="mt-[20px] lg:w-[35%]">
                            <div className=" flex flex-col gap-6 ">
                                <div onClick={handleEmailClick} className="rounded-2xl p-[45px]  shadow-xl  hover:bg-Hover-tint hover:text-white bg-[#ffff] lg:w-[397px]  " data-aos="flip-right">
                                    <div>
                                        <span className="flex justify-center mx-auto text-[29px]"><FaEnvelope /></span>
                                        <p className="flex justify-center mx-auto font-semibold lg:text-[22px] mt-3 font-georgia">Email</p>
                                    </div>
                                    <p className="flex justify-center mx-auto font-semibold lg:text-[22px] mt-3 font-georgia">fiiwebarry@yahoo.com</p>
                                </div>
                                <div onClick={handleWhatsappClick} className="rounded-2xl p-[45px]  shadow-xl  hover:bg-Hover-tint hover:text-white bg-[#ffff] lg:w-[397px]  " data-aos="flip-right">
                                    <div>
                                        <span className="flex justify-center mx-auto text-[29px]"><FaWhatsapp /> </span>
                                        <p className="flex justify-center mx-auto font-semibold lg:text-[22px] mt-3 font-georgia">WhatsApp</p>
                                    </div>
                                    <p className="flex justify-center mx-auto font-semibold lg:text-[22px] mt-3 font-georgia">+2348136719957</p>
                                </div>
                                <div onClick={handleTwitterClick} className="rounded-2xl p-[45px]  shadow-xl  hover:bg-Hover-tint hover:text-white bg-[#ffff] lg:w-[397px]  " data-aos="flip-right">
                                    <div>
                                        <span className="flex justify-center mx-auto text-[29px]"> <FaSquareXTwitter /></span>
                                        <p className="flex justify-center mx-auto font-semibold lg:text-[22px] mt-3 font-georgia">Twitter</p>
                                    </div>
                                    <p className="flex justify-center mx-auto font-semibold lg:text-[22px] mt-3 font-georgia">FIIWEBARRY9</p>
                                </div>


                            </div>
                        </div>
                        <form className=" lg:w-[60%] mt-[14px]" onSubmit={handleSubmitData}
                        >

                            <label className="font-semibold lg:text-[22px] font-georgia" htmlFor="name"> Name</label><br />
                            <input type="text"
                                className=" font-semibold border-gray-300 border  font-open-sans rounded-md p-2 lg:w-[90%] w-[320px] h-[50px]"
                                name="username"
                                placeholder="Name"
                                onChange={handleChange} />
                            <br />
                            {submitData && <span className="text-[red] font-bold">{submitData.username}</span>}
                            <br /><br />
                            <label className="font-semibold   lg:text-[22px] font-georgia" htmlFor="">Email</label><br />
                            <input className="font-semibold  border-gray-300 border  font-open-sans rounded-md  p-2 lg:w-[90%] h-[50px] w-[320px]"
                                type="text"
                                name="email"
                                placeholder="Mail"
                                onChange={handleChange}

                            />
                            <br />
                            {submitData && <span className="text-[red] font-bold">{submitData.email}</span>}
                            <br /><br />

                            <label className="font-semibold lg:text-[22px] font-open-sans" htmlFor="">Message</label><br />
                            <textarea
                                name="message"
                                onChange={handleChange}
                                className="font-semibold  border-gray-300 border  font-open-sans p-3 rounded-2xl lg:w-[90%] w-[320px] h-[250px] "
                                placeholder="insert your Message" >
                            </textarea>
                            <br />
                            {submitData && <span className="text-[red] font-bold">{submitData.message}</span>}
                            <button type="submit" className="  mt-[30px] flex bg-[#000]  hover:bg-Hover-tint hover:text-white text-[#fff] text-[24px] p-3 rounded font-open-sans font-semibold">Send Message
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M23.9256 1.10643C23.6665 0.849188 23.3415 0.66835 22.9864 0.583787C22.6312 0.499224 22.2596 0.51421 21.9124 0.627098L1.8764 7.31033C1.50481 7.42807 1.17645 7.6533 0.932785 7.95755C0.689124 8.26181 0.541092 8.63145 0.507387 9.01979C0.473683 9.40812 0.555816 9.79774 0.743415 10.1394C0.931014 10.4811 1.21566 10.7595 1.56141 10.9395L9.87436 15.0481L13.9829 23.3884C14.148 23.7149 14.4007 23.989 14.7127 24.18C15.0247 24.3711 15.3837 24.4716 15.7496 24.4703H15.8865C16.2783 24.4415 16.6524 24.2955 16.9601 24.0512C17.2679 23.807 17.495 23.4759 17.6121 23.1008L24.3912 3.11961C24.5123 2.7744 24.5328 2.40191 24.4503 2.0455C24.3679 1.68909 24.1859 1.36343 23.9256 1.10643ZM2.7255 9.20026L20.2142 3.36613L10.5043 13.076L2.7255 9.20026ZM15.8454 22.3065L11.956 14.5277L21.6659 4.81781L15.8454 22.3065Z" fill="white" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div ></div>

        </section>
    )
}

export default Contact;