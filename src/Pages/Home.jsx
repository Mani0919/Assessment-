import React from "react";
import { PiHandWaving } from "react-icons/pi";
import CApp from "../Component/Crypto";
import PopulationGraph from "../Component/Population";


function Home()
{
    return(
        <div id="home" >
            <div className="B1 row">
                <div style={{color:"#fff"}} className="B2 col-md">
                    <h3 style={{marginLeft:"0px"}}><span style={{color:"#fff"}}>Hello,</span><span style={{color:"#f5f242"}}> Brooklyn Simmons</span>&nbsp;<PiHandWaving style={{color:"yellow"}}/></h3>
                    <h4>Welcome to <span style={{color:"green"}}>Spot trading</span></h4>
                </div>
                         
            </div>
            <div className="row">
            <h3  className=' text-success col-md'>Population Data by Nation</h3>
            </div>
            <div >
              <PopulationGraph/>
            </div>
            <div style={{marginTop:"10px"}}>
                <CApp/>
            </div>
        </div>
    )
}
export default Home;