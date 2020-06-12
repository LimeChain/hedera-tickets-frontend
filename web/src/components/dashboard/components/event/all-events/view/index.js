import React from 'react';

import SignupIMG from './../../../../../../img/signup.jpg';

export const AllEventsView = function (context) {
    return (
        <div className="events-container">
            <div className="event-card" onClick={context.viewEventDetails}>
                <div className="event-card-cover" style={{ backgroundImage: `url(${SignupIMG})` }}>
                    <h5 className="card-text" >Tomorrow Land</h5>
                </div>
            </div>
        </div>
    );
}
