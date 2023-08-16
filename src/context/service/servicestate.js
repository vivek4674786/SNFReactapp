import ServiceContext from "./servicecontext"
import { useState } from "react"
const Host = "https://smartandfastrajkot.onrender.com"


const ServiceState = (props) => {

    const ServicesInitial = []
    const [Services, setServices] = useState(ServicesInitial)

    const fetchServices = async (id) => {
        const response = await fetch(`${Host}/home/servicedomains/services`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ service_type: id })
        })
        const json = await response.json()
        setServices(json)

    }

    return (
        <ServiceContext.Provider value={{ Services, setServices, fetchServices }}>
            {props.children}
        </ServiceContext.Provider>
    )
}

export default ServiceState

