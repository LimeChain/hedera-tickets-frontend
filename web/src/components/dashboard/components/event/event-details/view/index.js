import React from 'react';

import SignupIMG from './../../../../../../img/signup.jpg';

export const EventDetailsView = function (context) {
    return (
        <div className="event-details-container">
            <div className="event-details-card">
                <div className="event-details-card-inner" onClick={context.showTradeComponent}>
                    <div className="event-details-card-cover event-details-card-front"><img src={SignupIMG} /></div>
                    <div className="event-details-card-back">
                        <div className="event-details-back-title">Buy / Resell</div>
                    </div>
                </div>

                <h5 className="event-details-text" >
                    <p>Tomorrowland cannot take place in 2020 due to the worldwide coronavirus outbreak and the governmental order that has been issued in that regard.</p>
                    <p>The 16th edition of Tomorrowland will take place in the summer of 2021 and the dates will be July 16–18 and July 23–25.</p>
                    <p>As a general guideline, we can already say that all tickets purchased for Tomorrowland 2020 will be transferred to Tomorrowland 2021.</p>
                </h5>
            </div>
        </div >
    );
}