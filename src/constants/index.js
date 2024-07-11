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
import sql from "../assets/tech/s.png"
import postgre2 from "../assets/tech/pngwing.com.png"
import postgis from "../assets/tech/postgis.png"


import bittec from "../assets/bittech.png"
import power from "../assets/power.png"
import esri from "../assets/esri.png"


import residuos from "../assets/maps_proje/map_layout_residuos.png"
import geo_economic from "../assets/maps_proje/carac_geo_e_economic.png"
import declividade from "../assets/maps_proje/declividade.png"
import araxa_loc from "../assets/maps_proje/araxa_loc.png"
import meli_loc from "../assets/maps_proje/meli.png"
import uso_solo from "../assets/maps_proje/mapa_1_.png"
import setores_sensi from "../assets/maps_proje/setores_sensi.png"
import ods7 from "../assets/maps_proje/ods7.png"
import pop_nun from "../assets/maps_proje/mapa_pop_nun_2022.png"
import brazil_bio from "../assets/maps_proje/brazil_bio.png"
import vege from "../assets/maps_proje/compositor_vegetacao_mg.jpg"

import weather from "../assets/programming/weather.png"
import route_fuel from "../assets/programming/route_fuel.png"

import meli_araxa from "../assets/company/bee.jpg"
import udemy from "../assets/company/udemy.png"

import port_front from "../assets/port_front.png"
import shop_proje from "../assets/shop_front.png"
import shirt_front from "../assets/shirt_front.png"
import geoPandass from "../assets/geopandas_logo.png"

export const navLinks = [


    {
        id: "work",
        title: "Work",
    },
    {
        id: "geoApp",
        title: "Geo App!",
    },
    {
        id: "experience",
        title: "Experience",
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
        name: "QGis",
        icon: qgis,
    },
    {
        name: "Arc Gis",
        icon: arcgis,
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
        name: "SQL",
        icon: sql
    },
    {
        name: "PostGree",
        icon: postgre2
    },
    {
        name: "Post Gis",
        icon: postgis
    },
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
];

const certificates = [
    {
        title: "ESRI",
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
        title: "Udemy Certificates",
        icon: udemy,
        iconBg: "#fff",
        points: [
            "Learn Geoprocessing with QGIS",
            "Getting Started with Python GIS",
            "SQL Language for Data Analysis",
            "React from Zero to Mastery",
            "React Js with TypeScript",
        ],
    },
]

const experiences = [
    {
        title: "Meliponicultores Araxá - Minas Gerais",
        company_name: "Geoprocessing Analyst - Volunteer Work",
        icon: meli_araxa,
        iconBg: "#fff",
        points: [
            "Development of projects for the preservation of native bee species in urban environments using ArcGIS and QGIS.",
            "Implementation of predictive models to assess environmental impact on bee populations.",
            "Collection, organization, cleaning, and standardization of data from public and private sources, ensuring quality and accuracy of databases and geospatial data.",
            "Application of spatial analyses to identify and monitor critical areas for the conservation of stingless bees.",
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
        name: "Geographic and Socioeconomic Characteristics of Minas Gerais",
        image: geo_economic,
        long_description: "This thematic map of Minas Gerais illustrates the state's key geographical and socioeconomic features, including population distribution, elevation, Human Development Index (HDI), and Gross Domestic Product (GDP) per capita. The map serves as a valuable tool for understanding regional disparities and supporting decisions in urban planning, economic development, and social policy implementation.",
        tools: 'QGIS',
    },
    {
        name: "Vegetation of Minas Gerais",
        image: vege,
        long_description: "An essential analysis to understand the biological diversity of the state, aiding in the conservation of ecosystems and decision-making for sustainable land use. Knowledge about native vegetation provides valuable information for environmental planning, natural resource management, and the development of preservation policies, contributing to biodiversity protection and ecosystem balance.",
        tools: 'QGIS',
    },
    {
        name: "Final disposal of household waste",
        image: residuos,
        long_description: "An illustration of the different methods of household waste disposal across various regions. The map categorizes disposal practices into controlled landfills, sanitary landfills, open dumps, and areas with no information. This detailed visualization is essential for environmental planning and management, aiding authorities in identifying regions that need improved waste management infrastructure and policies.",
        tools: 'QGIS',
    },
    {
        name: "Location of the Municipality of Araxá",
        image: araxa_loc,
        long_description: "Cartographic representation of the location of the city of Araxá, guiding and facilitating travel planning, the study of spatial relationships, and the analysis of proximity to adjacent resources and infrastructure.",
        tools: 'QGIS',
    },
    {
        name: "Araxá Slope Map",
        image: declividade,
        long_description: "Delving into the topographic characteristics of Araxá to better identify areas prone to landslides and erosion, this slope map aids in agricultural planning, environmental management, and the strategic location of points for mineral extraction.",
        tools: 'QGIS',
    },
    {
        name: "Mapping of Meliponas in Vulnerable Conditions in the Urban Environment",
        image: meli_loc,
        long_description: "Research conducted in a part of downtown Araxá. The survey was conducted to understand the dispersion and interaction of local native bees, their development, and the dangers threatening the hives. The presence of Meliponas in the urban environment plays a crucial role in the city's health, as these native bees are excellent pollinators, contributing to the maintenance of gardens, parks, and urban green areas. Additionally, Meliponas help improve air quality and mitigate the effects of global warming, making them essential for the ecological resilience of cities.",
        tools: 'QGIS',
    },
    {
        name: "Land Use Map Araxá",
        image: uso_solo,
        long_description: "This map vividly displays the diverse ways the land is utilized. It highlights agricultural areas, artificial surfaces, forest and campestral mosaics, managed pastures, silviculture, and various types of vegetation. This detailed depiction is an invaluable resource for urban planners, environmentalists, and policymakers to strategize sustainable land use, conserve natural resources, and enhance regional development.",
        tools: 'QGIS',
    },
    {
        name: "Map of Census Tracts of Araxá",
        image: setores_sensi,
        long_description: "This map of Araxá classifies its sectors, enabling more efficient territorial management and comprehensive socioeconomic analysis. It offers a segmented view of the urban and rural characteristics of the municipality, providing valuable insights for regional development and planning.",
        tools: 'QGIS',
    },

    {
        name: "Sustainable Development Index",
        image: ods7,
        long_description: "This map visually represents energy accessibility and cleanliness across Brazil's regions, emphasizing the critical role of SDG 7 in promoting environmental sustainability and fostering economic development through cleaner, more accessible energy sources.",
        tools: 'QGIS',
    },
    {
        name: "Population Map by Municipality",
        image: pop_nun,
        long_description: "Thematic map of the population of Brazilian municipalities based on data from the IBGE demographic census of 2022. Its data provides assistance for planning and decision-making in various areas such as health, education, infrastructure, and public policies.",
        tools: 'QGIS',
    },
    {
        name: "Biomes of Brazil",
        image: brazil_bio,
        long_description: "Cartographic representation to analyze and understand the environmental diversity of Brazil, identifying and delineating the different types of ecosystems present in our country.",
        tools: 'ARCGIS',
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
        name: "Routes and Fuel ",
        image: route_fuel,
        source_code_link: "https://github.com/Hugones45/Route-and-Fuel-Google-Maps",
        source_code_app: "https://route-and-fuel-google-maps.vercel.app/"

    },
    {
        name: "Real-Time Weather",
        image: weather,
        source_code_link: "https://github.com/Hugones45/app_weather_time",
        source_code_app: "https://app-weather-time.vercel.app/"

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

export { services, technologies, experiences, testimonials, projects, projects2, certificates };