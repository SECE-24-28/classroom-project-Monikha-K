import React from "react";
import { CloneItemStyle } from "./cloneitem-style";
export default function CloneItem() {
    return (
        <CloneItemStyle>
            <div className="h">
            <h1 className="title">Impact at a <span className="highlight">Glance</span></h1>
         <div className="Glance">
            <div className="Glance1">
                <div className="Glance1-1">
                    <div className='content'>
                    <p>Colleges</p>
                    <h5>100+</h5>
                   </div>
                   <div className='image'>
                    <img src="https://aptitudeguruhem.com/static/media/school.534dd7db3daaf4c66eff.png" alt="College" width="90" />
                    </div>
                </div>
                
                <div className="Glance1-2">
                    <div className='content'>
                    <p>Students</p>
                    <h5>100000+</h5>
                    </div>
                    <div className='image'>
                    <img src="https://aptitudeguruhem.com/static/media/bag.52185bac9246c85ed48f.png" alt="Students" width="90" />
                    </div>
                </div>
                
            </div>

            <div className="Glance2">
                <div className="Glance2-1">
                    <div className='content'>
                    <p>Study materials</p>
                    <h5>1000+</h5>
                    </div>
                    <div className='image'>
                    <img src="	https://aptitudeguruhem.com/static/media/books.d290f0589bd8ed867b77.png" alt="materials" width="90" />
                    </div>
                </div>
                 
                <div className="Glance2-2">
                    <div className='content'>
                    <p>Professional Trainers</p>
                    <h5>150</h5>
                    </div>
                    <div className='image'>
                    <img src="https://aptitudeguruhem.com/static/media/people.0b6f76ebbf0b209884e7.png" alt="trainers" width="90" />
                    </div>
                </div>
                 
            </div>
         </div>
         </div>
        </CloneItemStyle>
    )
}