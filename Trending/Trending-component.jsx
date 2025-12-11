import React from "react";
import { TrendingStyle } from "./Trending-style";
const TrendingComponent=()=>{
    return(
        <TrendingStyle>
        <div className="trending">
            <div className="above">
            <h1>Trending Products</h1>
            <p>Tried, trusted, and loved</p>
            </div>

            <div className="container">
                <div className="box">
                    <div><img src="/trending1.jpg" alt="" /></div>
                    <div className="below1">
                        <h1>Oxford Leatherette Sofa</h1>
                        <p>Minimalist Scandinavian frame paired with breathable..</p>
                    </div>
                    <div className="below2">
                        <h1>₹18,999</h1>
                        <p className="p1">₹25,000</p>
                        <div className="smallbox">
                            <h5><i class="fa-solid fa-tag"></i></h5>
                            <p>20% off</p>
                        </div>
                    </div>
                  
                    <button>Shop Now</button>
                    
                </div>


                <div className="box">
                    <div><img src="/trending2.png" alt="" /></div>
                    <div className="below1">
                        <h1>Oxford Leatherette Sofa</h1>
                        <p>Minimalist Scandinavian frame paired with breathable..</p>
                    </div>
                    <div className="below2">
                        <h1>₹18,999</h1>
                        <p className="p1">₹25,000</p>
                        <div className="smallbox">
                            <h5><i class="fa-solid fa-tag"></i></h5>
                            <p>20% off</p>
                        </div>
                    </div>
                    <button>Shop Now</button>

                </div>


            </div>
        </div>
        </TrendingStyle>
    );
};
export default TrendingComponent;