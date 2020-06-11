import React from 'react';
import { Chart } from 'react-charts';

import SignupIMG from './../../../../../../img/signup.jpg';

export const EventDetailsView = function (context) {
    return (
        <div className="event-details-container">
            <div className="event-details-card">
                <button className="event-buy" >Buy</button>

                <div className="event-details-card-cover"><img src={SignupIMG} />                </div>

                <h5 className="event-details-text" >Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages has become an acc</h5>
                <div className="chart" onLoadStart={context.loadChart}>
                    {/* <Chart data={context.data} axes={context.axes} /> */}
                </div>
            </div>
        </div >
    );
}