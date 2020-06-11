import React from 'react';

import SignupIMG from './../../../../../../img/signup.jpg';

export const MyEventsView = function (context) {
    return (
        <div className="events-container">
            <div className="event-card" onClick={context.register}>
                <div className="event-card-cover" style={{ backgroundImage: `url(${SignupIMG})` }}>
                    <h5 className="card-text" >Sign up</h5>
                </div>
            </div>
        </div>
    );
}
