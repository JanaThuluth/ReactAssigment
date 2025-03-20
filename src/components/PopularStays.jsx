import React from "react";



const PopularStays=()=>{

    const stays = [
        {
          id: 1,
          type: "Entire bungalow",
          name: "Matterhorn Suites",
          price: "$575/night",
          rating: 4.9,
          reviews: 60,
          image: "assets/img/Matterhorn%20Suites%20Image.png",
        },
        {
          id: 2,
          type: "2-Story beachfront suite",
          name: "Discovery Shores",
          price: "$360/night",
          rating: 4.8,
          reviews: 116,
          image: "assets/img/WhatsApp%20Image%202025-03-17%20at%2021.59.03_42d9a6b6.jpg",
        },
        {
          id: 3,
          type: "Single deluxe hut",
          name: "Arctic Hut",
          price: "$420/night",
          rating: 4.7,
          reviews: 78,
          image: "assets/img/Arctic%20Hut%20Image.png",
        },
        {
          id: 4,
          type: "Deluxe King Room",
          name: "Lake Louise Inn",
          price: "$244/night",
          rating: 4.6,
          reviews: 63,
          image: "assets/img/Lake%20Louise%20Image.png",
        },
      ];
    
    
    return ( 
     
        <div className="container" style={{ marginTop: 50, marginBottom: 50 }}>
        <div>
          <div className="row">
            <div className="col">
              <h2 className="fw-bold" style={{ marginBottom: 30 }}>
                Popular Stays
              </h2>
            </div>
            <div className="col">
              <div className="d-flex justify-content-end align-items-start">
                <h5
                  className="fw-semibold"
                  style={{
                    color: "rgb(18,98,173)",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: 18,
                  }}
                >
                  View all stays
                </h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-right"
                  style={{ fontSize: 27, color: "rgb(18,98,173)", marginLeft: 10 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="row row-cols-4" style={{ margin: 5 }}>
            {stays.map((stay) => (
              <div className="col" key={stay.id}>
                <div
                  style={{
                    borderRadius: 10,
                    padding: 14,
                    border: "1px solid rgba(45,45,45,0.36)",
                    minHeight: 330,
                    minWidth: "auto",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <img src={stay.image} alt={stay.name} width="100%" />
                  </div>
                  <div style={{ padding: "10px 0" }}>
                    <div className="row">
                      <div className="col">
                        <p style={{ margin: 0, color: "#8E8E94" }}>{stay.type}</p>
                        <h4 className="fw-bolder" style={{ margin: 0, fontSize: 22 }}>
                          {stay.name}
                        </h4>
                        <p className="fw-lighter" style={{ margin: 0, fontSize: 18 }}>
                          {stay.price}
                        </p>
                        <div className="d-flex justify-content-start" style={{ marginTop: 32 }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="bi bi-star-fill"
                            style={{ color: "rgb(224,191,21)", fontSize: 19 }}
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <p style={{ marginLeft: 6, fontSize: 16 }}>
                            <strong>{stay.rating}</strong>{" "}
                            <span style={{ color: "rgb(18, 98, 175)" }}>({stay.reviews} reviews)</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-auto text-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-play-circle"
                          style={{ fontSize: 26, color: "rgb(18,98,173)" }}
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                        </svg>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start" style={{ marginTop: 32 }}>
                      <a
                        className="btn btn-outline-primary d-flex justify-content-center align-items-center"
                        role="button"
                        style={{ width: "100%", height: 50, fontWeight: "bold" }}
                        href="#"
                      >
                        MORE DETAILS&nbsp;
                      </a>
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

export default PopularStays;