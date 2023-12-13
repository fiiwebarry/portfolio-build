
import Img from "/src/Assets/Images/Rectangle.png";
import img2 from "/src/Assets/Images/shade.png";
import star from "/src/Assets/Icons/Star.png";
import { GiBookmarklet } from 'react-icons/gi';
import {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file


const About = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="About" className="bg-[#F9F9F9]">

            <div className="container mx-auto w-[85%] pt-[40px] pb-[70px]">

                <div className=" gap-2 rounded-md w-[170px] h-[70px]  p-2 flex mx-auto justify-center pt-[5px] bg-[#F9FAFB]  border border-[#F9FAFB] shadow-2xl">
                    <button className="lg:text-[25px] font-lobster font-bold"> About me </button>
                    <span className="mt-4 "><GiBookmarklet className="text-[32px]" /></span>

                </div>

                <div className="lg:flex lg:flex-row md:flex-col  md:flex flex-col lg:gap-[200px] mt-[60px]">

                    <div className="relative">
                        <div className="" data-aos="flip-right" >
                            <img className=" md:flex md:justify-center  md:mx-auto lg:w-[850px] w-[850px] md:w-[400px]" src={Img} alt=""  />
                        </div>
                        <div className="absolute top-0 left-[50px] lg:flex md:flex hidden">
                            <img className="shade-img" src={img2} alt="" />
                        </div>

                    </div>
                    <div className="">
                        <p className=" lg:mt-0 md:mt-6 mt-3 text-[#111827] lg:text-[20px]  text-[18px] font-normal text-justify font-garamond  lg:w-[800px] md:w-[600px]" data-aos="fade-left">
                            My journey into the world of web development began with an insatiable curiosity for technology and a desire to create things that impact people's lives positively.
                            I'm fascinated by the ever-evolving landscape of web technologies,
                            and I embrace the challenge of staying up-to-date with the latest trends and best practices.
                        </p>
                        <h2 className=" mt-2 text-[orange] lg:text-[34px]  text-[20px] font-Roboto-Serif font-semibold" data-aos="fade-left"> What Sets Me Apart?:</h2>
                        <div className="flex gap-2 mt-2">
                            <img className="w-[25px] h-[25px]" src={star} alt=""  data-aos="fade-left"/>
                            <span className="lg:hidden md:hidden flex text-[orange] text-[20px] font-Roboto-Serif font-semibold" data-aos="fade-left">User-Centric Approach:</span>
                            <div className="lg:flex md:flex hidden" data-aos="fade-right"><p className="  text-[#111827] lg:text-[20px] text-[18px] font-normal text-justify font-garamond  md:w-[600px] lg:w-[800px]"><span className="text-[orange] text-[20px] font-Roboto-Serif font-semibold">User-Centric Approach:</span><br /> I believe in putting the user at the center of every project.
                                Understanding their needs and behaviors is key to crafting intuitive and delightful user experiences.</p></div>
                            
                        </div>
                        <p className="lg:hidden md:hidden flex ml-[10px] text-[#111827] lg:text-[20px] text-[18px] font-normal text-justify font-garamond lg:w-[800px] md:w-[600px]" data-aos="fade-left">I believe in putting the user at the center of every project.
                                Understanding their needs and behaviors is key to crafting intuitive and delightful user experiences.</p>

                       
                       
                        <div className="flex mt-2 gap-2" >

                            <img className="w-[25px] h-[25px]" src={star} alt=""  data-aos="fade-left"/>
                            <span className="lg:hidden md:hidden flex text-[orange] text-[20px] font-Roboto-Serif font-semibold" data-aos="fade-right">Responsive Design:</span>
                            <div className="lg:flex md:flex hidden">
                            <p className="text-[#111827] text-[20px] font-normal text-justify font-garamond" data-aos="fade-left">
                                <span className=" text-[orange] text-[20px] font-Roboto-Serif font-semibold">Responsive Design:</span><br />In today's mobile-driven world, responsive design is not just a feature but a necessity.
                                I take great care in ensuring that my creations look and function flawlessly across all devices and screen sizes.

                            </p>
                            </div>
                            
                        </div>
                        <p className="ml-[10px] lg:hidden md:hidden flex text-[#111827] text-[18px] font-normal text-justify font-garamond" data-aos="fade-left">
                                In today's mobile-driven world, responsive design is not just a feature but a necessity.
                                I take great care in ensuring that my creations look and function flawlessly across all devices and screen sizes.

                            </p>



                        <div className="flex mt-2 gap-2">
                            <img className="w-[25px] h-[25px]" src={star} alt="" data-aos="fade-left"/>
                            <span className=" lg:hidden md:hidden flex text-[orange] text-[20px] font-Roboto-Serif font-semibold" data-aos="fade-left">Code Craftsmanship:</span>
                               <div className="lg:flex md:flex hidden">
                               <p className="text-[#111827] text-[20px] font-normal text-justify font-garamond" data-aos="fade-left">
                                <span className="text-[orange] text-[20px] font-Roboto-Serif font-semibold" data-aos="fade-left">Code Craftsmanship:</span><br />
                                I take pride in writing well-structured, scalable, and maintainable code.
                                Clean code is not just aesthetically pleasing;
                                it contributes to better collaboration and faster development cycles.</p>
                               </div>
                               
                        </div>
                         <p className="ml-[10px] text-[18px] mt-2 lg:hidden md:hidden flex text-[#111827]  font-normal text-justify font-garamond" data-aos="fade-left">
                                
                                I take pride in writing well-structured, scalable, and maintainable code.
                                Clean code is not just aesthetically pleasing;
                                it contributes to better collaboration and faster development cycles.</p>
                        </div>
                </div>


            </div>


        </div >











    )


}

export default About;