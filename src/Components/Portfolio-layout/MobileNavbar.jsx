
import { GiBee } from 'react-icons/gi';
import { AiFillCloseCircle } from "react-icons/ai"

const MobileNavbar = ({ SetIsOpen }) => {

    return (

        <aside className='' >
            <div className=" flex justify-between p-5">
                <div className="flex mt-2 hover:text-Hover-tint ">
                    <h1 className="font-georgia   text-[30px]">FIIWE</h1>
                    <span className="ml-[10px] text-[30px] text-[#000]"><GiBee /></span>

                </div>

                <button className="text-[30px]" onClick={() => SetIsOpen(false)} ><AiFillCloseCircle /></button>
            </div>
            <ul className=" flex flex-col mx-auto text-center justify-center p-4">
                <li><a href="#About">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </aside>
    )
}
export default MobileNavbar