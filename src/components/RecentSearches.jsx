import React from "react";



const RecentSearches=()=>{

    return ( 
    
        <div className="container">
        <div style={{ marginBottom: '30px', marginTop: '30px' }}>
          <h1 className="text-uppercase fw-semibold" style={{ fontSize: '18px', lineHeight: '50px', letterSpacing: '2px', fontFamily: 'Roboto, sans-serif' }}>
            Recent Searches
          </h1>
          <div className="row d-flex d-xxl-flex align-items-center me-auto" style={{ width: '1211px' }}>
            <div className="col" style={{ borderRadius: '5px', padding: '20px', border: '1px solid #21252940', marginRight: '150px' }}>
              <div className="row d-xxl-flex align-items-xxl-center">
                <div className="col d-xxl-flex justify-content-xxl-center">
                  <h1 className="fw-semibold" style={{ color: 'rgb(18,98,173)', fontSize: '24px', fontFamily: 'Roboto, sans-serif' }}>
                    SIN
                  </h1>
                </div>
                <div className="col d-xxl-flex justify-content-xxl-center">
                  <img src="assets/img/xb4zk6qfbym8c734t7.svg" alt="icon" />
                </div>
                <div className="col d-xxl-flex justify-content-xxl-center">
                  <h1 className="fw-semibold" style={{ color: 'rgb(18,98,172)', fontSize: '24px', fontFamily: 'Roboto, sans-serif' }}>
                    <strong>LAX</strong>
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p style={{ textAlign: 'center', fontSize: '20px', fontFamily: 'Roboto, sans-serif' }}>
                    <strong>Depart on</strong>: 7 Sep 2021
                  </p>
                </div>
              </div>
            </div>

            <div className="col" style={{ border: '1px solid #21252940', borderRadius: '5px', padding: '20px' }}>
              <div className="row d-xxl-flex align-items-xxl-center">
                <div className="col d-xxl-flex justify-content-xxl-center">
                  <h1 className="fw-semibold" style={{ color: 'rgb(18,98,173)', fontSize: '24px', fontFamily: 'Roboto, sans-serif' }}>
                    MY
                  </h1>
                </div>
                <div className="col d-xxl-flex justify-content-xxl-center">
                  <img src="assets/img/xb4zk6qfbym8c734t7.svg" alt="icon" />
                </div>
                <div className="col d-xxl-flex justify-content-xxl-center">
                  <h1 className="fw-semibold" style={{ color: 'rgb(18,98,172)', fontSize: '24px', fontFamily: 'Roboto, sans-serif' }}>
                    DUB
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p style={{ textAlign: 'center', fontSize: '20px' }}>
                    <strong>Depart on</strong>: 9 Sep 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

    
      </div>

    );






};

export default RecentSearches;