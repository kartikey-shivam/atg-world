import React from "react";
import img from "./assets/img.png";
import fb from "./assets/logo/fb.svg";
import google from "./assets/logo/google.png";

export default function Signup() {
  return (
    <div className="sign">
      <div className="sign-con">
        <div className="sign-text">
          <p>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>
        <div className="sign_box">
          <div className="sign_box-left">
            <h3 className="heading-tertiary">Create Account</h3>
            <div className="name-input">
              <input type="text" placeholder="First Name" className="input-1" />
              <input type="text" placeholder="Last Name" className="input-1" />
            </div>
            <input type="email" placeholder="Email" className="input-2" />
            <input type="password" placeholder="Password" className="input-2" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input-2"
            />
            <button type="" className="btn-signup">
              Create Account
            </button>
            <button className="btn-other">
              <img src={fb} />
              <p className="btn-text">Sign up with facebook</p>
            </button>
            <button className="btn-other">
              <img src={google} />
              <p className="btn-text">Sign up with google</p>
            </button>
          </div>
          <div className="sign_box-right">
            <div className="right-text-1">
              <p>
                Already have an account?{" "}
                <span className="right-text-1_span">Sign In</span>
              </p>
            </div>
            <div className="img-box">
              <img src={img} className="img" />
            </div>
            <div className="right-text-2">
              <p>
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
