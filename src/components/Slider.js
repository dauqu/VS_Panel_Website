 import React from 'react'
 import Carousel from 'react-elastic-carousel';
 import nf from "../assets/images/nf.png"
 import sl from "../assets/images/sl.png"
 import gii from "../assets/images/gii.png"
 import ar from "../assets/images/ar.png"
 import en from "../assets/images/en.png"
 function Slider() {
   return (
     <div>
       <Carousel   itemsToShow={3}   showArrows={true}      className="p-4">
          <div>
            <img src={nf} alt="nf" />
          </div>
          <div>
            <img src={ar} alt="nf" />
          </div>
          <div>
            <img src={sl} alt="nf" />
          </div>
       
          <div>
            <img src={gii} alt="nf" />
          </div>
          
          <div>
            <img src={en} alt="nf" />
          </div>
          <div>
            <img src={ar} alt="nf" />
          </div>
          <div>
            <img src={nf} alt="nf" />
          </div>
          <div>
            <img src={gii} alt="nf" />
          </div>
          <div>
            <img src={ar} alt="nf" />
          </div>
          <div>
            <img src={en} alt="nf" />
          </div>
           
      </Carousel>
     </div>
   )
 }
 
 export default Slider