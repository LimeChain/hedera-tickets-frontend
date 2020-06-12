import React from 'react';

import SignupIMG from './../../../../../../img/signup.jpg';

export const MyTicketsView = function (context) {
    const tickets = [];
    if (context.state.tickets) {
        for (let i = 0; i < context.state.tickets.length; i++) {
            for (let j = 0; j < context.state.tickets[i].length; j++) {
                if (context.state.tickets[i][j] > 0) {
                    tickets.push(
                        <div key={context.state.tickets[i][j]} className="tickets-container flip-card">
                            <div className="tickets-card flip-card-inner" onClick={() => { context.refund(i, j) }}>
                                <div className="tickets-card-cover flip-card-front" style={{ backgroundImage: `url(${SignupIMG})` }}>
                                    <h5 className="tickets-text" >{context.state.tickets[i][j]}</h5>
                                </div>
                                <div className="flip-card-back">
                                    <div className="back-title" >Refund</div>
                                </div>
                            </div>
                        </div>
                    );
                }
            }
        }
    }

    return (
        <div className="tickets-container">
            {tickets}
        </div>
    );
}
