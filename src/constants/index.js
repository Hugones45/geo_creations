import {
    creator,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
} from "../assets/";

import geop from "../assets/tech/1.png"
import python from "../assets/tech/python.png"
import qgis from "../assets/tech/qgis.png"
import arcgis from "../assets/tech/arcgis.png"

import bittec from "../assets/bittech.png"
import power from "../assets/power.png"
import esri from "../assets/esri.png"

import biomas_br from "../assets/biomas_br.png"
import location_arc from "../assets/location_arc.jpg"
import location_qgis from "../assets/location_qgis.png"
import pop_num from "../assets/pop_num.png"
import set_sens from "../assets/set_sens.png"
import decliv from "../assets/decliv.png"
import l_araxa from "../assets/compositor_vegetacao_mg.jpg"
import meliponas from "../assets/abelhass.jpg"
import araxa_satelite from "../assets/araxa_mapa_satelite.jpg"

import port_front from "../assets/port_front.png"
import shop_proje from "../assets/shop_front.png"
import shirt_front from "../assets/shirt_front.png"
import ouro_preto_uni from "../assets/ouropreto_preser_uni.png"
import geoPandass from "../assets/geopandas_logo.png"

export const navLinks = [

    {
        id: "geoApp",
        title: "Geo App!",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "programming",
        title: "Programming",
    },
];

const services = [
    {
        title: "Front-End Portifolio",
        icon: port_front,
    },
    {
        title: "Shop",
        icon: shop_proje,
    },
    {
        title: "3D Shirt Generator",
        icon: shirt_front,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "python",
        icon: python,
    },
    {
        name: "geopandas",
        icon: geop,
    },
    {
        name: "QGis",
        icon: qgis,
    },
    {
        name: "Arc Gis",
        icon: arcgis,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    }
];

const experiences = [
    {
        title: "ESRI Certificates",
        company_name: "Environmental Systems Research Institute - ESRI",
        icon: esri,
        iconBg: "#fff",
        points: [
            "Using GIS to Solve Problems",
            "ArcGIS Online Basics",
            "ArcGIS Pro Basics",
            "Exploring GIS Maps",
            "Getting Information from a GIS Map",
            "Getting Started with Data Management",
            "Getting Started with Spatial Analysis",
            "GIS Basics",
            "Putting Your GIS Skills to Work",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Power of Data",
        icon: power,
        iconBg: "#fff",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Creation of a chatbot for investigations of the Civil Police of Minas Gerais.",
            "Development of logic and user interface for a Decision Engine PoD focused on loans.",
            "Development and maintenance of web applications using React.js and other related technologies.",
            "Creative design of product displays and user experiences.",
        ],
    },
    {
        title: "IT Technical Support",
        company_name: "Bit Tech",
        icon: bittec,
        iconBg: "#e2e51a",
        date: "Jan 2023 - Present",
        points: [
            "Support for platform users.",
            "Supervision and maintenance of registrations, campaigns and products.",
            "Knowledge of the company's business rules.",
            "Investigation of system errors.",
        ],
    }
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];
//maps over here
const projects = [
    {
        name: "Population Map by Municipality",
        image: pop_num,
        long_description: "Thematic map of the population of Brazilian municipalities based on data from the IBGE demographic census of 2022. Its data provides assistance for planning and decision-making in various areas such as health, education, infrastructure, and public policies.",
        tools: 'QGIS',
    },
    {
        name: "Vegetation of Minas Gerais",
        image: l_araxa,
        long_description: "An essential analysis to understand the biological diversity of the state, aiding in the conservation of ecosystems and decision-making for sustainable land use. Knowledge about native vegetation provides valuable information for environmental planning, natural resource management, and the development of preservation policies, contributing to biodiversity protection and ecosystem balance.",
        tools: 'QGIS',
    },
    {
        name: "Mapping of Meliponas in Vulnerable Conditions in the Urban Environment",
        image: meliponas,
        long_description: "Research conducted in a part of downtown Araxá. The survey was conducted to understand the dispersion and interaction of local native bees, their development, and the dangers threatening the hives. The presence of Meliponas in the urban environment plays a crucial role in the city's health, as these native bees are excellent pollinators, contributing to the maintenance of gardens, parks, and urban green areas. Additionally, Meliponas help improve air quality and mitigate the effects of global warming, making them essential for the ecological resilience of cities.",
        tools: 'QGIS',
    },
    {
        name: "Location of the Municipality of Araxá",
        image: location_qgis,
        long_description: "Cartographic representation of the location of the city of Araxá, guiding and facilitating travel planning, the study of spatial relationships, and the analysis of proximity to adjacent resources and infrastructure",
        tools: 'QGIS',
    },
    {
        name: "Location with Google Images, Araxá",
        image: araxa_satelite,
        long_description: "This representation of Araxá city's location utilizes Google satellite images to provide a distinct perspective of the terrain. An approach that allows essential insights for effective management of urban resources and the surrounding environment.",
        tools: 'ArcGIS',
    },
    {
        name: "Map of Census Tracts of Araxá",
        image: set_sens,
        long_description: "This map of Araxá classifies its sectors, enabling more efficient territorial management and comprehensive socioeconomic analysis. It offers a segmented view of the urban and rural characteristics of the municipality, providing valuable insights for regional development and planning.",
        tools: 'QGIS',
    },
    {
        name: "Araxá Slope Map",
        image: decliv,
        long_description: "Delving into the topographic characteristics of Araxá to better identify areas prone to landslides and erosion, this slope map aids in agricultural planning, environmental management, and the strategic location of points for mineral extraction.",
        tools: 'QGIS',
    },
    {
        name: "Location of the Municipality of Ouro Preto",
        image: location_arc,
        long_description: "Map highlighting the geographical location of the city of Ouro Preto, serving as an essential guide for travel planning, spatial relationship investigations, and assessments of proximity to neighboring resources and infrastructure.",
        tools: 'ArcGIS',
    },
    {
        name: "Conservation Units of Ouro Preto",
        image: ouro_preto_uni,
        long_description: "Exploring the conservation units in Ouro Preto, this map provides a representation of the protected areas within the municipality. This visualization is crucial for environmental planning and biodiversity preservation, as well as promoting the development of sustainable tourism practices in the region.",
        tools: 'Python, GeoPandas',
    },
    {
        name: "Biomes of Brazil",
        image: biomas_br,
        long_description: "Cartographic representation to analyze and understand the environmental diversity of Brazil, identifying and delineating the different types of ecosystems present in our country.",
        tools: 'ArcGIS',
    },
];

const projects2 = [
    {
        name: "Portfolio Fron-End",
        image: port_front,
        source_code_link: "https://github.com/Hugones45/portifolio_front",
        source_code_app: "https://portifolio-front-rho.vercel.app/"
    },
    {
        name: "3D T-Shirt Generator",
        image: shirt_front,
        source_code_link: "https://github.com/Hugones45/shirt_storege",
        source_code_app: "https://shirt-storege.vercel.app/"

    },
    {
        name: "ShopCar Responsive",
        image: shop_proje,
        source_code_link: "https://github.com/Hugones45/shop-cart_with_data_base",
        source_code_app: "https://shop-local-storage.vercel.app/"

    },
    {
        name: "Python Script Map Generator",
        image: geoPandass,
        source_code_link: "https://github.com/Hugones45/Geo_script",
    },
];

export { services, technologies, experiences, testimonials, projects, projects2 };