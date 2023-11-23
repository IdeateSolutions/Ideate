import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import logo from "./icons/Black-Dominated.png";
import Ilogo from "./icons/instagram.png";
import Llogo from "./icons/linkedin.png";
import Flogo from "./icons/facebook.png";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { useRef } from "react";

// import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";
//import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
const constraintsRef = useRef(null);
const Footer = () => {
  return (
    <div className="py-3 bg-image-footer ">
      <div className="flex flex-col mx-auto max-w-screen-lg gap-6">
        <div className=" flex flex-col">
          <h1 className="text-7xl font-extrabold text-slate-900">
            LETS MAKE YOUR
          </h1>
          <div className="flex flex-row justify-between ">
            <div className="flex flex-row gap-4">
              <h1 className="text-7xl font-extrabold text- text-blue-600">
                IDEAS
              </h1>
              <h1 className="text-7xl font-extrabold text-slate-900">TO</h1>
              <h1 className="text-7xl font-extrabold text-lime-400">LIFE</h1>
            </div>

            <div>
              <button
                type="submit"
                className="flex p-5 border border-transparent rounded-full mt-3 bg-blue-600 text-white hover:bg-lime-400 gap-2 hover:text-black "
              >
                <p className="text-center font-bold  "> work with us</p>
                <MdArrowOutward className="h-5" />
              </button>
            </div>
          </div>
          <hr className="h-px mt-16 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-9 ">
            <img src={logo} alt="Logo" className="h-16" />
            <p className="text-4xl font-bold mt-3"> ideate</p>
          </div>
          <div>
            <p className="text font-bold ">hello@ideatesolutions.studio</p>
            <p className="text font-bold text-right"> Davao City, PH 8000</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <p className="text font ">@ideate 2023</p>
            <p className="text font-medium ">CONTACT US</p>
          </div>
          <div className="flex flex-row gap-4">
            {/* <img src={logo} alt="Logo" className="h-5" />
            <img src={logo} alt="Logo" className="h-5" />
            <img src={logo} alt="Logo" className="h-5" /> */}
            <img src={Flogo} alt="Logo" className="h-5" />
            <img src={Ilogo} alt="Logo" className="h-5" />
            <img src={Llogo} alt="Logo" className="h-5" />
            <motion.div ref={constraintsRef}>
              <motion.div drag dragConstraints={constraintsRef} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
