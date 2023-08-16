import React from "react";

const Serviceitem = (props) => {
    const { service } = props

    return (
        <>
            <div className="col-md-5" style={{marginBottom: "2rem"}}>

                <div className="card" style={{ width: "25rem" }}>
                    <div className="card-body" style={{width:"100%", height: "16rem", overflow: "hidden"}}>
                    <img src={service.image.url} className="card-img-top" alt="..." />
                    </div>
                    
                    <div className="card-body">
                        <h5 className="card-title">{service.service_title}</h5>
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
                </div>
            </div>

        </>
    )
}

export default Serviceitem

// https://picsum.photos/id/10/500/300