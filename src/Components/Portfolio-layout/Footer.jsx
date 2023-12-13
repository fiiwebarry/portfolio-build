
import twitter from "/src/Assets/Icons/twitterIcon.png";
import github from "/src/Assets/Icons/gittyhub.png";
import linkedin from "/src/Assets/Icons/linkedin-icon.png"
import { GiBee } from 'react-icons/gi';

const Footer = () => {

    return (<section className="lg:pb-[30px] pb-[20px]">
        <div className="container mx-auto w-[85%]" >
        <div className="flex mt-2"> 
                        <h1 className="font-lobster  lg:text-[40px] text-[20px] text-[20px] ">FIIWE</h1>
                        <span className="ml-[10px] text-[20px] text-[#000]"><GiBee /></span>
                         
                         </div>

            <div className="flex justify-center">
                

                <div className="nav-deal">
                    <div className="drop-down">
                    <ul className=" lg:flex md:flex flex gap-4 lg:mt-0 md:mt-5  lg:p-5 justify-center lg:gap-[90px] md:gap-[35px] font-open-sans lg:text-[18px] md:text-[15px] font-semibold text-[#1F2937]">
                                    <li><a href="#About">About</a></li>
                                    <li><a href="#project">Project</a></li>
                                    <li><a href="#testimonial">Testimonial</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                    </div>


                </div>
            </div>
            <div className="flex gap-4 justify-center">
                <a href="https://github.com/fiiwebarry"><img className="w-[50px]" src={github} /> </a>
                <a href=""><img className="w-[50px]" src={twitter} /></a>
                <a href="https://www.linkedin.com/in/barisanem-fiiwe-08659992/"><img className="w-[50px]" src={linkedin} /></a>

            </div>

        </div>
    </section>)


}
export default Footer;