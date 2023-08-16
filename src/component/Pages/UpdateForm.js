import React, { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
// import noteContext from '../../context/notes/noteContext';
const Host = "https://smartandfastrajkot.onrender.com"

export const UpdateForm = (props) => {
    const location = useLocation()
    const service = location.state
    // const context = useContext(noteContext);
    // const { addNote } = context;
    //const {id, title, type, description, keywords, address} = useParams()
    let navigate = useNavigate();

    const [note, setNote] = useState({ service_title: service.title, service_type: service.type, description: service.description, keywords: service.keywords, address: service.address })
    const [Loading, setLoading] = useState(false);
    const updateServices = async (service_title, service_type, description, keywords, address) => {
        const response = await fetch(`${Host}/home/profile/updateservice/${service.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ service_title, service_type, description, keywords, address })
        })
        //const note = await response.json();
        if(response.status === 200){
            setLoading(false)
            alert("Serviceupdated Successfully")
            navigate('/profile')
        }
        // setNotes(notes.concat(note))note
        //console.log(note);

    }

    const hadleClick = (e) => {
        e.preventDefault();

        if(note.service_title === "")alert("Please Enter Shop Name")
        else if(note.service_type === "")alert("Please Select Service Type.")
        else if(note.description === "")alert("Please Enter Description")
        else if(note.keywords === "")alert("Please Enter Keywords")
        else if(note.address === "")alert("Please Enter Address")
        else if(note.image === "")alert("Please Upload Shop image or Visiting card")
        else{
            updateServices(note.service_title, note.service_type, note.image, note.description, note.keywords, note.address);
            setLoading(true)
        }

        
        // props.showAlert("Added successfully", "success");
        // addServices();
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    // const handleServiceImg = (e) => {
    //     try {
    //         console.log("entered in function")
    //         const file = e.target.files[1];
    //         if (file) {
    //             const fileReader = new FileReader();
    //             fileReader.readAsDataURL(file);
    //             fileReader.onload = () => {
    //                 if (fileReader.readyState === fileReader.DONE) {
    //                     setNote({ ...note, "image": fileReader.result });
    //                     console.log(fileReader.result);
    //                 }
    //             }
    //         }
    //         else{
    //             alert("choose image");
    //             console.log("error while handling image.")
    //         }
    //     } catch (e) {
    //         console.log("error while handling image.")
    //         console.log(e.message);
    //     }
    // }

    if(!Loading){
        return (
            <div className="container">
                <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
                    <h2 className="card-title mt-3 text-center my-1">Edit Service</h2>
                    <p className="text-center">change the information you want to.</p>
                    <form className='my-2' >
    
                        <div className="form-group input-group my-1">
                            <div className="input-group-prepend mx-1 my-1" >
                                <span className="input-group-text" > <i className="fa-solid fa-shop"></i> </span>
                            </div>
                            <input type="text" className="form-control" id="service_title" name="service_title" value={note.service_title} onChange={onChange} placeholder="Enter Your Shop Name" required />
                        </div>
    
    
    
                        <div className="form-group input-group my-1">
                            <div className="input-group-prepend mx-1 my-1">
                                <span className="input-group-text"> <i className="fa-solid fa-bolt"></i></span>
                            </div>
                            <select className="custom-select mx-1 my-1 " id="service_type" name="service_type" onChange={onChange} value={note.service_type} required>
                                <option selected="">Select Service</option>
                                <option value="automobile">Automobile</option>
                                <option value="electrician">Electrician</option>
                                <option value="garments">Garment Shop</option>
                                <option value="medical">Medicals & Hospital</option>
                                <option value="grossery">Provision Store</option>
                                <option value="stationery">Stationery & Xerox Shop</option>
                                <option value="educational">Educational Places</option>
                                <option value="hotels">Hotels & Restaurants</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
    
    
    
                        {/* <div className="form-group input-group my-1">
                            <div className="input-group-prepend mx-1 my-1" title='Enter Your shop photo'>
                                <span className="input-group-text" > <i className="fa-solid fa-image"></i> </span>
                            </div>
                            {note && <img src={service.image} alt="Uploaded" />} 
                            <input type="file" className="form-control" title='Upload Your shop photo' id="image" name="image" onChange={onChange} value={note.image}  ></input>
                        </div> */}
    
                        <div className="form-group input-group my-1">
                            <div className="input-group-prepend mx-1 my-1">
                                <span className="input-group-text"> <i className="fa-solid fa-circle-info"></i> </span>
                            </div>
                            <textarea className="form-control" id="description" name="description" value={note.description} onChange={onChange} placeholder="Enter Your Description" required rows="3"></textarea>
                        </div>
    
                        <div className="form-group input-group my-1">
                            <div className="input-group-prepend mx-1 my-1">
                                <span className="input-group-text"> <i className="fa-solid fa-location-dot"></i> </span>
                            </div>
                            <textarea className="form-control" id="address" name="address" value={note.address} onChange={onChange} placeholder="Enter Your Address" required rows="3"></textarea>
                        </div>
    
                        <div className="form-group input-group my-1">
                            <div className="input-group-prepend mx-1 my-1">
                                <span className="input-group-text"> <i className="fa-solid fa-circle-dot"></i> </span>
                            </div>
                            <textarea className="form-control" id="keywords" name="keywords" value={note.keywords} onChange={onChange} placeholder="Enter keyPoint" required rows="5"></textarea>
                        </div>
    
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-outline-light me-3 btn-dark" onClick={hadleClick}>Update</button>
                        </div>
                    </form>
                </article>
            </div>
        )
    }
    else{
        return(<div style={{marginLeft: "36%"}}><h1>Updating Data....</h1></div>)
    }
}
