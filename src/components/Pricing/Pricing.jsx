import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgText from "../../images/pricing/bg-text.png";
import BgDumbell from "../../images/pricing/bg-dumbell.png";
import PricingBox from "./PricingBox";

import Img1 from "../../images/pricing/img1.jpg";
import Img2 from "../../images/pricing/img2.jpg";
import Img3 from "../../images/pricing/img3.jpg";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section relative">
        <div className="container page-padding py-[12rem]">
            <img src={BgText} className="left-0 absolute" alt="bg-img"/>

            <div className="flex flex-col text-center relative items-center">
                <p className="text-white relative z-10 uppercase font-bold text-[15px] mb-8">
                    Pricing chart
                </p>
                <img 
                    src={TitleRed}
                    alt="text-bg"
                    className="w-[23rem] absolute -top-[10px]"
                />

                <h2 className="text-[3.4rem] font-bold mb-4">
                    Exclusive pricing plan
                </h2>
                <p className="text-[#646464] font-medium text-[15px]">
                    Gymate an unkown printer took a gallery of type and scrambled <br/> make a type specimen book
                </p>
            </div>

            <div className="flex gap-10 mt-32 realtive z-[2] md1000:flex-col md1000:items-center">
                <PricingBox img={Img1} price="39"/>
                <PricingBox img={Img2} price="65"/>
                <PricingBox img={Img3} price="100"/>
            </div>
            <img 
                src={BgDumbell}
                alt="bg-icon"
                className="right-0 absolute bottom-0 z-[1] "
            />
        </div>
        
    </section>
  )
}

export default Pricing