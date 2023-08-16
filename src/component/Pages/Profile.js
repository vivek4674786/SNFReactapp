import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
//import { ProfileForm } from "./ProfileForm";
import UserContext from "../../context/user/usercontext"
import usrServiceContext from "../../context/UsrService/usrServiceContext";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export const Profile = () => {

  const context = useContext(UserContext)
  const { User, setUser, fetchUser } = context
  let navigate = useNavigate();

  useEffect(() => {
    fetchUser()
    fetchServices()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  // console.log("usr name")
  // console.log(User.name)

  const context2 = useContext(usrServiceContext)
  const { usrServices, setusrServices, fetchServices, deleteService } = context2
  const ref = useRef(null)
  const updateService = (service) => {
    ref.current.click()
  }

  return (
    <>
      <div className="container my-2">
        <div className="row">
          {/* <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                // <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                //  className="rounded-circle img-fluid" /> 
                <h5 className="my-3">{User.name}</h5>

                <div className="d-flex justify-content-center mb-2">
                  <Link className='btn btn-dark mx-2' to="/profileForm" role="button">Add Service</Link>
                  
                  <button onClick={handleLogout} className='btn btn-outline-light me-3 btn-dark'>LogOut</button>
                
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-lg-12" >
            <div className="card mb-4 ">
              <div className="card-body row">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{User.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{User.email}</p>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{User.mobileno}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center mb-2 mt-3">
                  <Link className='btn btn-dark btn-outline-light mx-2' to="/profileForm" role="button">Add Service</Link>
                  {/* <button type="button" className="btn btn-dark mx-2" >Edit</button> */}
                  <button onClick={handleLogout} className='btn btn-outline-light me-3 btn-dark'>LogOut</button>
                  {/*<button type="button" className="btn btn-outline-dark ms-1">Log Out</button> */}
                </div>
              </div>
            </div>
            <h3>Your Services</h3>
            <div className="card row mb-4 col-lg-12 ">
              {usrServices.map((service) => {
                return <div className="container d-flex justify-content-center">
                  <div className="card my-3" style={{ width: "25rem" }}>
                    <div className="card-body" style={{width:"100%", height: "16rem", overflow: "hidden"}}>
                      <img src={service.image.url} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{service.service_title}</h5>

                      <i class="bi bi-trash"></i>

                      <p className="card-text">{service.description}
                      </p>
                    </div>
                    <div className="ml-0 list-group list-group-flush">
                      <li className="list-group-item">Key Points:  {service.keywords}</li>
                      <li className="list-group-item">Mobile no:   {service.mobileno}</li>
                      <li className="list-group-item">Email:   {service.email}</li>
                    </div>
                    <div className="card-body">
                      Address: {service.address}
                    </div>
                    <div>
                      <button onClick={() => { deleteService(service._id) }} className='btn btn-outline-light me-3 mb-2  mx-2 btn-dark'><i className="far fa-trash-alt mx-2"></i>Delete</button>
                      {/* <Link className='btn btn-outline-light me-3 mb-2  mx-2 btn-dark' to="/updateform" role="button"><i className="far fa-trash-alt mx-2"></i>Edit</Link> */}
                      <button onClick={() => {
                          /* 1. Navigate to the Details route with params */
                            navigate('/updateform', {state: {
                              id : service._id, 
                              title: service.service_title,
                              type : service.service_type,
                              image: service.image.url,
                              description: service.description,
                              keywords: service.keywords,
                              address: service.address
                              

                              }})}} className='btn btn-outline-light me-3 mb-2  mx-2 btn-dark'><i className="far fa-edit mx-2"></i>Edit</button>
                      
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
