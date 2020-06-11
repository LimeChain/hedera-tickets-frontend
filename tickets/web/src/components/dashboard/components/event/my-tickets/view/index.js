import React from 'react';

import SignupIMG from './../../../../../../img/signup.jpg';

export const MyTicketsView = function (context) {
    const tickets = [];
    if (context.tickets) {
        for (let i = 0; i < context.tickets; i++) {
            for (let j = 0; j < context.tickets[i].length; j++) {

                tickets.push(
                    <div key={i + j} className="tickets-card flip-card-inner" onClick={() => { context.refund(i, j) }}>
                        <div className="tickets-card-cover flip-card-front" style={{ backgroundImage: `url(${SignupIMG})` }}>
                            <h5 className="tickets-text" >{context.tickets[i][j]}</h5>
                        </div>
                        <div className="flip-card-back">
                            <div className="back-title" >Refund</div>
                        </div>
                    </div>
                );
            }
        }
    }

    return (
        <div className="tickets-container flip-card">
            {tickets}
        </div>
    );
}
