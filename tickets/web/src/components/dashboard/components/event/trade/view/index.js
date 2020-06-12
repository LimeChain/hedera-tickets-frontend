import React from 'react';
import { Chart } from 'react-charts';

import SignupIMG from './../../../../../../img/signup.jpg';

export const TradeView = function (context) {
    return (
        <div className="groups-container">
            <div className="groups-card">
                <div className="groups-card-cover" style={{ backgroundImage: `url(${SignupIMG})` }}>
                    <h5 className="groups-text">1</h5>
                </div>
            </div>
            <div className="chart">
                <Chart data={context.data} axes={context.axes} />
            </div>
        </div >

    );
}