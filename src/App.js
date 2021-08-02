import React from "react"
import {Route,Switch} from "react-router-dom"
 import '../src/cssfile/app.css'

import './components/Navbar'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Contactus from './components/Contactus'
import Onlinefiling from './components/Onlinefiling'
import Departments from './components/Department'
import Footer from './components/Footer'

   const Routing = () =>{
   return(
   <Switch>
   <Route exact path="/Home">
     <Home/>
   </Route>
 
   <Route path="/Login">
    <Login/> 
   </Route>
 
   <Route path ="/Register">
     <Register/>
   </Route>
 
   <Route path="/Contactus">
   <Contactus/>
    </Route>

    <Route path="/Onlinefiling">
   <Onlinefiling/>
    </Route>

 
   </Switch>
  
   )
   }

const App = () => {
  return (
    <>
    <div className="mntan">
<Navbar/>
<Routing/>
<Footer />
</div>
    </>
  )
}
export default App;
