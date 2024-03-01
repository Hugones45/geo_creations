import { About, Geo, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "../components"


const MainPages = () => {
    return (

        <div>
            <div className="relative z-0 bg-primary">

                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">

                    <Navbar />
                    <Hero />
                </div>
                <div className="relative z-0" >

                    <Geo />
                    <StarsCanvas />

                </div>
                <Works />

                <Experience />
                <Tech />

                <About />

            </div>
        </div>
    )
}

export default MainPages