import icon from "/src/Assets/Icons/react.svg";
import icon2 from "/src/Assets/Icons/javascript.svg";
import icon3 from "/src/Assets/Icons/css.png";
import icon5 from "/src/Assets/Icons/figma.svg";
import icon6 from "/src/Assets/Icons/tailwindcss.svg";
import icon7 from "/src/Assets/Icons/git.png";
import icon8 from "/src/Assets/Icons/bootstrap.svg";
import icon9 from "/src/Assets/Icons/html5.png";
import icon10 from "/src/Assets/Icons/Next.png";
import { BsRobot } from "react-icons/bs";
import {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file

const Batch = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="lg:pt-[70px] lg:pb-[90px] pt-[20px] pb-[20px]">

            <div className=" gap-2 rounded-md w-[190px] h-[70px]  p-2 flex mx-auto justify-center pt-[5px] bg-[#F9FAFB]  border border-[#F9FAFB] shadow-2xl">
                    <button className="lg:text-[25px] font-lobster font-bold mt-4"> My Skill Set  </button>
                    <span className="mt-4 "><BsRobot  className="text-[32px]" /></span>

                </div>

            <div className=" mt-[30px] lg:mt-[60px] container mx-auto w-[85%] lg:flex lg:gap-[90px] gap-[16px] md:gap-[60px] md:flex flex lg:flex-row md:flex-row flex-wrap lg:w-[100%] md:w-1/2 w-1/2" >
                <div className="flex-column">
                    <div>
                        <img src={icon} alt="" data-aos="zoom-in-up" />
                    </div>

                    <div className="flex justify-center font-open-sans font-semibold  text-[16px] lg:text-[20px]"><h3>React</h3></div>
                </div>
                <div>
                    <div>
                        <img src={icon2} alt="" data-aos="zoom-in-up"/>
                    </div>
                    <div className="flex justify-center font-open-sans font-semibold  text-[16px] lg:text-[20px]">
                        <h3>Javascript</h3>
                    </div>

                </div>
                <div className="flex-column">
                    <div>
                        <img src={icon3} alt="" data-aos="zoom-in-up" />
                    </div>
                    <div className="flex justify-center font-open-sans font-semibold  text-[16px] lg:text-[20px]">
                        <h3>CSS</h3>
                    </div>

                </div>
                <div>
                    <img src={icon10} alt="" data-aos="zoom-in-up" />
                    <h3 className="flex justify-center font-open-sans font-semibold  text-[16px] lg:text-[20px]">Next.Js</h3>
                </div>
                <div>
                    <img src={icon5} alt="" data-aos="zoom-in-up" />
                    <h3 className="flex justify-center font-open-sans font-semibold text-[16px] lg:text-[20px]">Figma</h3>
                </div>
                <div>
                    <img src={icon6} alt="" data-aos="zoom-in-up" />
                    <h3 className="flex justify-center font-open-sans font-semibold  text-[16px] lg:text-[20px]">Tailwind CSS</h3>
                </div>
                <div className="flex-column">
                    <div>
                        <img src={icon7} alt="" data-aos="zoom-in-up" />
                    </div>
                    <div>
                        <h3 className="flex justify-center font-open-sans font-semibold text-[16px] lg:text-[20px]">Git</h3>
                    </div>

                </div>
                <div>
                    <img src={icon8} alt="" data-aos="zoom-in-up" />
                    <h3 className="flex justify-center font-open-sans font-semibold text-[16px] lg:text-[20px]">Bootstrap</h3>
                </div>
                <div>
                    <img src={icon9} alt=""  data-aos="zoom-in-up"/>
                    <h3 className="flex justify-center font-open-sans font-semibold text-[16px] lg:text-[20px]">HTML</h3>
                </div>



            </div>

        </div>


    )
}
export default Batch;