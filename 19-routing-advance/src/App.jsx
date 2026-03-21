import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import NoteFound from "./pages/NoteFound"
import Men from "./pages/Men"
import Women from "./pages/Women"
import Kids from "./pages/Kids"
import Courses from "./pages/Courses"
import CoursesDetails from "./pages/CoursesDetails"
import Navbar1 from "./components/Navbar1"

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Navbar1 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />}/>
        <Route path='/courses/:CourseId' element={<CoursesDetails />} />
        <Route path='/product' element={<Product />}>
        <Route path='men' element={<Men />} />
        <Route path='women' element={<Women />} />
        <Route path='kids' element={<Kids />} />
        </Route>
        
        <Route path='*' element={<NoteFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App