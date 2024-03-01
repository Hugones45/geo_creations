import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

import { MapsCards } from "./geo_app/MapsCards"
import { MapsObjects } from "./geo_app/MapsObject"
import { Pavimentos } from "./geo_app/Pavimentos"

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

import { useNavigate } from "react-router-dom"

const Geo = () => {

  const navigate = useNavigate()
  const formRef = useRef()

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = () => { }

  const handleSubmit = () => { }

  const [apiTest, setApiTest] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [selectMap, setSelectMap] = useState(null)
  const [toggle, setToggle] = useState(false)

  const url = "https://geo-data-states.vercel.app/states"

  useEffect(() => {
    const getApi = async () => {
      const resp = await fetch(url)
      const restData = await resp.json()

      setApiTest(restData)
    }

    getApi()
  }, [])

  function gessTheState() {

    const findMap = apiTest.find((item) => item.acronym === inputValue)

    if (findMap) {
      setSelectMap(findMap)
      setToggle(true)
    }

  }

  const cleanInput = () => {
    setInputValue('')
  }

  function EraseGuess() {
    setToggle(!toggle)
    setInputValue('')
    setSelectMap('')
  }

  return (

    <>
      <motion.div>
        <p className={styles.sectionSubText}>Gerador de mapas dos estados brasileiros!</p>
        <p className={styles.sectionSubText}>Com suas principais rodovias, aeroporots e pavimentos dos aeroportos!</p>
        <h2 className={styles.sectionHeadText}>Aplicação Geoespacial</h2>
      </motion.div>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex overflow-hidden">

        <motion.div
          variants={slideIn('left', "tween", 0.2, 1)}
          className=" bg-black-100 p-6"
        >
          {/* <p className={styles.sectionSubText}>Gerador de mapas dos estados brasileiros com suas principais rodovias, aeroporots e pavimentos dos aeroportos!</p> */}
          <div
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Digite a sigla de algum estado!</span>
              <input
                type="text"
                name="email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toUpperCase())}
                placeholder="Sigla do Estado"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              onClick={() => gessTheState()}
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>

            {toggle && selectMap ? <div className="border border-gray-400 p-3 rounded-lg">
              <div className="ml-6 mb-5"><p>Total de Pavimento dos Aeroportos</p></div>
              <Pavimentos
                sobre={selectMap.about}

              /> </div>
              : <>
                <span style={{ height: '400px' }}></span>
              </>}

          </div>
        </motion.div>

        {toggle && selectMap !== "" ? <>
          <div> {/* Adjust the height as needed */}
            <MapsCards
              nome_estado={selectMap.name}
              sobre={selectMap.about}
              img_map={<MapsObjects catch_map={selectMap.name} />}
              id={selectMap.id}
              toggle={() => EraseGuess()}
            />
          </div>

        </> : <>
          <motion.div
            className="xl:flex-1 xl:h-auto md:h-[580px] h-[350px]"
          >
            <EarthCanvas />

          </motion.div>
        </>}

      </div></>
  )
}

export default SectionWrapper(Geo, "geoApp")