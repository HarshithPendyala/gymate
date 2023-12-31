import TitleRed from "../../images/who-we-are/title-bg.svg"
import TrainerBox from "./TrainerBox"

const Trainers = () => (
    <section id="team" className="trainers-section"> 
        <div className="container page-padding py-[12rem]">
            <div className="flex flex-col items-center text-center relative">
                <p className="text-white z-10 relative text-[16px] uppercase font-bold mb-10">
                    gym trainers
                </p>
                <img
                    src={TitleRed}
                    alt="text-bg"
                    className="w-[21rem] absolute -top-[6px]"
                />
                <h2 className="text-[3.4rem] font-bold mb-4">Team of Expert Coaches</h2> 
                <p className="text-[#646464] font-medium text-[15px]">Expert team of coaches helps you succeed in any goal, <br/> personalised guidance and motivation provided!</p>
            </div>
            <div className="flex mt-20">
                <TrainerBox/>
            </div>
        </div>
    </section>
  )


export default Trainers