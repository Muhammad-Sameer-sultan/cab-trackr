import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import styled from "styled-components";
import { MdOutlineElectricBolt } from "react-icons/md";
import slider3 from "../../src/assets/slider3.jpg";

const Figure = styled.div`
  h2 {
    background-color: ${({ theme }) => theme.colors.primaryYellow};
    text-transform: capitalize;
  }
  .rating {
    background-color: ${({ theme }) => theme.colors.primaryYellow};
  }
  .figuresCard {
    padding: 1rem;
    text-align: center;
  }
  .figuresCard .icon {
    font-size: 10rem;
    margin-bottom: 1rem;
    background-color: ${({ theme }) => theme.colors.primaryYellow};
    padding: 1rem;
    border-radius: 50%;
  }
  .choose h2 {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryYellow};
  }
  .chooseCard {
    background: ${({ theme }) => theme.colors.primaryYellow};
    padding: 3rem;
    border-radius: 1rem;
    width: 25%;
    min-height: 300px;
    .offerIcon-container {
      display: inline-block;
      background-color: white;
      background-color: white;
      border-radius: 50%;
      border: 1px solid black;
      padding: 2rem;
    }
    .offerIcon {
      font-size: 6rem;

      /* padding: 1rem;; */
    }
  }
  .reviews {
    background: rgb(245, 245, 245);
    h5{
        margin: 10rem 0 ;
        text-align: center;
    }
    .carousel-indicators button{
        background-color: black
    }
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
            <h3>55 Cr+</h3>
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
      <div className="choose mt-5 bg-dark">
        <h2 className="px-5 py-3">So, why choose us?</h2>
        <div className="chooseCardContainer d-flex justify-content-evenly align-items-center gap-5">
          <div className="chooseCard my-5">
            <div className="offerIcon-container">
             
              <BsFillBuildingsFill className="offerIcon" />
            </div>
            <h3 className="my-3">Offer your fare</h3>
            <p> Accept offers that suit you best</p>
          </div>
          <div className="chooseCard my-5">
            <div className="offerIcon-container">
            
              <BsFillBuildingsFill className="offerIcon" />
            </div>
            <h3 className="my-3">Choose a driver</h3>
            <p> The driver’s rating, car, and reviews will help you decide</p>
          </div>
          <div className="chooseCard my-5">
            <div className="offerIcon-container">
              {" "}
              <BsFillBuildingsFill className="offerIcon" />
            </div>
            <h3 className="my-3">Save money on rides</h3>
            <p>
             
              Carpooling is even more affordable: you pay only for your seat
            </p>
          </div>
        </div>
        <h2 className="px-5 py-3">We care about safety</h2>
        <div className="chooseCardContainer container d-flex justify-content-center align-items-center gap-5 flex-wrap">
          <img className="mb-5 img-fluid" src={slider3} alt="" />
          <div className=" d-flex  gap-3 text-light flex-column">
            <div>
              <h3>Rating system</h3>
              <p>
                We ask users to share their honest feedback after every ride.
                You can choose your captains based on the previous riders’
                experience
              </p>
            </div>
            <div>
              <h3>Mandatory checks</h3>
              <p>
                All drivers must pass background check before driving with
                inDrive
              </p>
            </div>
            <div>
              <h3>Safety button</h3>
              <p>Tap it to quickly contact th police or emergency services.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rating d-flex justify-content-evenly align-items-center text-center p-3">
        <div>
          <img
            src="https://www.taxicaller.com/images/icon-passenger-ratings.png"
            alt=""
          />
          <p>
            Driver <strong>rating</strong>
          </p>
        </div>
        <div>
          <img
            src="https://www.taxicaller.com/images/icon-passenger-textnotifications.png"
            alt=""
          />
          <p>
            Text <strong>Notification</strong>
          </p>
        </div>
        <div>
          <img
            src="https://www.taxicaller.com/images/icon-passenger-history.png"
            alt=""
          />
          <p>
            Trip & <strong>Receipt history</strong>
          </p>
        </div>
      </div>

      <div className="reviews">
        <h3 className="text-center p-5">Read our Reviews</h3>
        <div id="carouselExampleIndicators" className="container carousel slide mx-5">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h5 className="d-block w-100 conatiner">
                I've been a night time cabbie since 5/5/05 ..This App is
                Awesome! :) I especially love the text message that
                automatically gets sent out to the customers cell phones ..
              </h5>
            </div>
            <div className="carousel-item">
              <h5 className="d-block w-100">
                I've been a night time cabbie since 5/5/05 ..This App is
                Awesome! :) I especially love the text message that
                automatically gets sent out to the customers cell phones ..
              </h5>
            </div>
            <div className="carousel-item">
              <h5 className="d-block w-100">
                I've been a night time cabbie since 5/5/05 ..This App is
                Awesome! :) I especially love the text message that
                automatically gets sent out to the customers cell phones ..
              </h5>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
        </div>

      </div>
    </Figure>
  );
};

export default Figures;
