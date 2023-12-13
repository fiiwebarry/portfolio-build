
import { AiFillGithub } from 'react-icons/ai';
import { projectData } from "/src/Components/Portfolio-layout/DataPage";
import { projectData2 } from "/src/Components/Portfolio-layout/DataPage";
import { GiLaptop } from 'react-icons/gi';
import { TbSitemap } from "react-icons/tb";
import {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file


const Projects = () => {

  const clickHandler = (url) => {

    window.location.href = url;
  }

  const splitterClick = (url) => {
    window.location.href = url;
  }
  useEffect(() => {
    AOS.init();
}, []);

  return (
    <div id="project" className="project bg-[#F9F9F9]">
      <div className=" container mx-auto w-[85%] lg:pt-[60px] md:pt-[40px] lg:pb-[50px] pt-[20px] pb-9">
        

        <div className=" gap-2 rounded-md w-[190px] h-[70px]  p-2 flex mx-auto justify-center pt-[5px] bg-[#F9FAFB]  border border-[#F9FAFB] shadow-2xl">
                    <button className="lg:text-[25px] font-lobster font-bold mt-4"> Projects </button>
                    <span className="mt-4 "><GiLaptop  className="text-[32px]" /></span>

                </div>

        <p className="flex justify-center mx-auto lg:text-[20px] font-open-sans font-semibold mt-[20px]">Some of the noteworthy projects i have built</p>


        <div className="lg:mt-[40px] md:mt-[40px]">
          <div className="lg:flex lg:flex-row md:flex md:flex-row  gap-8  flex flex-col lg:flex-nowrap  md:flex-wrap lg:gap-[50px] md:gap-[10px]">
            {projectData.map((project) => {

              const { id, image, githubUrl, siteUrl, content } = project;
              return (
                <div key={id} className="">
                  <img className="rounded shadow-lg md:w-[700px]" src={image} alt=""  data-aos="zoom-in"/>


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
              )


            })}
          </div>

          <div className="lg:flex  lg:mt-[30px] md:mt-[20px]  mt-8 lg:flex-row md:flex md:flex-row lg:flex-nowrap md:flex-wrap flex flex-col lg:gap-[70px] md:gap-[10px] gap-8">
            {projectData2.map((project) => {

              const { id, image, githubUrl, siteUrl, content } = project;
              return (
                <div key={id} className="">
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
                  

                    {/* <button onClick={() => clickHandler(githubUrl)} className="work-btn2"> GitHub <AiFillGithub /></button>
                    <button onClick={() => splitterClick(siteUrl)} className="work-btn2">Visit-Site <TbSitemap /></button> */}


                  </div>
                </div>
              )


            })}
          </div>


        </div>


      </div>

    </div >
  );
};

export default Projects;
