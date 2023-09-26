import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import styled from "styled-components";
import { MdOutlineElectricBolt } from "react-icons/md";

const Figure = styled.div`
h2{
    background-color: ${({theme})=>theme.colors.primaryYellow};
    text-transform: capitalize;
    
}
.rating{
    background-color: ${({theme})=>theme.colors.primaryYellow};

}
.figuresCard{
  
    padding: 1rem ;
    text-align: center;

    
}
.figuresCard .icon{
    font-size:10rem;
    margin-bottom:1rem;
    background-color : ${({theme})=> theme.colors.primaryYellow};
    padding: 1rem;
    border-radius: 50%;
}

`;

const Figures = () => {
  return (
    <Figure>
      <div className="figures my-3">
        <h2 className="container-fluid text-center p-4 mb-5">
          Global mobility system driving communities forward
        </h2>
        <div className="  d-flex justify-content-center align-items-center gap-5 ">
          
            <div className="figuresCard ">
              <BsFillBuildingsFill className="icon" />
              <h3>250+</h3>
              <h5>Cities covered</h5>
              <p>Across India, Australia, New Zealand and the UK</p>
            </div>
            <div className="figuresCard ">
              <GrAnalytics className="icon" />
              <h3>55 Cr+

</h3>
              <h5>Yearly rides</h5>
              <p>Booked by our customers every year</p>
            </div>

            <div className="figuresCard ">
              <MdOutlineElectricBolt className="icon" />
              <h3>12 Cr+</h3>
              <h5>Kilometers on S1</h5>
              <p>Distance covered on Ola S1 scooters within a year of launch</p>
            </div>

         
     
        </div>
      </div>
      <div className="rating d-flex justify-content-evenly align-items-center text-center p-3">
        <div>
            <img src="https://www.taxicaller.com/images/icon-passenger-ratings.png" alt="" />
            <p>Driver <strong>rating</strong></p>

        </div>
        <div>
            <img src="https://www.taxicaller.com/images/icon-passenger-textnotifications.png" alt="" />
            <p>Text  <strong>Notification</strong></p>

        </div>
        <div>
            <img src="https://www.taxicaller.com/images/icon-passenger-history.png" alt="" />
            <p>Trip & <strong>Receipt history</strong></p>

        </div>
      </div>
    </Figure>
  );
};

export default Figures;
