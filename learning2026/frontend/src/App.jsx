// import './App.css'
import HeaderComponent from "./Components/HeaderComponent"
import ContentComponentt from "./Components/ContentComponent"
import FooterComponent from "./Components/FooterComponent"
import { Map1 } from "./Components/Map1"
import {Map2}  from "./Components/Map2"
import {Map3}  from "./Components/Map3"
import { Map4 } from "./Components/Map4"
import { Map5 } from "./Components/Map5"
import { Map6 } from "./Components/Map6"
import { Map7 } from "./Components/Map7"
import { Map8 } from "./Components/Map8"
import { Routes,Route } from "react-router"
import { Netflixhome } from "./Components/NetflixHome"
import {Netflixmovies} from './Components/Netflixmovies.jsx'
import {Home} from './Components/Home.jsx'
import { Navbar } from "./Components/Navbar.jsx"
import {CricketTeam} from "./Components/CricketTeam.jsx"
import SingleTeam from "./Components/SingleTeam.jsx"
import FunctionalDemo1 from "./Components/FunctionalDemo1.jsx"
import Usestatedemo2 from "./Components/Usestatedemo2.jsx"
import UseStateDemo1 from "./Components/useStateDemo1.jsx"
import OnchangTask from "./Components/OnchangTask.jsx"


function App() {


  return (  

    <>
    <Navbar></Navbar>
      {/* <HeaderComponent></HeaderComponent> */}
      {/* <ContentComponentt></ContentComponentt> */}
      {/* <Map1></Map1> */}
      {/* <Map2></Map2> */}
      {/* <Map3></Map3> */}
      {/* <Map4></Map4> */}
      {/* <Map5></Map5> */}
      {/* <Map6></Map6> */}
      {/* <Map7></Map7> */}
      {/* <Map8></Map8> */}
      <Routes>
        <Route path="/NetflixHome" element={<Netflixhome/>}></Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/NetflixMovis" element={Netflixmovies}></Route>
        <Route path="/map1" element={<Map1/>}></Route>
        <Route path="/map2" element={<Map2/>}></Route>
        <Route path="/map3" element={<Map3/>}></Route>
        <Route path="/map4" element={<Map4/>}></Route>
        <Route path="/CricketTeam" element={<CricketTeam/>}></Route>
        <Route path="/SingleTeam/:teamName" element={<SingleTeam/>}></Route>
        <Route path="/functionaldamo1" element={<FunctionalDemo1/>}></Route>
        <Route path="/useStateDemp1" element={<UseStateDemo1/>}></Route>
        <Route path="/useStateDemp2" element={<Usestatedemo2/>}></Route>
        <Route path="/OnchangTask" element={<OnchangTask/>}></Route>
      </Routes>
      {/* <ContentComponentt/> */}



      {/* <FooterComponent></FooterComponent> */}
    </>
  )
}

export default App
