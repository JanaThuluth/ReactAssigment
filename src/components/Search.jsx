import React from "react";

const Search = () => {
  return (
    <div
      className="container-fluid"
      style={{
        margin: 0,
        paddingRight: "10%",
        paddingLeft: "10%",
        paddingBottom: "10%",
        paddingTop: "10%",
        background:
          'url("https://s3-alpha-sig.figma.com/img/e13e/0e2e/9b977bd47a30a4e543b4224bd388e353?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eH1r-a5F1dHRqjOjLidYxbj-5SDzHBUzNL-vfp1znfMTdMWmtpFjRrHpeHgh9loMrRwzU~vvCynrUAt0Z79try9a5AJFozHoRRxWh4yBcbYyIjJujTiZwQ~5~QMzXy4ERWI2vSP8Gr9QSg68opAH0sA80WOMSQFKMrhj6ZueypVMl3NCRWugvpdYqvmIgUJUpbv95SrUdRH57LRnmV9pgUbHC2cM1kC9lH-YBLQkcvHGH87z~GzVny~RCYYqC3uBblsb5GiNW6bNzOg3MmNO3vmpaG38iz6Rxxk29bCHKeSo8uyW6Z4JMPYS2NPx-fCDijgV1wr8SGi6V2b8F2zovA__") no-repeat, linear-gradient(103deg, #114f8b, #2a9ad7 99%)',
        backgroundSize: "cover",
      }}
    >
      <div
        className="d-xxl-flex justify-content-xxl-center"
        style={{ width: "100%" }}
      >
        <div className="d-xxl-flex">
          <div className="row">
            <div
              className="col"
              style={{
                color: "var(--bs-body-bg)",
                marginRight: "-1px",
                transform: "translate(0%)",
              }}
            >
              <div style={{ width: "969.7px" }}>
                <h1
                  style={{
                    textAlign: "center",
                    fontFamily: "'Baloo Bhai 2', serif",
                    fontWeight: "bold",
                    fontSize: "61px",
                    lineHeight: "67px",
                  }}
                >
                  Let’s explore &amp; travel the world
                </h1>
                <p
                  className="fw-lighter"
                  style={{
                    textAlign: "center",
                    fontFamily: "Roboto, sans-serif",
                    lineHeight: "32px",
                    fontSize: "24px",
                  }}
                >
                  Find the best destinations and the most popular stays!
                </p>
              </div>
              <div
                style={{
                  background: "var(--bs-body-bg)",
                  padding: "30px",
                  borderRadius: "15px",
                  color: "var(--bs-body-color)",
                }}
              >
                <div className="row">
                  <div className="col">
                    <h5
                      className="text-uppercase"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "20px",
                        letterSpacing: "2px",
                        lineHeight: "100%",
                        fontWeight: "bold",
                      }}
                    >
                      Search flights
                    </h5>
                  </div>
                  <div
                    className="col"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <div className="form-check" style={{ marginRight: "20px" }}>
                      <input
                        className="form-check-input"
                        type="radio"
                        id="formCheck-2"
                        name="tripType"
                      />
                      <label
                        className="form-check-label fw-semibold"
                        htmlFor="formCheck-2"
                        style={{ lineHeight: "0", fontSize: "16px" }}
                      >
                        Return
                      </label>
                    </div>

                    <div className="form-check" style={{ marginRight: "20px" }}>
                      <input
                        className="form-check-input"
                        type="radio"
                        id="formCheck-1"
                        name="tripType"
                      />
                      <label
                        className="form-check-label fw-semibold"
                        htmlFor="formCheck-1"
                        style={{ lineHeight: "0", fontSize: "16px" }}
                      >
                        One-Way
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "13px" }}>
                  <div className="col">
                    <input
                      className="border rounded border-1"
                      type="text"
                      name="Departure"
                      placeholder="Departure"
                      style={{
                        borderRadius: "5px",
                        borderWidth: "1px",
                        borderColor: "var(--bs-secondary-color)",
                        borderRightStyle: "none",
                        width: "100%",
                        height: "50px",
                      }}
                      autoComplete="on"
                    />
                  </div>
                  <div className="col">
                    <input
                      className="border rounded"
                      type="text"
                      name="Arrival"
                      placeholder="Arrival"
                      style={{
                        width: "100%",
                        height: "50px",
                        borderRadius: "5px",
                        borderRightWidth: "0px",
                        borderRightStyle: "none",
                      }}
                    />
                  </div>
                  <div className="col">
                    <input
                      className="border rounded border-1"
                      type="date"
                      name="Date"
                      style={{
                        borderRadius: "5px",
                        borderRightStyle: "none",
                        borderRightColor: "var(--bs-secondary-color)",
                        width: "100%",
                        height: "50px",
                      }}
                    />
                  </div>
                  <div className="col">
                    <input
                      className="btn btn-lg btn-warning"
                      type="submit"
                      style={{
                        width: "100%",
                        height: "50px",
                        fontWeight: "bold",
                        color: "rgb(255,255,255)",
                        background: "#f99a0e",
                        fontSize: "15px",
                      }}
                      name="Search"
                      value="Search flights"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
