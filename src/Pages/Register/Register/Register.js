import React from 'react';

const Register = () => {
    return (
        <div>
               <div>
            <div class="login-box">
        <h2>Register</h2>
        <form>
          <div class="user-box">
            <input type="text" name="name" required=""/>
                
            <label>Name</label>
          </div>
          <div class="user-box">
            <input type="email" name="email" required=""/>
            <label>Email</label>
          </div>
          <div class="user-box">
            <input type="password" name="password" required=""/>
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
        </div>
        </div>
    );
};

export default Register;