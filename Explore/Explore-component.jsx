import React from "react";
import { ExploreStyle } from "./Explore-style";
const ExploreComponent=()=>{
    return(
        <ExploreStyle>
        <div>
            <div className="explore">
            <div className="above">
                <h1>Explore Our Categories</h1>
            <p>Start building the home you’ve always imagined</p>
            </div>

            <div className="below">
                <div className="box">
                <div className="img1"><img src="/explore1.jpg" alt="img1" /></div>
                <div className="des"><p>Dining Sets</p> <div className="circle"><h1>→</h1></div></div></div>

                <div className="box">
                <div className="img1"><img src="/explore2.jpg" alt="img2" /></div>
                <div className="des"><p>Dining Sets</p> <div className="circle"><h1>→</h1></div></div></div>

                <div className="box">
                <div className="img1"><img src="/explore3.jpg" alt="img3" /></div>
                <div className="des"><p>Dining Sets</p> <div className="circle"><h1>→</h1></div></div></div>


            </div>
            </div>
        </div>
        </ExploreStyle>
    );
} ;
export default ExploreComponent;