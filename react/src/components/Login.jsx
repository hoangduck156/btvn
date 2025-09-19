import React from 'react'

export default function Login() {
    return (
        <>
            <div className="container">
                <div className="left">
                    <div className="box">
                        <div className="logo">
                            <div className="logo-icon">✦</div>
                            <h1>Gradiator</h1>
                        </div>
                        <h3>Welcome Back Creative!</h3>
                        <h5>We Are Happy To See You Again</h5>

                        <div className="tab">
                            <button className="btl active">Sign in</button>
                            <button className="btr">Sign up</button>
                        </div>

                        <div className="enter">
                            <input type="email" placeholder="Enter your email" />
                            <input type="password" placeholder="Enter your password" />
                        </div>

                        <div className="option">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#">Forgot Password?</a>
                        </div>

                        <button className="login">Login</button>
                        <div className="or">OR</div>
                        <button className="social-btn apple">Log in with Apple</button>
                        <button className="social-btn google">Log in with Google</button>
                    </div>
                </div>

                <div className="right"></div>
            </div>
        </>
    );
}



