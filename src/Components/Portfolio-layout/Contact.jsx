import { contactData } from "/src/Components/Portfolio-layout/DataPage";
import icon from "/src/Assets/Icons/Arrow 1 (1).png";
import { SiMailchimp } from "react-icons/si";
import {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file



const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section id="contact" className="bg-[#F9FAFB]">
            <div className="">

        

                <div className="container mx-auto w-[85%] lg:pt-[40px] pt-[40px] lg:pb-[50px] pb-[30px] ">
                   

                <div className=" gap-2 rounded-md w-[170px] h-[70px]  p-2 flex mx-auto justify-center pt-[5px] bg-[#F9FAFB]  border border-[#F9FAFB] shadow-2xl">
                    <button className="lg:text-[25px] font-lobster font-bold"> Get in touch </button>
                    <span className="mt-4 "><SiMailchimp className="text-[32px]" /></span>

                </div>



            <div className="lg:flex lg:flex-row md:flex-row  justify-center md:flex flex  flex-col lg:gap-[200px] md:gap-[100px]">

                        <div className="mt-[20px]">
                            <p className="lg:text-[20px] mb-2  text-[16px] font-semibold font-open-sans">Talk to me</p>
                            <div className=" flex flex-col gap-6 ">
                            {contactData.map((contact) => {

const { id, image, title, detail } = contact;

return (

    <div  className="rounded-2xl shadow-xl bg-[#ffff] lg:w-[397px] lg:h-[247px] p-5" key={id} data-aos="flip-right">
        <div>
            <img className="flex justify-center mx-auto" src={image} />
            <p className="flex justify-center mx-auto font-semibold lg:text-[22px] mt-3 font-open-sans">{title}</p>
        </div>
        <p className="flex justify-center mx-auto font-semibold lg:text-[22px] mt-3 font-open-sans">{detail}</p>

        <div className="flex  gap-5 justify-center mx-auto">
            <p className=" font-normal lg:text-[22px] mt-3 font-open-sans">Write Me</p>
            <img  className="w-[25px] h-[25px] mt-4"src={icon} />
        </div>

    </div>




)

})}
                            </div>
                           

                        </div>




                        <form  className="mt-[50px]" htmlFor="" onSubmit>
                            <p className="font-semibold lg:text-[22px] font-open-sans">Write me a Mail</p>
                            <label className="font-semibold lg:text-[22px] font-open-sans" htmlFor="name"> Name</label><br />
                            <input type="text" className="  font-semibold shadow-lg font-open-sans rounded-md p-2 lg:w-[350px] w-[320px] h-[50px]" placeholder="insert your Name" /><br /><br />

                            <label className="font-semibold lg:text-[22px] font-open-sans" htmlFor="">Mail</label><br />
                            <input className="font-semibold shadow-lg font-open-sans rounded-md  p-2 lg:w-[350px] h-[50px] w-[320px]" type="text" placeholder="insert your Mail" /><br /><br />

                            <label className="font-semibold lg:text-[22px] font-open-sans" htmlFor="">Message</label><br />
                            <textarea  className="font-semibold shadow-lg font-open-sans p-3 rounded-2xl lg:w-[350px] w-[320px] h-[250px]"placeholder="insert your Mail" ></textarea><br />
                            <button className="  mt-[30px] flex bg-[#000] text-[#fff] text-[24px] p-3 rounded font-open-sans font-semibold" type="submit">Send Message
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