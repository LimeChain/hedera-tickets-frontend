import React from 'react';

import SignupIMG from './../../../../../../img/signup.jpg';
import SigninIMG from './../../../../../../img/signin.jpg';

export const AllEventsView = function (context) {
    return (
        <div className="events-container">
            <div className="event-card" onClick={context.register}>
                <div className="event-card-cover" style={{ backgroundImage: `url(${SignupIMG})` }}>
                    <h5 className="card-text" >Sign up</h5>
                </div>
            </div>
            <div className="event-card" onClick={context.login}>
                <div className="event-card-cover" style={{ backgroundImage: `url(${SigninIMG})` }}>
                    <h5 className="card-text">Sign in</h5>
                </div>
            </div>
        </div>
    );
}
