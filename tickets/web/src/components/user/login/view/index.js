import React from 'react';

export const LoginView = function (context) {
    return (
        < div >
            <div className="row">
                <div className="col">
                    <form className="form-inline justify-content-center">
                        <div className="form-group mx-sm-3 mb-2">
                            <input type="text" className="form-control" onChange={context.onFirstName} placeholder="First Name" />
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <input type="text" className="form-control" onChange={context.onLastName} placeholder="Last Name" />
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <input type="text" className="form-control" onChange={context.onPassword} placeholder="Password" />
                        </div>

                        <button type="button" className="btn btn-success mb-2" onClick={context.process}>Sign in</button>
                    </form>
                    <div className="message-box">
                        <div className={context.state.message.class} role="alert">{context.state.message.text}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
