import { useParams } from "react-router-dom";
import { projects } from "../constants";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { UtilityContext } from "../context/UtilityContext";

const ImgMaps = () => {
    const { index } = useParams();
    const project = projects[parseInt(index, 10)];

    const { counter, setCounter } = useContext(UtilityContext)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <div>Project not found</div>;
    }

    const alteraContext = () => {
        setCounter(2)
    }

    return (
        <div className="p-6 min-h-screen" style={{ backgroundColor: 'rgb(5, 8, 22)' }}>
            <Link to="/#work">
                <button className="mr-4 md:mr-8 mb-4 md:mb-8 cursor-pointer border border-white py-2 px-6 md:py-3 md:px-8 rounded-lg hover:bg-slate-700" onClick={() => alteraContext()}>Back To Portfolio</button>
            </Link>

            <div className="flex justify-center mb-4">
                <h2 className="underline text-2xl md:text-3xl">{project.name}</h2>
            </div>

            <div className="flex justify-center">
                <img className="w-full md:max-w-screen-md" src={project.image} alt={project.name} />
            </div>

            <div className="flex justify-center flex-col items-center mb-8 gap-5 mt-4">
                <p className="w-full md:max-w-screen-md px-4">Description: {project.long_description}</p>

                <div className="flex flex-row justify-center items-center gap-2">
                    <span>Tools:</span>
                    <p className="border border-white rounded-lg bg-gray-600 px-4 py-2 hover:bg-slate-700">{project.tools}</p>
                </div>
            </div>
        </div>
    );
};

export default ImgMaps;
