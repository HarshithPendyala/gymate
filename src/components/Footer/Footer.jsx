import FooterLogo from "../../images/logo/logo-footer.svg";


const Footer = () => {
  return (
    <footer className="bg-white">
        <div className="container page-padding py-[10rem]">
            <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
                <div className="flex flex-col w-1/3 gap-8">
                    <img src={FooterLogo} alt="footer-img" className="w-[18rem]"/>
                    <p className="text-[15px] font-medium text-[#646464]">
                        Take you health and body to the next level with our comprehensive program designed to help you rech your fitness goals.
                    </p>

                    <div className="flex gap-7 text-[18px] text-[#646464] min540:justify-center">
                        <i 
                            style={{tansition:"all 0.3s"}}
                            className="fa-brands fa-facebook-f bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0336] hover:text-white">
                        </i>
                        <i 
                            style={{tansition:"all 0.3s"}}
                            className="fa-brands fa-twitter bg-[#efefef] p-4 rounded-full hover:bg-[#ff0336] hover:text-white">
                        </i>
                        <i 
                            style={{tansition:"all 0.3s"}}
                            className="fa-brands fa-pinterest-p bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0336] hover:text-white">
                        </i>
                        <i 
                            style={{tansition:"all 0.3s"}}
                            className="fa-brands fa-youtube bg-[#efefef] p-4 rounded-full hover:bg-[#ff0336] hover:text-white">
                        </i>                          
                    </div>    
                    <p className="text-[16px] font-medium text-[#646464]">
                        Privacy Policy | © {new Date().getFullYear()} Gymate <br/> {" "} Design by {" "}
                        <a 
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.radiustheme.com/">RadiusTheme</a>
                    </p>  
                </div>

                <div className="flex flex-col gap-8 relative">
                    <p className="text-[22px] font-bold footer-main">Our Classes</p>
                    <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0336]"></span>
                    <p className="text-[16px] hover:text-[#ff0336] cursor-pointer text-[#646464] font-medium hover:font-hold">
                        Fitness Classes
                    </p>
                    <p className="text-[16px] hover:text-[#ff0336] cursor-pointer text-[#646464] font-medium hover:font-hold">
                        Aerobic Classes
                    </p>
                    <p className="text-[16px] hover:text-[#ff0336] cursor-pointer text-[#646464] font-medium hover:font-hold">
                        Power Yoga
                    </p>
                    <p className="text-[16px] hover:text-[#ff0336] cursor-pointer text-[#646464] font-medium hover:font-hold">
                        Learn Machines
                    </p>
                    <p className="text-[16px] hover:text-[#ff0336] cursor-pointer text-[#646464] font-medium hover:font-hold">
                        Full-body strength
                    </p>
                </div>

                <div className="flex flex-col gap-8 relative">
                    <p className="text-[22px] font-bold footer-main">Working hours</p>
                    <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0336]"></span>

                    <p className="text-[16px] text-[#646464] font-bold">
                        Monday - Friday:
                    </p>
                    <p className="text-[16px] text-[#646464] font-medium">
                        7am - 9pm
                    </p>
                    <p className="text-[16px] text-[#646464] font-bold">
                        Saturday:
                    </p>
                    <p className="text-[16px] text-[#646464] font-medium">
                        7am - 7pm
                    </p>
                    <p className="text-[16px] text-[#646464] font-bold">
                        Sunday - closed
                    </p>

                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer