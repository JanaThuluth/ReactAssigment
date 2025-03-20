import React from "react";



const Footer=()=>{

    return ( 
<footer>
      <div className="container-fluid" style={{ margin: 0, padding: '49px', background: 'var(--bs-primary)' }}>
        <div className="row">
          <div className="col-auto" style={{ borderRight: '1px solid var(--bs-primary-bg-subtle)' }}>
            <img src="assets/img/n3dld6nc8xm8dh8lqb.svg" style={{ marginBottom: '14px' }} />
            <p style={{ color: 'rgb(255,255,255)' }}>
              Fickle Flight is your one-stop travel portal. We offer hassle-free flight and <br />
              hotel bookings. We also have all your flight needs in your online shop.
            </p>
            <img src="assets/img/rxyitz4yjbm8dha875.svg" style={{ marginRight: '30px' }} />
            <img src="assets/img/4651qowxffym8dh9nlx.svg" style={{ marginRight: '30px' }} />
            <img src="assets/img/4yd5fxfzabdm8dh9y2a.svg" />
          </div>
          <div className="col d-flex flex-column" style={{ paddingLeft: '52px' }}>
            <h4 style={{ color: 'var(--bs-primary-bg-subtle)' }}>Company</h4>
            <a className="text-decoration-none" href="#" style={{ color: 'rgb(255,255,255)' }}>
              About Us
            </a>
            <a className="text-decoration-none" href="#" style={{ color: 'rgb(255,255,255)' }}>
              News
            </a>
            <a className="text-decoration-none" href="#" style={{ color: 'rgb(255,255,255)' }}>
              Careers
            </a>
            <a className="text-decoration-none" href="#" style={{ color: 'rgb(255,255,255)' }}>
              How we work
            </a>
          </div>
          <div className="col d-flex flex-column">
            <h4 style={{ color: 'var(--bs-primary-bg-subtle)' }}>Support</h4>
            <a className="text-decoration-none" href="#" style={{ color: 'rgb(255,255,255)' }}>
              Account
            </a>
            <a className="text-decoration-none" href="#" style={{ color: 'rgb(255,255,255)' }}>
              Support Center
            </a>
            <a className="text-decoration-none" href="#" style={{ color: 'rgb(255,255,255)' }}>
              FAQ
            </a>
            <a className="text-decoration-none" href="#" style={{ color: 'rgb(255,255,255)' }}>
              Accessibility
            </a>
          </div>
          <div className="col d-flex flex-column">
            <h4 style={{ color: 'var(--bs-primary-bg-subtle)' }}>More</h4>
            <a className="text-decoration-none" href="#" style={{ color: 'rgb(255,255,255)' }}>
              Covid Advisory
            </a>
            <a className="text-decoration-none" href="#" style={{ color: 'rgb(255,255,255)' }}>
              Airline Fees
            </a>
            <a className="text-decoration-none" href="#" style={{ color: 'rgb(255,255,255)' }}>
              Tips
            </a>
            <a className="text-decoration-none" href="#" style={{ color: 'rgb(255,255,255)' }}>
              Quarantine Rules
            </a>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    </footer>


       );






};

export default Footer;