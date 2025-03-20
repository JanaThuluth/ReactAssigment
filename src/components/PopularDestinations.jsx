import React from "react";



const PopularDestinations=()=>{
    const destinations = [
        {
          name: "Paris",
          image: "assets/img/ParisImage.png",
          price: "$699",
        },
        {
          name: "Greece",
          image: "assets/img/GreeceImage.png",
          price: "$1079",
        },
        {
          name: "Norway",
          image: "assets/img/NorwayImage.png",
          price: "$895",
        },
        {
          name: "Tuscany",
          image: "assets/img/TuscanyImage.png",
          price: "$1245",
        },
      ];
    
    return ( 
        <div className="container" style={{ marginTop: "51px" }}>
        <div>
          <div className="row">
            <div className="col">
              <h5
                className="text-uppercase fw-semibold"
                style={{
                  color: "rgb(18,98,173)",
                  fontFamily: "Roboto, sans-serif",
                  lineHeight: "0px",
                }}
              >
                Plan your next trip
              </h5>
              <h2 className="fw-bold" style={{ marginBottom: "30px" }}>
                Most Popular Destinations
              </h2>
            </div>
            <div className="col" style={{ display: "flex", justifyContent: "flex-end" }}            >
              <div style={{display:"flex"}}>
                <h5
                  className="fw-semibold"
                  style={{
                    color: "rgb(18,98,173)",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  View all destinations
                </h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-right"
                  style={{
                    fontSize: "27px",
                    color: "rgb(18,98,173)",
                    marginLeft: "10px",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row row-cols-4" style={{ margin: "5px" }}>
            {destinations.map((destination, index) => (
              <div className="col" key={index}>
                <div
                  style={{
                    height: "200px",
                    background: `url(${destination.image})`,
                    backgroundSize: "cover",
                    borderRadius: "10px",
                    padding: "11px",
                  }}
                >
                  <div className="row">
                    <div className="col">
                      <h3
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          color: "var(--bs-body-bg)",
                          fontSize: "20px",
                        }}
                      >
                        {destination.name}
                      </h3>
                    </div>
                    <div className="col">
                      <h5
                        className="text-uppercase"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          color: "var(--bs-body-bg)",
                          textAlign: "right",
                          fontSize: "16px",
                        }}
                      >
                        from
                      </h5>
                      <h1
                        className="fw-bolder"
                        style={{
                          fontFamily: "'Baloo Bhai 2', serif",
                          color: "var(--bs-body-bg)",
                          textAlign: "right",
                          lineHeight: "26px",
                          fontWeight: "bold",
                          fontSize: "38px",
                        }}
                      >
                        {destination.price}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    );






};

export default PopularDestinations;