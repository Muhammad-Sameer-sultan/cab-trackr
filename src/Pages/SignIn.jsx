import React from "react";
// import '../../src/'

// sign up data fetch
// let signup_email = document.querySelector('#signup-email');
// let signup_user = document.querySelector('#signup-user');
// let dob = document.querySelector('#dob');
// let inlineRadio1 = document.querySelector('#inlineRadio1');
// let inlineRadio2 = document.querySelector('#inlineRadio2');
// let signup_password = document.querySelector('#signup-password');
// let signup_confirm_password = document.querySelector('#signup-confirm-password');
// let signup_btn = document.querySelector('#signup-btn');
// let signin_btn = document.querySelector('#signin-btn');
// let signup_link = document.querySelector('#signup_link');
// let signin_link = document.querySelector('#signin_link');
// let form_box = document.querySelector('.form-box');
// let title_box = document.querySelector('.title-box');


// signup_btn.addEventListener('click', function (e) {
//     console.log(signup_password)
//     let gender;
//     inlineRadio1.checked ? gender = "Male" : gender = "Female";
//     let new_user = {
//         user_email: signup_email.value,
//         user_name: signup_user.value,
//         user_dob: dob.value,
//         user_gender: gender,
//         user_passwod: signup_password.value,
//         user_confirm_password: signup_confirm_password.value

//     }

//     let user_storage = localStorage.getItem('user_storages');
//     let user_list;
//     if (user_storage === null) {
//         user_list = [];
//     }
//     else {
//         user_list = JSON.parse(user_storage);
//     }

//     let password_check = signup_password.value !== signup_confirm_password.value ? true : false;
//     let email_check= user_list.some(user=>
//         {
//             return user.user_email===new_user.user_email;   
//         })
    
//     if (email_check) {

//         show('Error', 'This Email is already exist');
//     }
//     else if (password_check) {
//         show('Error', 'incorrect password');
//     }

//     else {
//         user_list.push(new_user);
//         user_storage= JSON.stringify(user_list);
//         localStorage.setItem('user_storages',user_storage);
//         show('Success','your Account is created Suceess');
//         document.querySelector('.alert').classList.replace('alert-danger','alert-success');

//         setTimeout(function () {
//             window.location.href = "sign_in page.html";
            
//         }, 1000)
        
//     }


// })


// function show(type, message) {
//     let divmessage = document.getElementById('message');
//     // console.log(divmessage);
//     let html = [
//         `<div class="alert alert-danger alert-${type} alert-dismissible p-2" role="alert">`,
//         `   <div>${message}</div>`,
//         '   <button type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>',
//         '</div>'
//     ].join('');
//     divmessage.innerHTML = html;

//     setTimeout(function () {
//         divmessage.innerHTML = "";
//     }, 1000)
// }
// //sign up link

// let inner= document.querySelectorAll('.inner');

// signup_link.addEventListener('click',function(e){
//         // signin_title.classList.toggle('d-block');
//         // signup_title.classList.toggle('d-none');
//         title_box.classList.toggle('order-1');
//         title_box.classList.replace('rounded-start-5','rounded-end-5')
//         form_box.classList.replace('rounded-end-5','rounded-start-5')



//         inner.forEach(function(element) {
//             element.classList.toggle('d-none');
//             // element.classList.toggle('d-none');
//         })

        
        
// });

// signin_link.addEventListener('click',function(e){
//     // signin_title.classList.toggle('d-block');
//     // signup_title.classList.toggle('d-none');
//     title_box.classList.toggle('order-1');
//     title_box.classList.replace('rounded-end-5','rounded-start-5')
//     form_box.classList.replace('rounded-start-5','rounded-end-5')



//     inner.forEach(function(element) {
//         element.classList.toggle('d-none');
//         // element.classList.toggle('d-none');
//     })

    
    
// });

// // SIGN IN BUTTON CLICK

//      signin_btn.addEventListener('click',function(e){
//         e.preventDefault();

//         let signin_email=document.querySelector('#signin-email');
//         let signin_password=document.querySelector('#signin-password');
//         let user_icon_name=document.querySelector('#user-icon-name');

        

//         let user_storage = localStorage.getItem('user_storages'); 
//         // console.log(user_storage);
//         let crediential_check;
//         let login_user;
//         if(user_storage !== null){

