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
        <div className="p-6" style={{ backgroundColor: 'rgb(5 8 22)', minHeight: '100vh' }}>
            <Link to="/#work"><button style={{
                marginRight: '30px',
                cursor: 'pointer',
                border: 'solid 1px #fff',
                padding: '0px 10px',
                marginBottom: '10px',
                borderRadius: '10px'
            }}
                className="hover:bg-slate-700" onClick={() => alteraContext()}>Back To Portfolio</button></Link>

            <div className="flex justify-center mb-4 ">
                <h2 className="underline" style={{ fontSize: '25px' }}>{project.name}</h2>
            </div>

            <div className="flex justify-center">
                <img style={{ width: '100vh' }} src={project.image} alt={project.name} />
            </div>

            <div className="flex justify-center flex-col items-center mb-8 gap-5 mt-4">
                <p style={{ width: '980px', marginLeft: '20px' }}>Descrição: {project.long_description}</p>

                <div className="flex flex-row justify-center items-center gap-2">
                    <span>Ferramentas:</span><p style={{
                        border: 'solid 1px #fff',
                        borderRadius: '10px',
                        backgroundColor: '#616161',
                        padding: '5px'
                    }}
                        className="hover:bg-slate-700"> {project.tools}</p>
                </div>


            </div>


        </div>


    );
};

export default ImgMaps;
