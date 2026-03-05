import { useState } from "react"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { Tabs, ConfigProvider } from "antd"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"

import { fadeIn, textVariant } from "../utils/motion"
import { useNavigate } from "react-router-dom"

const ProjectCard = ({ index, name, image }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/maps/${index}`);
  };

  return (
    <motion.div onClick={() => handleClick()} className="cursor-pointer w-full sm:w-auto">
      <Tilt
        options={{
          max: 45,
          scale: 1.05,
          speed: 450
        }}
        className="bg-tertiary p-3 sm:p-5 rounded-2xl sm:w-[350px] w-full"
      >

        <div className="relative w-full h-[200px] sm:h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

        </div>

        <div className="mt-3 sm:mt-5">
          <h3 className="text-white font-bold text-[18px] sm:text-[20px] md:text-[24px] leading-tight break-words">{name}</h3>
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const [activeTab, setActiveTab] = useState('analytical');

  // Categorias disponíveis
  const categories = [
    { key: 'analytical', label: 'Analytical Maps' },
    { key: 'thematic', label: 'Thematic Maps' },
    { key: 'location', label: 'Location Maps' },
    { key: 'artistic', label: 'Artistic Maps' }
  ];

  // Criar array de projetos com índice original
  const projectsWithIndex = projects.map((project, index) => ({
    ...project,
    originalIndex: index
  }));

  // Filtrar projetos por categoria
  const getProjectsByCategory = (category) => {
    return projectsWithIndex.filter(project => project.category === category);
  };

  // Customizar tema do Ant Design para modo dark
  const antdTheme = {
    token: {
      colorBgContainer: '#151030',
      colorText: '#fff',
      colorTextSecondary: '#aaa6c3',
      colorBorder: '#232631',
      colorPrimary: '#915eff',
      borderRadius: 8,
    },
    components: {
      Tabs: {
        itemSelectedColor: '#915eff',
        itemHoverColor: '#915eff',
        itemActiveColor: '#915eff',
        inkBarColor: '#915eff',
      },
    },
  };

  const tabItems = categories.map(category => ({
    key: category.key,
    label: category.label,
    children: (
      <div className="mt-4 sm:mt-8 flex flex-wrap gap-4 sm:gap-7 justify-center sm:justify-start">
        {getProjectsByCategory(category.key).map((item) => (
          <ProjectCard
            key={`project-${item.originalIndex}`}
            index={item.originalIndex}
            name={item.name}
            image={item.image}
          />
        ))}
      </div>
    ),
  }));

  return (
    <>
      <motion.div>
        <h2 className={styles.sectionHeadText}>Geospatial Works</h2>
        <h3 className={styles.sectionSubText}>Built with ArcGIS Pro, QGIS & Python</h3>
      </motion.div>

      <ConfigProvider theme={antdTheme}>
        <div className="mt-10 sm:mt-16 md:mt-20 w-full overflow-hidden">
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            items={tabItems}
            size="large"
            className="custom-tabs w-full"
            style={{
              color: '#fff',
            }}
          />
        </div>
      </ConfigProvider>
    </>
  )
}

export default SectionWrapper(Works, "work")