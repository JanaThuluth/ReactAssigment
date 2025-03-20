import React from "react";



const Trip=()=>{

    return ( 
    <div className="container">
 <div>
          <h1 className="text-uppercase fw-semibold" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', letterSpacing: '2px', color: 'rgba(0,0,0,0.32)' }}>
            Prepare for your trip
          </h1>
          <div className="row d-flex d-xxl-flex">
            {[
              { img: 'assets/img/97zp429zu3em8c8496h.svg', text: 'Hotel' },
              { img: 'assets/img/ppv26jajimbm8c858s9.svg', text: 'Attractions' },
              { img: 'assets/img/yuny6hpwnpm8c85m6p.svg', text: 'Eats' },
              { img: 'assets/img/k4q9bgwadsqm8c867dd.svg', text: 'Commute' },
              { img: 'assets/img/c7p8k5740qum8c86sbs.svg', text: 'Taxi' },
              { img: 'assets/img/ovajyh2w4ulm8c88a1d.svg', text: 'Movies' }
            ].map((item, index) => (
              <div
                key={index}
                className={`col d-xxl-flex flex-column justify-content-xxl-center align-items-xxl-center`}
              style={{ display: "flex",flexDirection: "column",alignItems: "center"}}
              >
                <img src={item.img} alt={item.text} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>

        </div>

    </div>
       
    );






};

export default Trip;