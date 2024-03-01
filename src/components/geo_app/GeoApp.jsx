import { useState, useEffect } from "react"
import { MapsCards } from "./MapsCards"
import { MapsObjects } from "./MapsObject"


const GeoApp = () => {

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

        const findMap = apiTest.find((item) => item.name === inputValue)

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

    }
    console.log(apiTest, "API")

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => gessTheState()}>Enviar</button>
            <button onClick={() => cleanInput()}>Limpar Input</button>

            {toggle && selectMap && <>
                <div> <MapsCards
                    nome_estado={selectMap.name}
                    sobre={selectMap.about}
                    img_map={< MapsObjects catch_map={selectMap.name} />}
                    id={selectMap.id}
                    toggle={() => EraseGuess()}
                /></div>
            </>}
        </div>
    )
}

export default GeoApp