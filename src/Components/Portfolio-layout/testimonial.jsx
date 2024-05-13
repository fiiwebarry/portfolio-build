import { data } from "/src/Components/Portfolio-layout/DataPage";
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file





const Testimonial = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="testimonial" className=" overflow-x-clip">
      <div className="container mx-auto w-[85%] lg:pt-[90px] lg:pb-[70px] pt-[30px] pb-[40px]">

        <div className=" gap-2 rounded-md w-[170px] h-[70px]  p-2 flex mx-auto justify-center pt-[5px] bg-[#F9FAFB]  border border-[#F9FAFB] shadow-2xl">
          <button className="lg:text-[25px] font-lobster font-bold"> Testimonials </button>


        </div>



        <div className="">
          <p className="flex justify-center mx-auto lg:text-[20px]  text-[15px] font-semibold font-open-sans mt-6">Nice things people have said about me:</p>
        </div>
        <div className="lg:flex lg:flex-row md:flex md:flex-row flex flex-col gap-8 lg:gap-[140px] lg:mt-[30px] mt-6">

          {data.map((info) => {

            const { id, image, text, name, Role } = info;
            return (
              <>


                <div className="testimony" key={id}>
                  <div className="lg:w-[394px] lg:h-[439px] bg-[#F9FAFB] p-4 rounded-2xl shadow-lg" data-aos="flip-right">
                    <img className="w-[100px] h-[100px] rounded-full flex justify-center mx-auto" src={image} alt="" />
                    <p className="font-normal font-garamond lg:text-[19px] text-[17px] mt-2">
                      {text}
                    </p>
                    <span className="flex mt-2 justify-center mx-auto font-bold text-[18px]">{name}</span>
                    <span className="flex mt-2 justify-center mx-auto font-normal text-[15px] lg:text-[18px]">{Role}</span>
                  </div>

                </div>

              </>



            )

          })}

        </div>


      </div>
    </div >
  );
};

export default Testimonial;
