import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer";

export const Services = () => {

  return (
    <>
      <div className="row d-flex justify-content-evenly me-auto my-3 mx-1">
        <div className="card" style={{ width: "20rem", minWidth: "25%" }}>
          <img src={require('./Image/automobile.jpg')} className="card-img-top " alt="automobile photos" />
          <div className="card-body">
            <h5 className="card-title">Automobile</h5>
            <p className="card-text">Find information like car repairing, cleaning, Balancing, Denting, Painting. Insutance claim, Old car buy & sell</p>
            <Link className="btn btn-dark" to="/serviceinfo/automobile">Read More</Link>
          </div>
        </div>
        <div className="card" style={{ width: "20rem", minWidth: "25%" }}>
          <img src={require('./Image/Electrician-Header.jpg')} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Electrician</h5>
            <p className="card-text">find information like install, test, and maintain wiring, lighting systems, and fixtures in homes, work indoors and outdoors.</p>
            <Link className="btn btn-dark" to="/serviceinfo/electrician">Read More</Link>
          </div>
        </div>
        <div className="card" style={{ width: "20rem", minWidth: "25%" }}>
          <img src={require('./Image/Garment-shop.jpg')} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Garment Shop</h5>
            <p className="card-text">find information of clothes like  jeans, dress, shorts, skirt. anything for men, women and kids. Also you can buy men's and women's accessories.</p>
            <Link className="btn btn-dark" to="/serviceinfo/garments">Read More</Link>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-evenly me-auto my-3 mx-1">

        <div className="card" style={{ width: "20rem", minWidth: "25%" }}>
          <img src={require('./Image/Hospital-medical2.jpg')} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Medicals & Hospital</h5>
            <p className="card-text">Find nearest Hospital, medical and lab that can you help in anytime. You also get doctors number for emergencies. </p>
            <Link className="btn btn-dark" to="/serviceinfo/medical">Read More</Link>
          </div>
        </div>

        <div className="card" style={{ width: "20rem", minWidth: "25%" }}>
          <img src={require('./Image/grocery-shop.jpg')} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Provision Store</h5>
            <p className="card-text">Find nearest provision store, in that you can find any of grocery items like vegetables, Soups, saffron,rice,ghee, coriander,dried fruits,dairy item,suger anything.</p>
            <Link className="btn btn-dark" to="/serviceinfo/grossery">Read More</Link>
          </div>
        </div>

        <div className="card" style={{ width: "20rem", minWidth: "25%" }}>
          <img src={require('./Image/xerox shop.jpg')} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Stationery & Xerox Shop</h5>
            <p className="card-text">Find nearest xerox and stationery shop in that you can print any document and purchase books, pen, scale etc. </p>
            <Link className="btn btn-dark" to="/serviceinfo/stationery">Read More</Link>
          </div>
        </div>
      </div>
     
      
      <div className="row d-flex justify-content-evenly me-auto my-3 mx-1">
        <div className="card" style={{ width: "20rem", minWidth: "25%" }}>
          <img src={require('./Image/school.jpeg')} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Educational Places</h5>
            <p className="card-text">Find information like nearest school and college. any information regarding study related book store.</p>
            <Link className="btn btn-dark" to="/serviceinfo/educational">Read More</Link>
          </div>
        </div>

        <div className="card" style={{ width: "20rem", minWidth: "25%" }}>
          <img src={require('./Image/hotel.jpeg')} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Hotels & Restaurants</h5>
            <p className="card-text">Find information like nearest Hotel and Restaurants. any information regarding available room and food.</p>
            <Link className="btn btn-dark" to="/serviceinfo/hotels">Read More</Link>
          </div>
        </div>
        <div className="card" style={{ width: "20rem", minWidth: "25%" }}>
          <img src={require('./Image/others.jpeg')} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Others</h5>
            <p className="card-text">all others Services including this section. </p>
            <Link className="btn btn-dark" to="/serviceinfo/others">Read More</Link>
          </div>
        </div>
        
      </div>
    </>
    
  );
};