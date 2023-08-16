import react, {useContext, useEffect} from "react";
import contextValue from "../../context/UsrService/usrServiceContext"
import Serviceitem from "./usrServiceitem"
import { useParams } from "react-router-dom";
import usrServiceContext from "../../context/UsrService/usrServiceContext";



export const ServiceList = () =>{

    useEffect(()=>{
        fetchServices()
    },[])



    const context2 = useContext(usrServiceContext)
    const { usrServices } = context2;

    return(
        
        <div className="container my-5">
            <h2>Available Services</h2>
            {usrServices.map((service) => {
                return <Serviceitem service ={service}/>
            })
            }
        </div>
    )
}