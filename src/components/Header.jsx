import React from "react";



const Header=()=>{

    return( 

   <div className="container" style={{ paddingBottom: '0', marginBottom: '0' }}>
      <nav className="navbar navbar-expand-md bg-body py-3" style={{ marginBottom: '0px', height: '87px' }}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#"></a>
          <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-2">
            <img src="assets/img/n2wc3rbq3mm8c3cbqq.svg" alt="Logo" />
            <ul className="navbar-nav ms-auto" style={{ margin: '20px', fontWeight: 'bold' }}>
              <li className="nav-item">
                <a className="nav-link active" href="#" style={{ fontSize: '14px', color: 'rgb(58,118,162)' }}>
                  Explore
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Search</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hotels</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Offers</a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item"></li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src="assets/img/mkmn9yiomqcm8c3it0h.svg" alt="Icon" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src="assets/img/tparlcuzbtmm8c3jgl7.svg" alt="Icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>


);










};


export default Header;