import React from 'react'
import styled from 'styled-components';

const SigninStyle = styled.div`
 #signin-title img{
    max-width: 80%;

  } 
  
  .main .main-box #signup-box {
    font-size: 0.8em;
  }
  .main .main-box #signup-box h2 {
    font-size: 2rem;
    color: var(--color-main);
    font-weight: 600;
  }
  .main .main-box .title-box {
    color: var(--color-light-black);
    background: var(--color-main);
    padding: 2rem 4rem;
    text-align: center;
  }
  .main .main-box .title-box h2, .main .main-box .title-box h4 {
    font-family: "Eczar", serif;
    font-size: 3rem;
    font-weight:700;
  }
  .main .main-box .title-box h4 {
    font-size: 2rem;
    color: var(--color-orange);
  }
  .main .main-box .title-box p {
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
  }
  .main .main-box .title-box #signin-title{
    /* background: linear-gradient(to bottom,rgba(56, 61, 147,0.5),rgba(56, 61, 147,0.5)),url(../images/signin.jfif) no-repeat center; */
  }
  .main .main-box .title-box #signp-title h2 {
    font-size: 2rem;
  }
  .main .main-box .title-box #signp-title h4 {
    font-size: 1rem;
  }
  .main .main-box .title-box #signp-title p {
    font-size: 1rem;
  }
  .main .main-box .form-box {
    background: var(--color-bg-light);  
    padding: 2rem 4rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
  }
  .main .main-box .form-box h2 {
    font-family: "Eczar", serif;
    font-size: 3rem;
    text-align: center;
    color: var(--color-main);
    font-weight: 600;
    /* background: #000; */
  }
  .main .main-box .form-box .forget {
    cursor: pointer;
    color: var(--color-orange);
    letter-spacing: 0.3rem;
    text-decoration: underline;
  }
  .main .main-box .form-box .btn {
    font-size: 1.2rem;
    color: var(--color-primary);
    background: var(--color-orange);
    border: none;
  }
  .main .main-box .form-box .signup_click span {
    color: var(--color-orange);
    font-weight: 700;
    cursor: pointer;
    text-decoration: underline;
  }
  .main .main-box .form-box #signup-btn {
    width: 100%;
    border-radius: 3rem;
    color: var(--color-primary);
    background: var(--color-orange);
    border: none;
    font-weight: 500;
  }
    .main .main-box .form-box #signup-btn:hover,#signin-btn:hover{
      background: var(--color-main);

    }
  
`;

const SignIn = () => {
  return (
<SigninStyle>
    <div className="main container">
   {/* Button trigger modal */}
 {/* <button type="button" className="btn btn-primary" >
Launch demo modal
</button>  */}


    <div className=" row  main-box bg-success ">
        <div className=" col-md-6 title-box rounded-start-5 bg-dark">
            <div className="inner d-block bg-warning" id="signin-title">
               {/* sign in title  div start */}
                <h2>Cab Trackr</h2>
                <h4>Plain your TOur and Trip with Us</h4>
                <p>In the Partner Community, you can easily connect online with fellow Tour and Trip partners for
                    tips and advice.

                    Ready to discover the Partner Community? Start by browsing through the hashtags or reading
                    through the Community Guidelines. </p>
            </div>

            <div className="inner d-none" id="signup-title">
               {/* sign up title  div start */}
                <h2>Sign Up Now</h2>
                <h4>Specail Discount for our New Customers</h4>
                <p>“Welcome to Pakistan Travel Guide, where we specialize in creating unforgettable travel experiences for our clients. With years of experience in the travel industry, our team of experts are dedicated to planning and executing personalized trips that exceed expectations</p>
                <img src="../images/signin.jfif" className="img-fluid" alt=""/>

            </div>
           {/* sign up title div end */}
        </div>
        <div className="col-md-6 form-box rounded-end-5 bg-danger">
            <div id="message"></div>
            <div className="inner d-block" id="signin-box">
               {/* sign in form start */}
                <h2>Sign In</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="signin-email" className="form-label">Email address</label>
                        <input type="email" className="form-control form-control-sm" id="signin-email" placeholder="Enter your Email"  required/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="signin-password" className="form-label">Password</label>
                        <input type="password" className="form-control form-control-sm" id="signin-password"
                            placeholder="Enter your Password" required/>
                        <small><a className="forget" href="">Forget Password</a></small>
                    </div>
                    <button type="submit" className="btn btn-success" id="signin-btn">Sign In</button>

                </form>
                <p className="signup_click my-4 ">If you don't have an account? please registered your self by
                    <span id="signup_link">Sign Up</span>
                </p>
               {/* /sign in form end */}
            </div>

           {/* alert Start */}
           
           {/* alert end */}



            <div className="inner d-none" id="signup-box">

               {/* sign up form start */}
                <h2 className="fs-1">Sign Up</h2>
                <form>
                    <div className="mb-2">
                        <label htmlFor="signin-email" className="form-label">Email address</label>
                        <input type="email" className="form-control form-control-sm" id="signup-email" placeholder="Enter your Email" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="user-name" className="form-label">User Name</label>
                        <input type="text" className="form-control form-control-sm" id="signup-user" placeholder="Enter your User Name" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input type="date" className="form-control form-control-sm" id="dob" placeholder="Enter your Email" />
                    </div>
                    <label htmlFor="" className=" form-check-inline">Gender</label>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" />
                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" />
                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                  </div>


                    <div className="mb-2">
                        <label htmlFor="signup-password" className="form-label">Password</label>
                        <input type="password" className="form-control form-control-sm" id="signup-password"
                            placeholder="Enter your Password"/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="signup-confirm-password" className="form-label">Password</label>
                        <input type="password" className="form-control form-control-sm" id="signup-confirm-password"
                            placeholder="confirm your Password"/>
                    </div>
                    <button type="submit" className="btn btn-success my-3" id="signup-btn" >Sign Up</button>

                </form>
                <p className="signup_click my-4 fs-5">I have already an Account !
                    
                <span id="signin_link">Sign In</span>
                </p>
               {/* /sign up form end */}
            </div>


        </div>
    </div>
</div>
</SigninStyle>
  )
}

export default SignIn