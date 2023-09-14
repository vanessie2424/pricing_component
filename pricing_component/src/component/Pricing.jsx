import React from "react"


function Pricing(props){
    return(
        <div className="pricing_card">
        <header>
          <p className="card_title"> {props.title}</p>
          <h1 className="card_price">${props.price}</h1>

        </header>
        <div className="card_feature">
          <div className="line"></div>
          <div className="card_storage">{props.storage}</div>
          <div className="line"></div>
          <div className="card_users">{props.users} users Allowed </div>
          <div className="line"></div>
          <div className="card_sendup">send up to {props.sendup} GB </div>
          <div className="line"></div>
        </div>
          
        <button className="card_btn">LEARN MORE</button>
            
            

        </div>
        
    )

}
export default Pricing