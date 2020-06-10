import React from 'react';

export const HomePageView = function (context) {
    return (
        <div className="container">
            <div className="card" onClick={context.register}>
                <div className="card__cover" style={{ backgroundImage: "url(http://www.porto.pt/assets/misc/img/noticias/ANIMA%c3%87%c3%83O/2019/%23DR_Tomorrowland.jpg)" }}>
                    <h5 className="card-title">Sign up</h5>
                </div>
            </div>
            <div className="card" onClick={context.login}>
                <div className="card__cover" style={{ backgroundImage: "url(https://i.pinimg.com/originals/4a/77/62/4a776257501128f32fb9a087efa37ee9.jpg)" }}>
                    <h5 className="card-title">Sign in</h5>
                </div>
            </div>
        </div >
    );
}
