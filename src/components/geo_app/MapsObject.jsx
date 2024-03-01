//SUDESTE
import mg from "../geo_app/maps/SUDESTE/MG.png"
import rj from "../geo_app/maps/SUDESTE/RJ.png"
import sp from "../geo_app/maps/SUDESTE/SP.png"
import es from "../geo_app/maps/SUDESTE/ES.png"

// CENTRO-OESTE
import df from "../geo_app/maps/CENTRO_OESTE/DF.png"
import go from "../geo_app/maps/CENTRO_OESTE/GO.png"
import ms from "../geo_app/maps/CENTRO_OESTE/MS.png"
import mt from "../geo_app/maps/CENTRO_OESTE/MT.png"

// NORDESTE
import al from "../geo_app/maps/NORDESTE/AL.png"
import ba from "../geo_app/maps/NORDESTE/BA.png"
import ce from "../geo_app/maps/NORDESTE/CE.png"
import ma from "../geo_app/maps/NORDESTE/MA.png"
import pb from "../geo_app/maps/NORDESTE/PB.png"
import pe from "../geo_app/maps/NORDESTE/PE.png"
import pi from "../geo_app/maps/NORDESTE/PI.png"
import rn from "../geo_app/maps/NORDESTE/RN.png"
import se from "../geo_app/maps/NORDESTE/SE.png"

//NORTE
import ac from "../geo_app/maps/NORTE/AC.png"
import am from "../geo_app/maps/NORTE/AM.png"
import ap from "../geo_app/maps/NORTE/AP.png"
import pa from "../geo_app/maps/NORTE/PA.png"
import ro from "../geo_app/maps/NORTE/RO.png"
import rr from "../geo_app/maps/NORTE/RR.png"
import to from "../geo_app/maps/NORTE/TO.png"

//SUL
import pr from "../geo_app/maps/SUL/PR.png"
import rs from "../geo_app/maps/SUL/RS.png"
import sc from "../geo_app/maps/SUL/SC.png"

import { useState } from "react"

export const MapsObjects = ({ catch_map }) => {

    const [allMaps] = useState([
        {
            name: 'Minas Gerais',
            img: mg
        },
        {
            name: 'São Paulo',
            img: sp
        },
        {
            name: 'Rio de Janeiro',
            img: rj
        },
        {
            name: 'Espírito Santo',
            img: es
        },
        {
            name: 'Brasília',
            img: df
        },
        {
            name: 'Goiás',
            img: go
        },
        {
            name: 'Mato Grosso do Sul',
            img: ms
        },
        {
            name: 'Mato Grosso',
            img: mt
        },
        {
            name: 'Alagoas',
            img: al
        },
        {
            name: 'Ceará',
            img: ce
        },
        {
            name: 'Bahia',
            img: ba
        },
        {
            name: 'Maranhão',
            img: ma
        },
        {
            name: 'Paraíba',
            img: pb
        },
        {
            name: 'Pernambuco',
            img: pe
        },
        {
            name: 'Piauí',
            img: pi
        },
        {
            name: 'Rio Grande do Norte',
            img: rn
        },
        {
            name: 'Sergipe',
            img: se
        },
        {
            name: 'Acre',
            img: ac
        },
        {
            name: 'Amazonas',
            img: am
        },
        {
            name: 'Amapá',
            img: ap
        },
        {
            name: 'Pará',
            img: pa
        },
        {
            name: 'Rondônia',
            img: ro
        },
        {
            name: 'Roraima',
            img: rr
        },
        {
            name: 'Tocantins',
            img: to
        },
        {
            name: 'Paraná',
            img: pr
        },
        {
            name: 'Rio Grande do Sul',
            img: rs
        },
        {
            name: 'Santa Catarina',
            img: sc
        }
    ])

    const findImageMap = (theMap) => {
        const find_the_map = allMaps?.find((item) => item.name === theMap)?.img
        return find_the_map
    }

    return (
        <div>
            <img style={{ width: '100%' }}
                src={findImageMap(catch_map)} />
        </div>
    )
}
