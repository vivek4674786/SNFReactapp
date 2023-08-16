import React, {useContext} from 'react'
import { useParams } from "react-router-dom";



export const Types = () => {

  const context = useContext("../context/service/servicecontext");
  const { Services, setServices} = context;

  const id = useParams();
  console.log(id);

  return (
    <>
      <div className="row d-flex justify-content-evenly me-auto my-3 mx-1">
        <div className="card mx-2" style={{ width: "40%", marginTop: "10px" }}>
          <img style={{maxHeight: "50%"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dattatreya Auto Spare Parts</h5>
            <p className="card-text"> Automobile Part Wholesalers
              | Diesel Engine Part Dealers
              | Automobile Electric Part Dealers
              | Automobile Electrical Part Dealers-Lucas TVS
              | Automobile Electric Part Dealers-Minda
              | Oil Engine Dealers
              | Automobile Electrical Part Dealers
            </p>
          </div>
          <ul className="list-group list-group-flush" style={{ maxHeight: "100px" }}>
            <li className="list-group">Mobile Number: 07947149772</li>
            <li className="list-group">Email Address:- datatreyauto@gmail.com </li>
            <a href="https://www.justdial.com/jdmart/Rajkot/Dattatreya-Auto-Spare-Parts-Opp-Shriram-Link-Up-Mangla-Road/0281PX281-X281-141101161248-U2L2_BZDET/catalogue" className="card-link">Visit</a>
          </ul>
          <div className="card-body" style={{ minHeight: "35px" }}>
            <li className="list-group">Address:
              Prishram Complex, Main Road, Mangla Road, Rajkot - 360002</li>
          </div>
        </div>
        <div className="card mx-2" style={{ width: "40%", marginTop: "10px" }}>
          <img  style={{maxHeight: "50%"}}  className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">The Destiny Car Care</h5>
            <p className="card-text">You can commute or travel as you wish or plan by using car rental services, which offer you a vehical for the day or some hours.
            </p>
          </div>
          <ul className="list-group list-group-flush" style={{ maxHeight: "100px" }}>
            <li className="list-group">Mobile Number: 098657 57698</li>
            <li className="list-group">Email Address:- destinycarcare@gmail.com </li>
            <a href="https://www.justdial.com/Rajkot/The-Destiny-Car-Care-Near-Pradhyuman-Royal-HeightsBehind-Crystal-Mall-Kalavad-Road/0281PX281-X281-220531191901-R6T8_BZDET?ncatid=10079017&area=&search=%20Car%20Washing%20Services%20in%20Rajkot&mncatname=Car%20Washing%20Services&abd_btn=Get%20Best%20Deal&abd_heading=Car%20Washing%20Services" className="card-link">Visit</a>
          </ul>
          <div className="card-body" style={{ minHeight: "35px" }}>
            <li className="list-group">Address:
            B/h Crystal mall, Nr. Pradyman Royal heights, Pushkardham Road, Kalawad Rd, Rajkot, Gujarat 360005</li>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-evenly me-auto my-3 mx-1">
        <div className="card mx-2" style={{ width: "40%", marginTop: "10px" }}>
          <img src="https://picsum.photos/id/10/500/300" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Shop Name</h5>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nihil porro harum natus pariatur obcaecati id cumque ducimus doloribus provident.</p>
          </div>
          <ul className="list-group list-group-flush" style={{ maxHeight: "100px" }}>
            <li className="list-group">Mobile Number</li>
            <li className="list-group">Email Address</li>
            <a href="#" className="card-link">Website</a>
          </ul>
          <div className="card-body" style={{ maxHeight: "40px", minHeight: "35px" }}>
            <li className="list-group">Address</li>
          </div>
        </div>
        <div className="card mx-2" style={{ width: "40%", marginTop: "10px" }}>
          <img src="https://picsum.photos/id/10/500/300" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Shop Name</h5>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nihil porro harum natus pariatur obcaecati id cumque ducimus doloribus provident.</p>
          </div>
          <ul className="list-group list-group-flush" style={{ maxHeight: "100px" }}>
            <li className="list-group">Mobile Number</li>
            <li className="list-group">Email Address</li>
            <a href="#" className="card-link">Website</a>
          </ul>
          <div className="card-body" style={{ maxHeight: "40px", minHeight: "35px" }}>
            <li className="list-group">Address</li>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-evenly me-auto my-3 mx-1">
        <div className="card mx-2" style={{ width: "40%", marginTop: "10px" }}>
          <img src="https://picsum.photos/id/10/500/300" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Shop Name</h5>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nihil porro harum natus pariatur obcaecati id cumque ducimus doloribus provident.</p>
          </div>
          <ul className="list-group list-group-flush" style={{ maxHeight: "100px" }}>
            <li className="list-group">Mobile Number</li>
            <li className="list-group">Email Address</li>
            <a href="#" className="card-link">Website</a>
          </ul>
          <div className="card-body" style={{ maxHeight: "40px", minHeight: "35px" }}>
            <li className="list-group">Address</li>
          </div>
        </div>
        <div className="card mx-2" style={{ width: "40%", marginTop: "10px" }}>
          <img src="https://picsum.photos/id/10/500/300" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Shop Name</h5>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nihil porro harum natus pariatur obcaecati id cumque ducimus doloribus provident.</p>
          </div>
          <ul className="list-group list-group-flush" style={{ maxHeight: "100px" }}>
            <li className="list-group">Mobile Number</li>
            <li className="list-group">Email Address</li>
            <a href="#" className="card-link">Website</a>
          </ul>
          <div className="card-body" style={{ maxHeight: "40px", minHeight: "35px" }}>
            <li className="list-group">Address</li>
          </div>
        </div>
      </div>

      <h2>Available Services</h2>
      {Services.map((Service) =>{
        return Services.service_title
      })
      }
    </>
  );
};