//             let user_list = JSON.parse(user_storage);
            
//              crediential_check= user_list.find(userfind=>
//                 {
//                     login_user=userfind;
//                     return userfind.user_email===signin_email.value && userfind.user_passwod===signin_password.value;   
//                 })
//             }
//             else{
//                 crediential_check===false;
//             }
            
//             if(crediential_check){
// // console.log(login_user);
//                 localStorage.setItem('login_storage',JSON.stringify(login_user));
//                 window.location.href='../index.html';
//                 // user_icon_name.innerHTML=login_user.user_name;

                
//             }
//             else{
//                 show('Invalid', 'Email and password are not correct')
//             }

//      })

const SignIn = () => {
  return (
    <profileStyle>
      <div class="main ">
        {/* Button trigger modal */}
        {/* <button type="button" class="btn btn-primary" >
    Launch demo modal
  </button> */}

        <div class="row  main-box mt-5">
          <div class="col-md-6 title-box rounded-start-5 ">
            <div class="inner d-block" id="signin-title">
              {/* sign in title  div start */}
              <h2>Rental Car</h2>
              <h4>Plain your TOur and Trip with Us</h4>
              <p>
                In the Partner Community, you can easily connect online with
                fellow Tour and Trip partners for tips and advice. Ready to
                discover the Partner Community? Start by browsing through the
                hashtags or reading through the Community Guidelines.{" "}
              </p>
            </div>

            <div class="inner d-none" id="signup-title">
              {/* sign up title  div start */}
              <h2>Sign Up Now</h2>
              <h4>Specail Discount for our New Customers</h4>
              <p>
                “Welcome to Pakistan Travel Guide, where we specialize in
                creating unforgettable travel experiences for our clients. With
                years of experience in the travel industry, our team of experts
                are dedicated to planning and executing personalized trips that
                exceed expectations
              </p>
              <img src="../images/signin.jfif" class="img-fluid" alt="" />
            </div>
            {/* sign up title div end */}
          </div>
          <div class="col-md-6 form-box rounded-end-5 ">
            <div id="message"></div>
            <div class="inner d-block" id="signin-box">
              {/* sign in form start */}
              <h2>Sign In</h2>
              <form>
                <div class="mb-3">
                  <label for="signin-email" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="signin-email"
                    placeholder="Enter your Email"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="signin-password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    id="signin-password"
                    placeholder="Enter your Password"
                    required
                  />
                  <small>
                    <a class="forget" href="">
                      Forget Password
                    </a>
                  </small>
                </div>
                <button type="submit" class="btn btn-success" id="signin-btn">
                  Sign In
                </button>
              </form>
              <p class="signup_click my-4 ">
                If you don't have an account? please registered your self by
                <span id="signup_link">Sign Up</span>
              </p>
              {/* /sign in form end */}
            </div>

            {/* alert Start */}

            {/* alert end */}
            <div class="inner d-none" id="signup-box">
              {/* sign up form start */}
              <h2 class="fs-1">Sign Up</h2>
              <form>
                <div class="mb-2">
                  <label for="signin-email" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="signup-email"
                    placeholder="Enter your Email"
                  />
                </div>
                <div class="mb-2">
                  <label for="user-name" class="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="signup-user"
                    placeholder="Enter your User Name"
                  />
                </div>
                <div class="mb-2">
                  <label for="dob" class="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    class="form-control form-control-sm"
                    id="dob"
                    placeholder="Enter your Email"
                  />
                </div>
                <label for="" class=" form-check-inline">
                  Gender
                </label>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="Male"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Male
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="Female"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Female
                  </label>
                </div>

                <div class="mb-2">
                  <label for="signup-password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    id="signup-password"
                    placeholder="Enter your Password"
                  />
                </div>
                <div class="mb-2">
                  <label for="signup-confirm-password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    id="signup-confirm-password"
                    placeholder="confirm your Password"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-success my-3"
                  id="signup-btn"
                >
                  Sign Up
                </button>
              </form>
              <p class="signup_click my-4 fs-5">
                I have already an Account !<span id="signin_link">Sign In</span>
              </p>
              {/* /sign up form end */}
            </div>
          </div>
        </div>
      </div>
    </profileStyle>
  );
};

export default SignIn;
