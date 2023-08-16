import React from "react";

const Serviceitem = (props) => {
    const { service } = props

    return (
        <>
                <div className="card mx-2" style={{ width: "40%", marginTop: "10px" }}>
                    <img src="https://picsum.photos/id/10/500/300" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{service.service_title}</h5>
                        <p className="card-text">{service.description}</p>
                    </div>
                    <ul className="list-group list-group-flush" style={{ maxHeight: "100px" }}>
                        <li className="list-group">Key Points:  {service.keywords}</li>
                        <li className="list-group">Mobile no:   {service.mobileno}</li>
                        <li className="list-group">Email:   {service.email}</li>
                        <a href="#" className="card-link">Website</a>
                    </ul>
                    <div className="card-body" style={{ maxHeight: "40px", minHeight: "35px" }}>
                        <li className="list-group">Address: {service.address}</li>
                    </div>
                </div>
        </>
    )
}

export default Serviceitem