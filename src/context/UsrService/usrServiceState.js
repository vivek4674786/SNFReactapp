import UsrServiceContext from "./usrServiceContext"
import { useState } from "react";
const Host = "https://smartandfastrajkot.onrender.com"

const UserServiceState = (props) => {
  const usrServiceInitial =[];

  const [usrServices, setUsrServices] = useState(usrServiceInitial)

  const fetchServices = async (id) => {
    const response = await fetch(`${Host}/home/profile/myservices`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    })
    const json = await response.json()
    console.log(json);
    setUsrServices(json)

  }
  
  const deleteService = async (service_id) => {
    const response = await fetch(`${Host}/home/profile/deleteservice/${service_id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    })
    const json = await response.json()
    if(response.status == 200){
      alert("Service Deleted")
    }
    

    const newServices = usrServices.filter((service) => { return service._id !== service_id})
    setUsrServices(newServices)
  }

  const udateService = async (id, service_title, service_type, image, description, keywords, address) => {
    const response = await fetch(`${Host}/home/profile/deleteservice/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    })
  }

  return (
    <UsrServiceContext.Provider value={{ usrServices, setUsrServices,fetchServices, deleteService }}>
      {props.children}
    </UsrServiceContext.Provider>
  )
}

export default UserServiceState