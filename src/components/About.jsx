import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects2 } from "../constants"

import { fadeIn, textVariant } from "../utils/motion"

import google from "../assets/google.png"

const ProjectCard = ({ index, name, description, tags, image, source_code_link, code_key, source_code_app }) => {
  const isLastItem = index === projects2.length - 1;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1.05,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >

        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            {/* Tooltip for Google Chrome icon */}
            {!isLastItem && (
              <div
                onClick={() => window.open(source_code_app, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                title="To the App"
              >
                <img
                  src={google}
                  alt="Google Chrome"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}

            {/* Tooltip for GitHub icon */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              title="To GitHub"
            >
              <img
                src={github}
                alt="GitHub"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

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
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Web Applications</h2>
      </motion.div>

      {/* <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Abaixo, você pode conferir alguns dos meus trabalhos, além do meu portfólio de desenvolvedor front-end.
        </motion.p>
      </div> */}


      <div className="mt-20 flex flex-wrap gap-7">
        {projects2.map((item, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...item} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "programming")