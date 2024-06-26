import { useState } from "react";
import { GiBee } from 'react-icons/gi';
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavbar from '/src/Components/Portfolio-layout/MobileNavbar';

const Navbar = () => {


    const [isOpen, SetIsOpen] = useState(false);
    const ToggleHamburger = () => {

        SetIsOpen(!isOpen);

    }
    return (

        <section className=" bg-[#F9FAFB] shadow-lg  fixed w-[100%]  z-50">
            <nav className="container lg:px-[100px] lg:mx-0 mx-auto w-[85%] lg:p-5 md:p-5">

                {!isOpen && <div className=" ">
                    <div className="flex  justify-between  md:gap-[140px]">
                        <div className="flex mt-2 hover:text-Hover-tint ">
                            <h1 className="font-georgia  lg:text-[40px] text-[30px]">FIIWE</h1>
                            <span className="ml-[10px] text-[40px] text-[#000]"><GiBee /></span>

                        </div>

                        <div className="flex">
                            <div className="">
                                <ul className=" lg:flex md:flex hidden  hover:text-Hover-tint  lg:mt-0 md:mt-5  lg:p-5 justify-center lg:gap-[90px] md:gap-[35px] font-open-sans lg:text-[20px] md:text-[15px] font-semibold text-[#1F2937]">
                                    <li><a href="#About">About</a></li>
                                    <li><a href="#project">Project</a></li>
                                    <li><a href="#testimonial">Testimonial</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>

                            </div>

                            <div className="lg:hidden md:hidden flex ml-[120px] mt-[2px] ">
                                <button className="" onClick={ToggleHamburger}><GiHamburgerMenu className="text-[30px]" /></button>

                            </div>
                        </div>
                    </div>
                </div>}
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