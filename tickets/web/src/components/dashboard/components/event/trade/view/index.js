import React from 'react';
import { Line } from 'react-chartjs-2';

import SignupIMG from './../../../../../../img/signup.jpg';

export const TradeView = function (context) {
    return (
        <div className="trade-body">
            <div className="groups-container">
                <div className="groups-card" onClick={() => { context.loadChart(0) }}>
                    <div className="groups-card-cover" style={{ backgroundImage: `url(${SignupIMG})` }}>
                        <h5 className="groups-text">1</h5>
                    </div>
                </div>
                <div className="groups-card" onClick={() => { context.loadChart(1) }}>
                    <div className="groups-card-cover" style={{ backgroundImage: `url(${SignupIMG})` }}>
                        <h5 className="groups-text">2</h5>
                    </div>
                </div>
                <div className="groups-card" onClick={() => { context.loadChart(2) }}>
                    <div className="groups-card-cover" style={{ backgroundImage: `url(${SignupIMG})` }}>
                        <h5 className="groups-text">3</h5>
                    </div>
                </div>
            </div >
            <div className="chart">
                <Line data={context.state.data} width={100} height={30} />
            </div>
            <div className="price-text">Price: {context.state.currentPrice}$</div>
            <div className="button-group">
                <button type="button" className="buy-submit" onClick={context.buy}>Buy</button>
                <button type="button" className="buy-submit" onClick={context.resell}>Resell</button>
            </div>
        </div>
    );
}