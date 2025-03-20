import React, { useState } from 'react';



const Newsletter=()=>{

    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Subscribed Successfully!\nName: ${formData.name}\nEmail: ${formData.email}`);
      setFormData({ name: "", email: "" }); 
    };

    return ( 


        <div
        className="container-fluid d-flex flex-column align-items-center justify-content-center"
        style={{
          margin: 0,
          background: 'url("assets/img/Subscribe%20section%20background.png") no-repeat',
          backgroundSize: "cover",
          minHeight: "78vh",
          padding: "5vh",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h5
            className="text-uppercase"
            style={{
              color: "var(--bs-primary)",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "bold",
            }}
          >
            Subscribe to our newsletter
          </h5>
          <h2 style={{ fontFamily: "Roboto, sans-serif", fontWeight: "bold" }}>
            Get weekly updates
          </h2>
        </div>

        <div style={{ color: "rgb(255,255,255)", textAlign: "left" }}>
          <form
            onSubmit={handleSubmit}
            style={{
              background: "#ffffff",
              width: "570px",
              padding: "30px",
              borderRadius: "10px",
              border: "1px solid rgba(73,80,87,0.08)",
              marginTop: "30px",
            }}
          >
            <p style={{ color: "var(--bs-emphasis-color)" }}>
              Fill in your details to join the party!
            </p>

            <input
              className="border rounded border-1 form-control"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              style={{
                borderRadius: "5px",
                borderWidth: "1px",
                borderColor: "var(--bs-secondary-color)",
                width: "100%",
                height: "50px",
                marginBottom: "20px",
              }}
              autoComplete="on"
            />

            <input
              className="border rounded border-1 form-control"
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              style={{
                borderRadius: "5px",
                borderWidth: "1px",
                borderColor: "var(--bs-secondary-color)",
                width: "100%",
                height: "50px",
                marginBottom: "20px",
              }}
              autoComplete="on"
            />

            <input
              className="btn btn-lg btn-warning"
              type="submit"
              style={{
                width: "45%",
                height: "60px",
                fontWeight: "bold",
                color: "rgb(255,255,255)",
                background: "#f99a0e",
                fontSize: "15px",
              }}
              value="SUBMIT"
            />
          </form>
        </div>
      </div>
    );






};

export default Newsletter;