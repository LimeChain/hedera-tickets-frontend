import React from 'react';
import { Chart } from 'react-charts';

import SignupIMG from './../../../../../../img/signup.jpg';

export const EventDetailsView = function (context) {
    return (
        <div className="event-details-container">
            <div className="event-details-card">
                <button className="event-buy" >Buy</button>

                <div className="event-details-card-cover"><img src={SignupIMG} /></div>

                <h5 className="event-details-text" >
                    <p>Tomorrowland cannot take place in 2020 due to the worldwide coronavirus outbreak and the governmental order that has been issued in that regard.</p>
                    <p>The 16th edition of Tomorrowland will take place in the summer of 2021 and the dates will be July 16–18 and July 23–25.</p>
                    <p>As a general guideline, we can already say that all tickets purchased for Tomorrowland 2020 will be transferred to Tomorrowland 2021.</p>
                </h5>
                <div className="chart" onLoadStart={context.loadChart}>
                    {/* <Chart data={context.data} axes={context.axes} /> */}
                </div>
            </div>
        </div >
    );
}