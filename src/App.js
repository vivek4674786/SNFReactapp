import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import { Services } from './component/Pages/Services'
import { Profile } from './component/Pages/Profile'
import Signup from './component/signup&login/Signup'
import Login from './component/signup&login/Login';
import { Types } from './component/Types';
import Alert from './component/Alert';
import { useState } from 'react';
import { ServiceList } from './component/Pages/serviceinfo';
import ServiceState from './context/service/servicestate';
import UserState from './context/user/userstate';
import NoteState from './context/AddService/addServiceState';
import UserServiceState from './context/UsrService/usrServiceState';
import { ProfileForm } from './component/Pages/ProfileForm';
import { UpdateForm } from './component/Pages/UpdateForm';
import { About } from './component/Pages/About';
import { Footer } from './component/Footer';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <UserState>
    <NoteState>
    <ServiceState>
    <UserServiceState>
      <Router>
      
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Services />} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/login' element={<Login showAlert={showAlert}/>} />
            <Route exact path='/signup' element={<Signup showAlert={showAlert}/>} />
            <Route exact path='/services/:id' element={<Types />} />
            <Route exact path='/serviceinfo/:stringId' element={<ServiceList />} />
            <Route exact path='/profileForm' element={<ProfileForm />} />
            <Route exact path='/updateForm' element={<UpdateForm />} />
          </Routes>
        </div>
        {/* <Footer/> */}
        
      </Router>
      </UserServiceState>
      </ServiceState>
      </NoteState>
      </UserState>
    </>
  );
}

export default App;
