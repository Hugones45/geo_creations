import { Routes, Route } from "react-router-dom"
import MainPages from "./pages/MainPages"
import ImgMaps from "./pages/ImgMaps"

function App() {
  return (
    <div>

      <Routes>

        <Route path="/" element={<MainPages />} />
        <Route path="/maps/:index" element={<ImgMaps />} />

      </Routes>


    </div>
  )
}

export default App