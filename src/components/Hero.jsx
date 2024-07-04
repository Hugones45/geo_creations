import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapsCards } from "./geo_app/MapsCards";
import { MapsObjects } from "./geo_app/MapsObject";
import { Pavimentos } from "./geo_app/Pavimentos";
import { styles } from "../styles";
import { ComputersCanvas, EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useNavigate } from "react-router-dom";

const Geo = () => {
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
    <>
      <motion.div>
        <h2 className={styles.sectionHeadText}>Geospatial application</h2>
        <p className={styles.sectionSubText}>
          Developed with Python script <br /> optimized for geospatial databases!
        </p>
      </motion.div>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className=" bg-black-100 p-6"
        >
          <div className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Choose a Brazilian state:
              </span>
              <select
                value={selectedAcronym}
                onChange={(e) => setSelectedAcronym(e.target.value)}
                className="bg-tertiary py-4 px-2 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              >
                <option value="">Select</option>
                {apiTest.map((item) => (
                  <option key={item.name} value={item.acronym}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>

            {invalidAcronym && (
              <div className="flex justify-center">
                <p className="text-red-500 absolute top-65">
                  Wrong abbreviation, please <br className="sm:block hidden" />{" "}
                  try another one.
                </p>
              </div>
            )}

            {toggle && selectMap ? (
              <div className="border border-gray-400 p-3 rounded-lg">
                <div className="ml-4 mb-5">
                  <p>Airport Pavement Classification</p>
                </div>
                <Pavimentos sobre={selectMap.about} />
              </div>
            ) : (
              <span style={{ height: "400px" }}></span>
            )}
          </div>
        </motion.div>

        {toggle && selectMap !== null ? (
          <div>
            <MapsCards
              nome_estado={selectMap.name}
              sobre={selectMap.about}
              img_map={<MapsObjects catch_map={selectMap.name} />}
              id={selectMap.id}
              toggle={() => EraseGuess()}
            />
          </div>
        ) : (
          <motion.div className="relative w-full flex-grow" style={{ height: '600px', position: 'relative', bottom: '130px' }}>
            <ComputersCanvas />
          </motion.div>

        )}
      </div>
    </>
  );
};

export default SectionWrapper(Geo, "geoApp");
