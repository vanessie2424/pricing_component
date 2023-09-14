import './App.css'
import Pricing from "./component/Pricing"
import React, {useState} from "react"
import "./style/PricingCard.css"

function App() {
  const [monthly, setMonthly] = useState(true)

  return (
    <div className='pricing_container'>
    <div className="pricing_title">
       <h1>Our Pricing</h1> 
       <label className='toggle' htmlFor="myToggle" >
         <input className='toggle__input' type="checkbox" id="myToggle" onChange={()=>{
        setMonthly((prev) => !prev)
       }} />
         <div className="toggle__fill"></div>
       </label>
    </div>

    <div className="pricing_Card">

      <Pricing title = "Basic" price = {monthly ? "19.99" : "199.99"} storage = " 500 GB storage " users = "2" sendup = "3"/>
      <Pricing title = "Professional" price = {monthly ? "24.99" : "249.99"} storage = "1 TB storage " users = "5" sendup = "10"/>
      <Pricing title = "Master" price = {monthly ? "39.99" : "399.99"} storage = "2 TB storage" users = "10" sendup = "20" />
    </div>


  
   
    </div>

  )
}

export default App
