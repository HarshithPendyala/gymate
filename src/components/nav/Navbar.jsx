import { useState } from "react"
import Logo from "../../images/logo/logo.svg";
import LogoSide from "../../images/logo/logo-footer.svg"
import Navlist from "./Navlist";
import { Link } from "react-router-dom";
import sideImg1 from '../../images/sidebar/1.jpg'
import sideImg2 from '../../images/sidebar/2.jpg'
import sideImg3 from '../../images/sidebar/3.jpg'
import sideImg4 from '../../images/sidebar/4.jpg'
import sideImg5 from '../../images/sidebar/5.jpg'
import sideImg6 from '../../images/sidebar/6.jpg'


function Navbar() {
    const [spin,setSpin] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [sidebar,setSideBar] = useState(false);
    const [hamburger,setHamburger] = useState(false);


    const joinSpin = () => {
        setSpin(true);
    }
    const stopSpin = () => {
        setSpin(false);
    }

    //Sticky navbar - bg-black
    const handleScroll = () => {
        if(window.scrollY > 10){
            setSticky(true);
        }
        else {
            setSticky(false);
        }
    };
    window.addEventListener("scroll",handleScroll);

    //logo
    const goTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    };

    const sideBar = () => {
        setSideBar(!sidebar);
    };

    const hamburgerMenu = () => {
        setHamburger(!hamburger);
    }


  return (
    <>
        <nav
            className={`flex flex-row bg-transparent items-center justify-between py-8 px-12  fixed top-0 left-0 right-0 w-full z-50 ${
                sticky ? "shadow-xl !bg-black" : ""
              }`}
        >
            <Link to="/">
                <img    
                    src={Logo}
                    alt="logo_img"
                    onClick={goTop}
                    className="w-full h-auto"
                />
            </Link>
            <div className="navlist-nav">
                <Navlist/>
            </div>
            <div className="flex items-center gap-10">
                <div className="flex gap-10">
                    {/* Hamburger Menu */}
                    <div 
                        className={`flex top-0 flex-col fixed w-full h-screen bg-white z-[9999999999] py-[60px] px-[40px] ease-in-out duration-500 ${
                        hamburger ? "left-0" : "-left-[100%]"
                        }`}
                    >
                        <i 
                            onClick={hamburgerMenu}
                            className="fa-solid fa-xmark text-[@ff0336] text-[3.3rem] cursor-pointer self-end"
                        ></i>
                        {/* links */}
                        

                        <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                            <li onClick={hamburgerMenu}>
                                <a  
                                    onClick={() => window.top(0,0)}
                                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                                    href="/#home"
                                    > Home </a>
                            </li>
                            <li onClick={hamburgerMenu}>
                                <Link  
                                    onClick={() => window.top(0,0)}
                                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                                    to="/about"
                                    > 
                                About 
                                </Link>
                            </li>

                        </ul>
                                    
                    </div>
                

                    {/* SideBar */}
                    
                    <div>
                         <div
                            className={`flex flex-col fixed w-[40rem] min450:w-full h-[100vh] bg-white top-0 z-[9999999999] p-[45px] gap-24 overflow-x-hidden ease-in-out duration-[0.5s] ${
                                sidebar ? "left-0" : "-left-[100%]"
                            }`}
                            >
                            {/* logo & X */}
                            <div className="flex justify-between items-center">
                                <img src={LogoSide} alt="logo_img" className="w-[13rem]" />
                                <i
                                    onClick={sideBar}
                                    className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer"
                                ></i>
                            </div>
                            {/* about us */}
                            <div className="flex flex-col gap-6">
                                <h3 className="text-[2rem] font-bold">About Us</h3>
                                <p className="text-[1.6rem] font-medium text-[#000000b1]">
                                    Find out who we are and what makes us unique. We are a
                                    community-driven gym committed to providing personalized
                                    fitness experiences for all levels of fitness enthusiasts in
                                    a welcoming and supportive environment.
                                </p>
                            </div>
                            {/* Gallery */}
                            <div className="flex flex-col gap-6">
                                <h3 className="text-[2rem] font-bold">Gallery</h3>
                                <div className="grid grid-cols-3 grid-rows-2 gap-4">
                                    <img    
                                        src={sideImg1}
                                        alt="sidebar_gallery"
                                        className="rounded-xl cursor-pointer"
                                    />
                                    <img    
                                        src={sideImg2}
                                        alt="sidebar_gallery"
                                        className="rounded-xl cursor-pointer"
                                    />
                                    <img    
                                        src={sideImg3}
                                        alt="sidebar_gallery"
                                        className="rounded-xl cursor-pointer"
                                    />
                                    <img    
                                        src={sideImg4}
                                        alt="sidebar_gallery"
                                        className="rounded-xl cursor-pointer"
                                    />
                                    <img    
                                        src={sideImg5}
                                        alt="sidebar_gallery"
                                        className="rounded-xl cursor-pointer"
                                    />
                                    <img    
                                        src={sideImg6}
                                        alt="sidebar_gallery"
                                        className="rounded-xl cursor-pointer"
                                        />
                                    </div>
                                </div>
                                {/* contact info */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-[2rem] font-bold">Contact Info </h3>
                                    <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200 ">
                                        <i className="fa-solid fa-location-dot text-[#ff0336]"></i>
                                        &nbsp; 221 Baker Street
                                    </p>
                                    <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200 ">
                                        <i className="fa-solid fa-phone text-[#ff0336]"></i>
                                        &nbsp; 1285478992
                                    </p>
                                    <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in d text-[#ff0336]uration-200 ">
                                        <i className="fa-solid fa-envelope text-[#ff0336]"></i>
                                        &nbsp; gymate@gains.com
                                    </p>
                                </div>
                                {/* follow us */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-[2rem] font-bold">Follow Us</h3>
                                    <div className="flex gap-5">
                                        <span className="bg-[#ff0336] rounded-full py-[12px] px-[17px] cursor-pointer">
                                            <i className="fa-brands fa-facebook-f text-[2.2rem] text-white"></i>
                                        </span>
                                        <span className="bg-[#ff0336] rounded-full py-[12px] px-[17px] cursor-pointer">
                                            <i className="fa-brands fa-twitter text-[2.2rem] text-white"></i>
                                        </span>
                                        <span className="bg-[#ff0336] rounded-full py-[12px] px-[17px] cursor-pointer">
                                            <i className="fa-brands fa-instagram text-[2.2rem] text-white"></i>
                                        </span>
                                    </div>
                                </div>

                        </div>
                    </div>
                    {/* sidebar */}

                    <i
                    onClick={hamburgerMenu}
                    className="fa-bars fa-solid hidden text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
                    ></i>
                    <Link
                    onClick={goTop}
                    className="fa-regular fa-user text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
                    ></Link>
                    <i
                    onClick={sideBar}
                    className="fa-regular fa-chart-bar text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
                    ></i>
                </div>
                {/* spin box */}
                <div className="border-[rgb(255,255,255,0.3)] border-solid border-2 p-2 rounded-md min620:hidden">
                    <Link
                    onClick={goTop}
                    to={"/contact"}
                    onMouseEnter={joinSpin}
                    onMouseLeave={stopSpin}
                    className="flex items-center"
                    >
                    <i
                        className={`fa-solid fa-plus bg-[#FF0336] text-white py-3 px-4 text-2xl rounded-md ${
                        spin ? "nav-btn-hover" : ""
                        }`}
                    ></i>
                    <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
                        join class now
                    </h3>
                    </Link>
                 </div>
            </div> 
        </nav>
    </>
  )
}

export default Navbar