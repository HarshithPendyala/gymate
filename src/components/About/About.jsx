import React from 'react'
import AboutCards from './AboutCards'
import TitleRed from "../../images/who-we-are/title-bg.svg";
import TrainersIcon from "../../images/who-we-are/weightlifter.png";
import ModernIcon from "../../images/who-we-are/equpments.png";
import LiftIcon from "../../images/who-we-are/gym.png";
import GirlRunning from "../../images/who-we-are/girl-run.png";
import GirlRedBg from "../../images/who-we-are/girl-redbg.svg";
import GirlText from "../../images/who-we-are/girl-side-text.png";
import GirlWind from "../../images/who-we-are/wind.png";
import MainButton from "../MainButton";


const About = () => (
    <section className='flex flex-col justify-between gap-2 about-section pb-[20rem]'>
        <div className='container page-padding'>
            <div className='about-cards flex gap-10 md1000:flex-col -mt-[8.5rem]'>
                <AboutCards/>
            </div>
            <div id='about' className='grid grid-cols-[50fr,50fr] md1000:grid-cols-1'>
                <div className='mt-[10.5rem] relative md1000:items-center md1000:flex md1000:flex-col md1000:text-center md1000:w-full'>
                    <p className='text-white font-semibold text-[15px] relative z-10 uppercase pl-16 md1000:pl-0 mb-12'> Who we are</p>
                    <img
                        src={TitleRed}    
                        alt='text-bg'
                        className='w-[31%] absolute -top-[6px] md1000:w-[22rem]'
                    />
                    <h2 
                        className='text-[35px] font-bold leading-tight mb-6 w-[60rem] min800:w-[100%]'
                    > 
                        Take your Health and Body to Next Level
                    </h2>
                    <p className='text-[16px] text-[#646464] font-medium'>
                        Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
                    </p>

                    <div className='flex mt-12 mb-[7rem] gap-[2px] min620:flex-col'>
                        <div className='flex flex-col items-center text-center py-10 px-14 pl-7 min620:px-0'>
                            <img    
                                src={TrainersIcon}
                                alt='icon_img'
                                className="w-[5.4rem] mb-6 h-auto"
                            />
                            <h3 className='uppercase font-bold text-[20px] leading-snug'>
                                Professional <br/> trainers
                            </h3>
                        </div>
                        <div className='flex flex-col items-center text-center py-10 px-14 border-l border-[rgb(0,0,0,0.2)] border-solid border-r min620:px-0 min620:border-none'>
                            <img 
                                src={ModernIcon}
                                alt='icon_img'
                                className='w-[5.4rem] mb-6 h-auto'
                            />
                            <h3 className='uppercase font-bold text-[20px] leading-snug'>
                                modern <br/> equipments
                            </h3>
                        </div>
                        <div className='flex flex-col items-center text-center py-10 px-14 pr-2 min620:px-0'>
                            <img 
                                src={LiftIcon}
                                alt='icon_img'
                                className='w-[5.4rem] mb-6 h-auto'
                            />
                            <h3 className='uppercase font-bold text-[20px] leading-snug'>
                                fancy gym <br/> machines
                            </h3>
                        </div>
                    </div>
                    <MainButton 
                        color={`!text-white`}
                        bg={`bg-[#3f3f3f]`}
                        cN="about-cta"
                        arrowColor={`!text-white`}
                        hover={`hover:bg-[#FF0366]`}
                        text="take a tour"
                        goTo='/classes'
                    />                   
                </div>
                <div className='relative md1000:hidden'>
                    <img    
                        src={GirlRunning}
                        alt='girl_running'
                        className='girl-running'
                    />
                    <img src={GirlRedBg} alt="bg-red" className="girl-bg" />
                    <img src={GirlText} alt="bg-text" className="girl-text" />
                    <img src={GirlWind} alt="bg-wind" className="girl-wind" />
                </div>
            </div>
        </div>       
    </section>
  )

export default About