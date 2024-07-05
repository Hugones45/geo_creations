import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapsCards } from "./geo_app/MapsCards";
import { MapsObjects } from "./geo_app/MapsObject";
import { Pavimentos } from "./geo_app/Pavimentos";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [loading] = useState(false);
  const [apiTest, setApiTest] = useState([]);
  const [selectMap, setSelectMap] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [invalidAcronym, setInvalidAcronym] = useState(false);
  const [selectedAcronym, setSelectedAcronym] = useState('');

  const url = "https://geo-data-states.vercel.app/states";

  useEffect(() => {
    const getApi = async () => {
      const resp = await fetch(url);
      const restData = await resp.json();
      setApiTest(restData);
    };
    getApi();
  }, []);

  useEffect(() => {
    // Call gessTheState() whenever selectedAcronym changes
    if (selectedAcronym) {
      gessTheState();
    }
  }, [selectedAcronym]);

  function gessTheState() {
    const findMap = apiTest.find((item) => item.acronym === selectedAcronym);
    if (findMap) {
      setSelectMap(findMap);
      setToggle(true);
      setInvalidAcronym(false);
    } else {
      setSelectMap(null);
      setInvalidAcronym(true);
    }
  }

  function EraseGuess() {
    setToggle(false); // Toggle off when clearing the guess
    setSelectedAcronym('');
    setSelectMap(null);
  }

  return (
    <section className="relative w-full min-h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-8- h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Greetings! I'm <span className='text-[#915EFF]'>Hugo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Committed to crafting intuitive interfaces, <br className='sm:block hidden' />
            dynamic web apps and innovative geographic softwares.
          </p>
        </div>
      </div>
      <div className="flex-1 w-full h-full flex items-center justify-center z-0">
        <motion.div className="relative top-[18rem] w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] md:w-[850px] md:h-[850px] xl:w-[600px] xl:h-[600px] mb-[100px]">
          <EarthCanvas spin={true} />
        </motion.div>
      </div>
      <div className="absolute bottom-16 xs:bottom-10 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w=[35px] h-[300px] rounded-3xl border-4 border-transparent flex justify-center items-start p-2">

          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
