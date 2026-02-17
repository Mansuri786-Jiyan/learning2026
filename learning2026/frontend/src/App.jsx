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
import Inputdemo1 from "./Components/input/Inputdemo1.jsx"
import InputDemo2 from "./Components/input/inputDemo2.jsx"
import InputDemo3 from "./Components/input/FeedbackForm.jsx"
import EmployeeData from "./Components/props/PropsDemo1/EmployeeData.jsx"
import Formdemo1 from "./Components/foms/Formdemo1.jsx"
import Formdemo2 from "./Components/foms/Formdemo2.jsx"
import FormDemo3 from "./Components/foms/FormDemo3.jsx"
import ApiDemo1 from "./Components/Api/ApiDemo1.jsx"
import APIDEMO2 from "./Components/Api/ApidDemo2.jsx"



function App() {


  return (  

    <>
    <Navbar></Navbar>
      <HeaderComponent></HeaderComponent>
      {/* <ContentComponentt></ContentComponentt> */}
      {/* <Map1></Map1>
      <Map2></Map2>
      <Map3></Map3>
      <Map4></Map4>
      <Map5></Map5>
      <Map6></Map6>
      <Map7></Map7>
      <Map8></Map8> */}
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
        <Route path="/formdemo1" element={<Formdemo1/>}></Route>
          <Route path="/Inputdemo1" element={<Inputdemo1/>}></Route>
          <Route path="/Inputdemo2" element={<InputDemo2/>}></Route>
          <Route path="/Inputdemo3" element={<InputDemo3/>}></Route>
          <Route path="/EmployeeData" element={<EmployeeData/>}></Route> 
          <Route path="/formdemo2" element={<Formdemo2/>}></Route> 
          <Route path="/formdemo3" element={<FormDemo3/>}></Route> 
          <Route path="/apidemo1" element={<ApiDemo1/>}></Route> 
          <Route path="/apidemo2" element={<APIDEMO2/>}></Route> 
        


      </Routes>
      {/* <ContentComponentt/> */}



      {/* <FooterComponent></FooterComponent> */}
    </>
  )
}

export default App
