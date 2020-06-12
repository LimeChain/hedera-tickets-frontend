import React from 'react';

export const UserDetailsView = function (context) {
    return (
        <div className="user-details-body">
            <div className="user-details-container">
                <img className="round img" src="https://www.pngfind.com/pngs/m/110-1102775_download-empty-profile-hd-png-download.png" alt="user" />
                <h3 className="user-details-name">{`${context.userData.firstName} ${context.userData.lastName}`}</h3>
                <h6 className="user-details-balance">Balance: {context.state.balance}</h6>
                <div className="buttons">
                    <button className="primary" onClick={context.withdraw}>
                        Withdraw
		                </button>
                </div>
            </div>
        </div>
    );
}
