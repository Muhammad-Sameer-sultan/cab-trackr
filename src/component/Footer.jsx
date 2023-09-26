import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`

a{
    font-size: 2rem;
    /* color: white; */
}
h6 {
    
    font-size: 2.5rem ;;
    color: ${({theme})=>theme.colors.primaryYellow};
    
}
span{
    font-size: 1.7rem;
}
p{
    color: white;
}
`;

const Footer = () => {
  return (
    <FooterStyle>
      <footer className="text-center text-lg-start bg-dark text-muted mt-3">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block text-light" >
            <span >Get connected with us on social networks:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div>
            <a href="" className="me-4 text-light ">
              <i className="text-light fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-light">
              <i className="text-light fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-light">
              <i className="text-light fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-light">
              <i className="text-light fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-light">
              <i className="text-light fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-light">
              <i className="text-light fab fa-github"></i>
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className=" fas fa-gem me-3"></i>Cab Trackr
                </h6>
                <p className="text-light">
                Cab Trackr is the most cost-effective cab dispatch system on the market, with all the tools you need for your taxi, limo or private hire company to thrive.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Company</h6>
                <p>
                  <a href="#!" className="text-light">
                  About us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-light">
                  Features
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-light">
                  Careers
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-light">
                  Pricing
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
                <p>
                  <a href="#!" className="text-light">
                  Support
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-light">
                  Testimonials
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-light">
                  Booking
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-light">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="text-light fas fa-home me-3"></i> Karachi, Pakistan
                </p>
                <p>
                  <i className="text-light fas fa-envelope me-3"></i>
                  info@cabrackr.com
                </p>
                <p>
                  <i className="text-light fas fa-phone me-3"></i> + 92 3351332645
                </p>
               
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center text-light fs-3 p-4 "
          style={{ backgroundColor: " rgba(255, 255, 255, 0.05)" }}
        >
          © 2021 Copyright:  
          <a className="text-light fw-bold ms-4" href="#">
             Cab Trackr
          </a>
        </div>
      </footer>
    </FooterStyle>
  );
};

export default Footer;
