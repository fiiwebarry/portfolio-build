
import { AiFillGithub } from 'react-icons/ai';
import { projectData, projectData2 } from "/src/Components/Portfolio-layout/constant";
import github from "/src/Assets/Icons/gittyhub.png";
import { GitHubCalendar } from "react-github-calendar";
import { GiLaptop } from 'react-icons/gi';
import { TbSitemap } from "react-icons/tb";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
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
    <div id="project" className="project bg-[#F9F9F9] py-20 overflow-x-clip">
      <div className=" container mx-auto w-[85%] lg:pt-[60px] md:pt-[40px]  pt-[20px] pb-9">
        <div className=" gap-2   hover:bg-Hover-tint hover:text-white rounded-md w-[190px] items-center h-[70px]  p-2 flex mx-auto justify-center pt-[5px] bg-[#F9FAFB]  border border-[#F9FAFB] shadow-2xl">
          <button className="lg:text-[25px] font-georgia font-bold mt-4"> Projects </button>
          <span className="mt-4 "><GiLaptop className="text-[32px]" /></span>
        </div>
        {/* <p className="flex justify-center  mx-auto lg:text-left text-center text-[20px] lg:text-[24px] font-georgia font-semibold lg:mt-[30px] mt-[20px]">Some of the noteworthy projects i have built</p> */}
        <div className=" lg:w-full  w-[100%] lg:pt-[60px]">
          <div className='grid md:justify-center pt-6 '>
            <div className='grid grid-flow-col items-center  pt-2 w-max gap-2'>
              <p className='font-bold ' >Github </p>
             <img className="github w-5 h-5" src={github} /> 
            </div>
            <div className='grid md:grid-flow-col gap-4  w-full md:justify-normal justify-center md:overflow-visible overflow-x-auto'>
               <span>
                <img className='justify-center mx-auto' src="https://streak-stats.demolab.com?user=fiiwebarry"/>
            </span>
            <span>
               <img/><GitHubCalendar className='animate-pulse' username="fiiwebarry" /> 
            </span>
            </div>
           </div>
        
          <div className='lg:w-[180px] w-[160px] pb-3'>
            <p className=' flex  lg:mt-0 mt-6 lg:justify-normal justify-center lg:mx-0 mx-auto border-b-2  py-2 border-blue-800 font-semibold font-georgia text-[#335CA6] lg:text-[18px]'>KEY-PROJECTS</p>
          </div>
          <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="unique"
          >
             {projectData.map((project) => {
                const { id, image, githubUrl, siteUrl, content } = project;
                return (
                  <SwiperSlide key={id}>
                    <div key={id} className='lg:w-[412px] lg:h-[582px] bg-[#ffff] transition-transform duration-300 lg:hover:scale-110  hover:scale-105  shadow-lg rounded-xl lg:p-4 p-2'>
                      <div className=" lg:p-3 p-2 ">
                        <div className=''>
                          <img className="rounded   md:w-[700px]" src={image} alt="" />
                        </div>
                        <div className="">
                          <p className="lg:p-2  p-2 font-garamond lg:text-[18px]">
                            {content}
                          </p>
                          <div className="flex p-2 gap-4">
                            <button onClick={() => clickHandler(githubUrl)} className=" flex font-open-sans gap-2 rounded font-semibold shadow-lg lg:p-4 bg-[#F9FAFB]  text-[15px] lg:text-[20px]">
                              <p>GitHub </p>
                              <span className="mt-1"><AiFillGithub /></span>
                            </button>
                            <button onClick={() => splitterClick(siteUrl)} className="flex gap-2 rounded font-open-sans font-semibold shadow-lg lg:p-4 bg-[#F9FAFB]  text-[15px] lg:text-[20px]">
                              <p>Visit-Site </p>
                              <span className="mt-1"><TbSitemap /></span>
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide >
                )
              })}
            
            <div className="swiper-pagination ">
            </div> 
          </Swiper>
            <div className='lg:w-[180px] w-[160px] pb-3'>
            <p className=' flex  lg:mt-0 mt-6 lg:justify-normal justify-center lg:mx-0 mx-auto border-b-2  py-2 border-blue-800 font-semibold font-georgia text-[#335CA6] lg:text-[18px]'>KEY-PROJECTS</p>
          </div>
          <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          autoplay={{
          delay: 6000, 
          disableOnInteraction: false,
        }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="unique"
          >
             {projectData2.map((project) => {
                const { id, image, githubUrl, siteUrl, content } = project;
                return (
                  <SwiperSlide key={id}>
                    <div key={id} className='lg:w-[412px] lg:h-[582px] bg-[#ffff] transition-transform duration-300 lg:hover:scale-110  hover:scale-105  shadow-lg rounded-xl lg:p-4 p-2'>
                      <div className=" lg:p-3 p-2 ">
                        <div className=''>
                          <img className="rounded   md:w-[700px]" src={image} alt="" />
                        </div>
                        <div className="">
                          <p className="lg:p-2  p-2 font-garamond lg:text-[18px]">
                            {content}
                          </p>
                          <div className="flex p-2 gap-4">
                            <button onClick={() => clickHandler(githubUrl)} className=" flex font-open-sans gap-2 rounded font-semibold shadow-lg lg:p-4 bg-[#F9FAFB]  text-[15px] lg:text-[20px]">
                              <p>GitHub </p>
                              <span className="mt-1"><AiFillGithub /></span>
                            </button>
                            <button onClick={() => splitterClick(siteUrl)} className="flex gap-2 rounded font-open-sans font-semibold shadow-lg lg:p-4 bg-[#F9FAFB]  text-[15px] lg:text-[20px]">
                              <p>Visit-Site </p>
                              <span className="mt-1"><TbSitemap /></span>
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide >
                )
              })}
            
            <div className="swiper-pagination ">
            </div> 
          </Swiper>
        </div>
       

      </div>
    </div >
  );
};

export default Projects;
