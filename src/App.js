import { Routes, Route } from "react-router-dom"

import Header from './components/Header/'
import Footer from './components/Footer'
import Aboutpage from './page/Aboutpage/'
import Contactpage from './page/Contactpage/'
import Homepage from './page/Homepage/'
import Notfoundpage from './page/Notfoundpage/'
import Categorypage from './page/Categorypage/'
import Recipe from "./page/Recipe/Recipe"

const App = () => {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/about" element={<Aboutpage/>} />
      <Route path="/contact" element={<Contactpage/>} />
      <Route path="/category/:name" element={<Categorypage/>} />
      <Route path="/recipe/:id" element={<Recipe/>} />
      <Route path="/*" element={<Notfoundpage/>} />
    </Routes>
    <Footer  />
    </>
  )
}

export default App