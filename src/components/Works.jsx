import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"

import { fadeIn, textVariant } from "../utils/motion"
import { useNavigate } from "react-router-dom"

const ProjectCard = ({ index, name, description, image }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/maps/${index}`);
  };

  return (
    <motion.div onClick={() => handleClick()} className="cursor-pointer">
      <Tilt
        options={{
          max: 45,
          scale: 1.05,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full"
      >

        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div >
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      {/* <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Os seguintes projetos demonstram minhas habilidades e experiências, com um foco especial na cidade de Araxá e seus recursos.
        </motion.p>
      </div> */}


      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((item, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...item} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")