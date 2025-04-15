import { About, Geo, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "../components"


const MainPages = () => {
    return (

        <div>
            <div className="relative z-0 bg-primary">

                <div className="relative z-0" >

                    <Geo />
                    <StarsCanvas />

                </div>
                <About />

                <Works />


                <Navbar />
                <Hero />


                <Experience />
                <Tech />


            </div>
        </div>
    )
}

export default MainPages