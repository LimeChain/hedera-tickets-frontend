import React from 'react';

import SignupIMG from './../../../img/signup.jpg';
import SigninIMG from './../../../img/signin.jpg';

export const HomePageView = function () {
    return (
        <div>
            <h1 className="title">EventCo platform</h1>
            <div className="container">
                <div className="card" onClick={this.register}>
                    <div className="card__cover" style={{ backgroundImage: `url(${SignupIMG})` }}>
                        <h5 className="card-title">Sign up</h5>
                    </div>
                </div>
                <div className="card" onClick={this.login}>
                    <div className="card__cover" style={{ backgroundImage: `url(${SigninIMG})` }}>
                        <h5 className="card-title">Sign in</h5>
                    </div>
                </div>
            </div >
        </div>
    );
}
