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
import vegeGO from "../assets/maps_proje/biom_vege_map.png"
import araxa_savi from "../assets/maps_proje/vegetacao_savi_map.png"
import geologic1 from "../assets/maps_proje/go-geologia-geomorfologia.png"
import healthcareheatmap from "../assets/maps_proje/mapa_calor_bh_centro_saude.png"
import moistureComp from "../assets/maps_proje/umidade_comparacao.png"
import rivers_south_america from "../assets/maps_proje/america_do_sul_rios.png"
import queimadas_inpe from "../assets/maps_proje/queimadas_comparacao_inpe.png"
import mapa_sub_bacias_hidrograficas_araxa from "../assets/maps_proje/mapa_sub_bacias_hidrograficas_araxa.png"

import brazil_bio from "../assets/maps_proje/arc/brazil_bio.png"
import bh_utilities from "../assets/maps_proje/arc/bh_utilities_energy.jpg"
import usdo_da_terra from "../assets/maps_proje/arc/uso_da_terra.jpg"
import morfoestrutura from "../assets/maps_proje/arc/morfoestruturas_go.jpg"
import setores_sensiARCs from "../assets/maps_proje/arc/setores_sesitarios.jpg"
import sustenta_arc from "../assets/maps_proje/arc/niveis_sustenta.jpg"
import relevo_arc from "../assets/maps_proje/arc/relevo_hidro_araxa.jpg"
import bh_relevo_curvas_arc from "../assets/maps_proje/arc/bh-relevo-curvas-de-nivel.jpg"

