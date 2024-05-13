
import { AiFillGithub } from 'react-icons/ai';
import { projectData } from "/src/Components/Portfolio-layout/DataPage";
import { projectData2 } from "/src/Components/Portfolio-layout/DataPage";
import { GiLaptop } from 'react-icons/gi';
import { TbSitemap } from "react-icons/tb";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import "./slider.css"
import "./slide.css"



const Projects = () => {
  const clickHandler = (url) => {
    window.location.href = url;
  }
  const splitterClick = (url) => {
    window.location.href = url;
  }

  return (
    <div id="project" className="project bg-[#F9F9F9] overflow-x-clip">
      <div className=" container mx-auto w-[85%] lg:pt-[60px] md:pt-[40px] lg:pb-[50px] pt-[20px] pb-9">
        <div className=" gap-2 rounded-md w-[190px] h-[70px]  p-2 flex mx-auto justify-center pt-[5px] bg-[#F9FAFB]  border border-[#F9FAFB] shadow-2xl">
          <button className="lg:text-[25px] font-lobster font-bold mt-4"> Projects </button>
          <span className="mt-4 "><GiLaptop className="text-[32px]" /></span>
        </div>
        <p className="flex justify-center mx-auto lg:text-[24px] font-open-sans font-semibold mt-[20px]">Some of the noteworthy projects i have built</p>
        <div className="lg:mt-[40px] md:mt-[40px]">
          <p className='font-bold flex lg:justify-normal justify-center text-[18px] font-georgia  lg:text-[20px] '>MINI-PROJECTS</p>
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="unique "
          >
            <div className="lg:flex lg:flex-row md:flex md:flex-row  gap-8  flex flex-col lg:flex-nowrap  md:flex-wrap lg:gap-[80px] md:gap-[10px]">
              {projectData.map((project) => {

                const { id, image, githubUrl, siteUrl, content } = project;
                return (
                  <SwiperSlide>
                    <div key={id} className=" mt-10">
                      <img className="rounded shadow-lg md:w-[700px]" src={image} alt="" />
                      <div className="bg-[#ffff]">
                        <p className="p-4 font-garamond lg:text-[18px]">
                          {content}
                        </p>
                        <div className="flex p-3 gap-4">
                          <button onClick={() => clickHandler(githubUrl)} className=" flex font-open-sans gap-2 rounded font-semibold shadow-lg lg:p-4 bg-[#F9FAFB]  text-[15px] lg:text-[22px]">
                            <p>GitHub </p>
                            <span className="mt-1"><AiFillGithub /></span>
                          </button>
                          <button onClick={() => splitterClick(siteUrl)} className="flex gap-2 rounded font-open-sans font-semibold shadow-lg lg:p-4 bg-[#F9FAFB]  text-[15px] lg:text-[22px]">
                            <p>Visit-Site </p>
                            <span className="mt-1"><TbSitemap /></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide >

                )
              })}
            </div>
          </Swiper>

          <p className='font-bold lg:mt-[160px] flex lg:justify-normal justify-center text-[18px] font-georgia  lg:text-[20px] '> KEY-PROJECTS</p>
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="unique">
            <div className="lg:flex  lg:mt-[60px] md:mt-[20px]  mt-8 lg:flex-row md:flex md:flex-row  md:flex-wrap flex flex-col lg:gap-[370px] md:gap-[10px] gap-8">
              {projectData2.map((project) => {
                const { id, image, githubUrl, siteUrl, content } = project;
                return (
                  <SwiperSlide >
                    <div key={id} className="lg:mt-[40px] mt-4">
                      <img className="rounded shadow-lg md:w-[700px]" src={image} alt="" data-aos="zoom-in" />
                      <div className="bg-[#ffff]">
                        <p className="p-3 lg:w-[430px] font-garamond lg:text-[18px]">
                          {content}
                        </p>
                        <div className="flex p-3 gap-4">
                          <button onClick={() => clickHandler(githubUrl)} className=" flex font-open-sans gap-2 rounded font-semibold shadow-lg lg:p-4 bg-[#F9FAFB] text-[15px] lg:text-[22px]">
                            <p>GitHub </p>
                            <span className="mt-1"><AiFillGithub /></span>
                          </button>
                          <button onClick={() => splitterClick(siteUrl)} className="flex gap-2 rounded font-open-sans font-semibold shadow-lg lg:p-4 bg-[#F9FAFB]  text-[15px] lg:text-[22px]">
                            <p>Visit-Site </p>
                            <span className="mt-1"><TbSitemap /></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                )
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </div >
  );
};

export default Projects;
