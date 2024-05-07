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
        name: "Mapa de População por Município",
        image: pop_num,
        long_description: "Mapa temático da população dos municípios brasileiros com base em dados do censo demográfico do IBGE de 2022, seus dados fornecem ajuda para o planejamento e a tomada de decisões em diversas áreas, como saúde, educação, infraestrutura e políticas públicas.",
        tools: 'QGIS',
    },
    {
        name: "Vegetação de Minas Gerais",
        image: l_araxa,
        long_description: "Análise essencial para entender a diversidade biológica do estado, ajudando na conservação de ecossistemas e na tomada de decisões para o uso sustentável da terra. O conhecimento sobre as vegetações nativas fornece informações valiosas para o planejamento ambiental, gestão de recursos naturais e desenvolvimento de políticas de preservação, contribuindo para a proteção da biodiversidade e o equilíbrio dos ecossistemas.",
        tools: 'QGIS',
    },
    {
        name: "Mapeamento de Meliponas em Condições Vulneráveis no Ambiente Urbano",
        image: meliponas,
        long_description: "Pesquisa realizada em uma parte do centro de Araxá. O levantamento foi feito para entender a dispersão e interação das abelhas nativas locais, seu desenvolvimento e os perigos que ameaçam as colmeias. A presença de meliponas no meio urbano desempenha um papel crucial na saúde da cidade, pois essas abelhas nativas são excelentes polinizadoras, contribuindo para a manutenção de jardins, parques e áreas verdes urbanas. Além disso, as meliponas ajudam a melhorar a qualidade do ar e a mitigar os efeitos do aquecimento global, tornando-as essenciais para a resiliência ecológica das cidades.",
        tools: 'QGIS',
    },
    {
        name: "Localização do Município de Araxá",
        image: location_qgis,
        long_description: "Representação cartográfica da localização da cidade de Araxá, orientando e facilitando o planejamento de viagens, o estudo de relações espaciais e a análise de proximidade com recursos e infraestrutura adjacentes.",
        tools: 'QGIS',
    },
    {
        name: "Localização com Imagens Google",
        image: araxa_satelite,
        long_description: "Esta representação de localização da cidade de Araxá, utiliza imagens de satélite do Google para proporcionar uma perspectiva distinta do terreno. Uma abordagem que permite insights essenciais para a gestão eficaz dos recursos urbanos e do ambiente circundante.",
        tools: 'ArcGIS',
    },
    {
        name: "Mapa dos Setores Censitários de Áraxa",
        image: set_sens,
        long_description: "Este mapa de Araxá classifica seus setores, possibilitando uma gestão territorial mais eficiente e uma análise socioeconômica abrangente. Ele oferece uma visão segmentada das características urbanas e rurais do município, proporcionando insights valiosos para o desenvolvimento e planejamento regional.",
        tools: 'QGIS',
    },
    {
        name: "Mapa de Declividade de Araxá",
        image: decliv,
        long_description: "Adentrando nas características topográficas de Araxá para melhor identificar áreas suscetíveis a deslizamentos e erosão, este mapa de declividade auxilia no planejamento da agricultura, gestão ambiental e localização estratégica de pontos para extração de minérios.",
        tools: 'QGIS',
    },
    {
        name: "Localização do Município de Ouro Preto",
        image: location_arc,
        long_description: "Mapa que destaca a localização geográfica da cidade de Ouro Preto, servindo como guia essencial para o planejamento de viagens, investigações de relações espaciais e avaliações de proximidade com recursos e infraestrutura vizinhos.",
        tools: 'ArcGIS',
    },
    {
        name: "Unidades de Conservação de Ouro Preto",
        image: ouro_preto_uni,
        long_description: "Explorando as unidades de conservação em Ouro Preto, este mapa oferece uma representação das áreas protegidas dentro do município. Essa visualização é fundamental para o planejamento ambiental e a preservação da biodiversidade, além de promover o desenvolvimento de práticas de turismo sustentável na região.",
        tools: 'Python, GeoPandas',
    },
    {
        name: "Biomas do Brasil",
        image: biomas_br,
        long_description: "Representação cartográfica para analisarmos e compreendermos a diversidade ambiental brasileira, identificando e delimitando os diferentes tipos de ecossistemas existentes em nosso país.",
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