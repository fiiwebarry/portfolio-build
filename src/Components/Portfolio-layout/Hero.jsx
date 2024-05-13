import twitter from "/src/Assets/Icons/twitterIcon.png";
import github from "/src/Assets/Icons/gittyhub.png";
import linkedin from "/src/Assets/Icons/linkedin-icon.png"
import Bulletpoint from "/src/Assets/Icons/Bullet.svg";
import Img from "/src/Assets/Images/Hero-Image.png";
import resume from "/src/Assets/Brands/Fiiwe Barisanem's Resume.pdf"
import { BiSolidFolderOpen } from 'react-icons/bi';
import { FaHandsClapping } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file


const Hero = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="overflow-x-clip">
            <div className="container mx-auto w-[85%]">
                <div className="lg:flex  lg:flex-row md:flex md:flex-row flex flex-col-reverse  md:gap-[20px] lg:gap-[160px] lg:justify-between lg:pt-[150px] md:pt-[90px] lg:mb-[50px] mb-[20px]">
                    <div className=" mt-[40px] lg:w-[600px] ">
                        <div className="flex gap-4">
                            <h2 className="lg:text-[56px] md:text-[36px] text-[25px] font-bold text-[#030712] font-open-sans lg:mt-[50px] md:mt-[50px]" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">Hi, I’m Fiiwe Barry</h2>
                            <span className="lg:text-[58px] text-[30px]  md:mt-[50px]"><FaHandsClapping /></span>
                        </div>
                        <div className="font-garamond lg:text-[23px] md:text-[18px] text-[20px]  lg:mt-0 mt-2 lg:w-[713px] md:w-[400px] lg:h-[132px] text-[#030712] font-normal">
                            <p className="lg:mt-4" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                I am a Frontend developer with a
                                focus on creating and occasionally designing exceptional
                                digital experiences that are fast, accessible, visually
                                appealing and responsive.
                            </p>
                        </div>
                        <div className="flex gap-[15px] lg:mt-4 mt-4 d">
                            <button className="bg-[#F9FAFB] rounded-md shadow-md border font-bold border-[#F9FAFB] lg:w-[150px] lg:p-[10px]  p-[5px] text-[15px] lg:text-[20px] font-open-sans" onClick={() => window.location.href = '#contact'}>Hire Me</button>
                            <div className='bg-[#1F2937] lg:mt-1 flex gap-2 rounded-md lg:p-[10px]  p-[7px] shadow-md font-open-sans  text-[18px] lg:text-[22px] font-semibold text-[#F9FAFB]'>
                                <a className="mt-1 lg:text-[20px] text-[15px]" href={resume} download=" "> Download Resume </a>
                                <span className="mt-2 lg:text-[20px] text-[15px] "><BiSolidFolderOpen /></span>
                            </div>
                        </div>
                        <div className="flex lg:mt-8 mt-7 gap-2">
                            <img className="bullet-point" src={Bulletpoint} />
                            <p className="lg:text-[20px]  text-[18px] font-open-sans font-bold">Available for new projects</p>
                        </div>
                        <div className="flex lg:mt-7 mt-3 lg:gap-5 gap-2">
                            <a className="lg:w-[45px] lg:h-[45px]  w-[35px] h-[35px]" href="https://github.com/fiiwebarry"><img className="github" src={github} /> </a>
                            <a className="lg:w-[45px] lg:h-[45px]  w-[35px] h-[35px]" href=""><img className="twitter-icon" src={twitter} /></a>
                            <a className="lg:w-[45px] lg:h-[45px]  w-[35px] h-[35px]" href="https://www.linkedin.com/in/barisanem-fiiwe-08659992/"><img className="linkedin-icon" src={linkedin} /></a>
                        </div>
                    </div>
                    <div className="lg:mt-[70px] lg:w-[600px] md:mt-[100px] mt-[90px] ">
                        <img className=" rounded-full shadow-lg border border-[#F9FAFB] lg:w-[500px]" data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="1500" src={Img} />
                    </div>
                </div>
            </div> </div >
    )
}
export default Hero;