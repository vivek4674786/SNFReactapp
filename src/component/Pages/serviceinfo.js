import react, { useContext, useEffect } from "react";
import contextValue from "../../context/service/servicecontext"
import Serviceitem from "./serviceitem"
import { useParams } from "react-router-dom";



export const ServiceList = () => {
    const { stringId } = useParams()
    const context = useContext(contextValue)
    const { Services, setServices, fetchServices } = context

    useEffect(() => {
        fetchServices(stringId)
    }, [])

    return (
        <div className="container justify-content-center row my-0">
            <h3 style={{marginLeft:"17%"}}>Available Services</h3>
            {Services.map((service) => {
                return <Serviceitem service={service} />
            })
            }
        </div>
    )   
}