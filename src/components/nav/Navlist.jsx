import { Link } from "react-router-dom";

function Navlist() {
    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'none'
        });
    };
  return (
   <>
        <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
            <li
                style={{transition: "all 0.3s"}}
                className="cursor-pointer hover:text-[#ff0336]"
            >
                <a href="/">Home</a>
            </li>
            <li
                style={{transition: "all 0.3s"}}
                className="cursor-pointer hover:text-[#ff0336]"
            >
                <Link onClick={goTop} to={"/about"}>
                    About
                </Link>
            </li>
            <li
                style={{transition: "all 0.3s"}}
                className="cursor-pointer hover:text-[#ff0336]"
            >
                <Link onClick={goTop} to={"/contact"}>
                    Contact
                </Link>
            </li>
        </ul>
   </>
  )
}

export default Navlist