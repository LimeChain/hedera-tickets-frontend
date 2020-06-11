import React from 'react';

export const UserDetailsView = function (context) {
    return (
        <div className="user-details-body">
            <div className="user-details-container">
                <img className="round img" src="https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/65889935_1597104787087534_6423588319514329088_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=pbOw43GO_YQAX9in_TU&_nc_ht=scontent.fsof3-1.fna&oh=e07b7418eec714d6af1bd6d47c7699f9&oe=5F07CAE8" alt="user" />
                <h3 className="user-details-name">Lyubomir Kiprov</h3>
                <h6 className="user-details-balance">Balance: {context.balance}</h6>
                <div className="buttons">
                    <button className="primary" onClick={context.withdraw}>
                        Withdraw
		                </button>
                </div>
            </div>
        </div>
    );
}