import weather from "../assets/programming/weather.png"
import dynamic_maps from "../assets/programming/dynamic_maps.png"

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
        title: "System Analyst",
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
        name: "Biomes and Vegetation of Goiás",
        image: vegeGO,
        long_description: "The map of the biomes and vegetation of Goiás provides a comprehensive overview of the diverse ecosystems in the region, including savannas, forests, and wetlands. This detailed visualization is crucial for environmental conservation and river preservation efforts. By identifying the natural habitats and vegetation types, authorities and environmentalists can implement targeted measures to protect the river ecosystems, prevent deforestation, and promote sustainable land use practices. The map aids in monitoring changes in vegetation cover and supports initiatives to maintain the health and biodiversity of Goiás's rivers and surrounding landscapes.",
        tools: 'QGIS',
    },
    {

        name: "Morphostructural Domains of Goiás",
        image: morfoestrutura,
        long_description: "The Morphostructural Domains of Goiás map highlights the geological structures and landforms of the region. This detailed visualization is crucial for construction planning, helping engineers and planners identify suitable areas for development, assess potential risks, and ensure the stability and safety of construction projects.",
        tools: 'ARCGIS',
    },
    {
        name: "Fire Hotspots in Minas Gerais (MG) and São Paulo (SP)",
        image: queimadas_inpe,
        long_description: "This map reveals a significant increase in fire incidents over the past year, highlighting regions with the highest concentrations of these events. By visualizing this data, the map serves as a crucial tool for understanding trends and patterns in fire occurrences. Effective monitoring and analysis of these hotspots can assist in identifying vulnerable areas, enabling targeted interventions and preventive measures.",
        tools: 'QGIS',
    },
    {
        name: "Final disposal of household waste",
        image: residuos,
        long_description: "An illustration of the different methods of household waste disposal across various regions. The map categorizes disposal practices into controlled landfills, sanitary landfills, open dumps, and areas with no information. This detailed visualization is essential for environmental planning and management, aiding authorities in identifying regions that need improved waste management infrastructure and policies.",
        tools: 'QGIS',
    },
    {
        name: "Savi Vegetation Index of Araxá",
        image: araxa_savi,
        long_description: "This thematic map of Araxá illustrates the SAVI (Soil-Adjusted Vegetation Index) across the municipality, highlighting variations in vegetation density. The map serves as a valuable tool for monitoring vegetation health, managing urban development, and supporting the creation of Melipona bees of the region. By providing insights into areas with different levels of vegetation cover, it supports decision-making in environmental conservation, land use planning, and sustainable development initiatives.",
        tools: 'QGIS',
    },
    {
        name: "Comparison of soil moisture in Araxá with NDMI.",
        image: moistureComp,
        long_description: "This map shows that due to global warming, the slight increase in moisture from 2019 to 2024 is not a positive development, as it coincides with an increase in dry areas, exacerbating regional imbalances and highlighting the negative impacts of climate change, such as the unequal distribution of water and the rise in extreme weather events.",
        tools: 'QGIS',
    },
    {
        name: "Hydrographic Sub-Basins of Araxá",
        image: mapa_sub_bacias_hidrograficas_araxa,
        long_description: "This map illustrates the distribution of the sub-basins in the Araxá region, highlighting the main drainage areas, represented by distinct colors. Each sub-basin is identified according to its respective stream or main river, including important watercourses such as Córrego da Galinha, Córrego do Retiro, and the Marmelo and Tamanduá rivers, among others. All hydrological data were obtained from a single Digital Elevation Model (DEM), extracted from the NASADEM mission, available on the OpenTopography portal.",
        tools: 'QGIS',
    },
    {
        name: "Araxá Slope Map",
        image: declividade,
        long_description: "Delving into the topographic characteristics of Araxá to better identify areas prone to landslides and erosion, this slope map aids in agricultural planning, environmental management, and the strategic location of points for mineral extraction.",
        tools: 'QGIS',
    },

    {
        name: "Land Use Map Araxá",
        image: usdo_da_terra,
        long_description: "This map vividly displays the diverse ways the land is utilized. It highlights agricultural areas, artificial surfaces, forest and campestral mosaics, managed pastures, silviculture, and various types of vegetation. This detailed depiction is an invaluable resource for urban planners, environmentalists, and policymakers to strategize sustainable land use, conserve natural resources, and enhance regional development.",
        tools: 'ARCGIS',
    },
    {
        name: "Mapping of Meliponas in Vulnerable Conditions in the Urban Environment",
        image: meli_loc,
        long_description: "Research conducted in a part of downtown Araxá. The survey was conducted to understand the dispersion and interaction of local native bees, their development, and the dangers threatening the hives. The presence of Meliponas in the urban environment plays a crucial role in the city's health, as these native bees are excellent pollinators, contributing to the maintenance of gardens, parks, and urban green areas. Additionally, Meliponas help improve air quality and mitigate the effects of global warming, making them essential for the ecological resilience of cities.",
        tools: 'QGIS',
    },
    {
        name: "Relief and Hydrography of Araxá",
        image: relevo_arc,
        long_description: "The 'Relief and Hydrography of Araxá' map offers a comprehensive overview of the region's terrain and water features, supporting land use planning, environmental management, and infrastructure projects. It serves as a crucial tool for decision-making in sustainable development, like aiding in tracking environmental changes that could impact bee populations, thereby contributing to their conservation and the maintenance of local biodiversity.",
        tools: 'ARCGIS',
    },
    {
        name: "Map of Census Tracts of Araxá",
        image: setores_sensiARCs,
        long_description: "This map of Araxá classifies its sectors, enabling more efficient territorial management and comprehensive socioeconomic analysis. It offers a segmented view of the urban and rural characteristics of the municipality, providing valuable insights for regional development and planning.",
        tools: 'ARCGIS',
    },
    {
        name: "Belo Horizonte: Relief and Contour Lines",
        image: bh_relevo_curvas_arc,
        long_description: "A map of Belo Horizonte featuring its relief and contour lines is a valuable tool for urban planning, environmental studies, and infrastructure development. It helps visualize the city's topography, highlighting elevation changes and terrain features, which are important for construction projects, flood risk analysis, and land use planning. Contour lines provide detailed information on slope gradients, making it easier to assess suitable areas for development or conservation. The map also aids in transportation planning, as elevation impacts road and railway design. It's useful for tourism, hiking, and geographic education.",
        tools: 'ARCGIS',
    },
    {
        name: "Heatmap of Healthcare Centers in Belo Horizonte",
        image: healthcareheatmap,
        long_description: "This visualization helps in understanding the accessibility and availability of healthcare services for different neighborhoods. By highlighting areas with high and low concentrations of centers, city planners and health officials can make informed decisions on resource allocation, identify regions that may need additional facilities, and ensure equitable access to healthcare services for all residents. This map is a valuable tool for improving urban health planning and addressing healthcare needs in Belo Horizonte.",
        tools: 'QGIS',
    },
    {
        name: "Population Map by Municipality",
        image: pop_nun,
        long_description: "Thematic map of the population of Brazilian municipalities based on data from the IBGE demographic census of 2022. Its data provides assistance for planning and decision-making in various areas such as health, education, infrastructure, and public policies.",
        tools: 'QGIS',
    },
    {
        name: "Sustainable Development Index",
        image: sustenta_arc,
        long_description: "This map visually represents energy accessibility and cleanliness across Brazil's regions, emphasizing the critical role of SDG 7 in promoting environmental sustainability and fostering economic development through cleaner, more accessible energy sources.",
        tools: 'ARCGIS',
    },
    {
        name: "Biomes of Brazil",
        image: brazil_bio,
        long_description: "Cartographic representation to analyze and understand the environmental diversity of Brazil, identifying and delineating the different types of ecosystems present in our country.",
        tools: 'ARCGIS',
    },
    {
        name: "Hydrographic networks of South America",
        image: rivers_south_america,
        long_description: "Highlighting the complexity and density of watercourses across various regions, this map is a valuable tool for studying hydrological patterns in South America, including river flow dynamics, watershed boundaries, and the connectivity between different water bodies.",
        tools: 'QGIS',
    }
];

const projects2 = [
    // {
    //     name: "Portfolio Fron-End",
    //     image: port_front,
    //     source_code_link: "https://github.com/Hugones45/portifolio_front",
    //     source_code_app: "https://portifolio-front-rho.vercel.app/"
    // },
    {
        name: "Dynamic Maps",
        image: dynamic_maps,
        source_code_link: "https://github.com/Hugones45/dynamic_geo_app_sec",
        source_code_app: "https://dynamic-maps-sec.vercel.app/"

    },
    {
        name: "Real-Time Weather",
        image: weather,
        source_code_link: "https://github.com/Hugones45/app_weather_time",
        source_code_app: "https://app-weather-time.vercel.app/"

    },

    // {
    //     name: "3D T-Shirt Generator",
    //     image: shirt_front,
    //     source_code_link: "https://github.com/Hugones45/shirt_storege",
    //     source_code_app: "https://shirt-storege.vercel.app/"

    // },
    // {
    //     name: "ShopCar Responsive",
    //     image: shop_proje,
    //     source_code_link: "https://github.com/Hugones45/shop-cart_with_data_base",
    //     source_code_app: "https://shop-local-storage.vercel.app/"

    // },
    {
        name: "Python Script Map Generator",
        image: geoPandass,
        source_code_link: "https://github.com/Hugones45/Geo_script",
    },
];

export { services, technologies, experiences, testimonials, projects, projects2, certificates };