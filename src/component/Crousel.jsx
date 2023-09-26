import React from "react";

import slider2 from "../assets/slider2.jpg";

import styled from "styled-components";

const CrouselStyle = styled.div`
  background: black;
  .slider-overlay {
    position: absolute;
    z-index: 1;
    top: 10%;
    left: 9%;
    width: 32%;
    line-height: 2;
    color: white;
    background: rgba(0, 0, 0, 0.7);
    padding: 1rem;
    font-size: 2rem;
    h2 {
      font-size: 3.2rem;
    }
  }
  .carousel .book-ride {
    background: ${({ theme }) => theme.colors.primaryYellow};
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 1rem;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    
    box-shadow: 0 0 0.5rem white;
  }
  .carousel .book-ride:hover {
    background: ${({ theme }) => theme.colors.black};
    color : ${({ theme }) => theme.colors.primaryYellow};
    border: 1px solid ${({ theme }) => theme.colors.primaryYellow};
    border-radius: 1rem;
  }
  .carousel-item img {
    height: 580px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.5)
    );
  }

  .carousel-indicators button {
    border-radius: 100%;
    width: 2rem;
    background: ${({ theme }) => theme.colors.black};
    box-shadow: 0 0 1rem white;
  }
  
`;


const Crousel = () => {
  return (
    <CrouselStyle>
      {/* Crousel start */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide position-relative"
      >
        <div className="slider-overlay p-4">
          <h2>
            Best prices for rides in All over Pakistan. Packed in one place.
          </h2>
          <p className="my-4">
            Best Online Taxi Service In Pakistan. Travel with confidence when
            you choose cab. Trusted brand for Airport cab needs and airport
            transfers all over the pakistan.
          </p>
          <button className="book-ride">Book your Ride</button>
        </div>
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
            <img
              src="https://www.mindinventory.com/blog/wp-content/uploads/2022/10/taxi-booking-app.jpg"
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.ezidrive.in/blog/wp-content/uploads/2019/06/blog-1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Crousel end */}
    </CrouselStyle>
  );
};

export default Crousel;
