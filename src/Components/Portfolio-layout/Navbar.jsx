import { useContext, useState } from "react";
import moon from "/src/Assets/Icons/moon-icon.png";
import sun from "/src/Assets/Icons/Sun-icon.png";
import { GiBee } from 'react-icons/gi';
import { GiHamburgerMenu } from "react-icons/gi";
//  import { ThemeContext } from "../ThemeContext";
import MobileNavbar from '/src/Components/Portfolio-layout/MobileNavbar';

const Navbar = () => {

    //  const { toggleTheme } = useContext(ThemeContext);
    //  const { isDarkMode } = useContext(ThemeContext);

    const [isOpen, SetIsOpen] = useState(false);


    const ToggleHamburger = () => {

        SetIsOpen(!isOpen);

    }
    return (

        <section className=" bg-[#F9FAFB] shadow-lg  fixed w-[100%]  z-50">
            <nav className="container mx-auto w-[85%] lg:p-5 md:p-5">
                <div className=" ">
                    <div className="flex  lg:justify-between md:gap-[140px]">
                        <div className="flex mt-2"> 
                        <h1 className="font-lobster  lg:text-[40px] text-[30px] text-[40px] ">FIIWE</h1>
                        <span className="ml-[10px] text-[40px] text-[#000]"><GiBee /></span>
                         
                         </div>

                        <div className="flex">
                            <div className="">
                                <ul className=" lg:flex md:flex hidden lg:mt-0 md:mt-5  lg:p-5 justify-center lg:gap-[90px] md:gap-[35px] font-open-sans lg:text-[18px] md:text-[15px] font-semibold text-[#1F2937]">
                                    <li><a href="#About">About</a></li>
                                    <li><a href="#project">Project</a></li>
                                    <li><a href="#testimonial">Testimonial</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>

                            </div>
                            
                            <div className="lg:hidden md:hidden flex ml-[120px] mt-[2px] ">
                                <button className="" onClick={ToggleHamburger}><GiHamburgerMenu className="text-[30px]"/></button>

                            </div>

                            {/* <div className="">
                                 (<button onClick="" ><img className="w-[25px] h-[25px]" src={moon} />
                                </button>) : (<button onClick="" ><img className="w-[25px] h-[25px]" src={sun} /></button>)



                            </div> */}



                        </div>
                    </div>








                </div>

            </nav>
            {isOpen && (
                <div className="absolute-tab">
                    <MobileNavbar SetIsOpen={SetIsOpen} />
                </div>
            )}


        </section>


    );
};

export default Navbar;