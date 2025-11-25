
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
// import ServicesPage from './pages/ServicesPage'
// import DoctorsPage from './pages/DoctorsPage'
// import AppointmentPage from './pages/AppointmentPage'
import SignupPage from './pages/auth/SignupPage'
import LoginPage from './pages/auth/LoginPage'
import ServicesPage from './pages/ServicesPage'
import UserCompleteProfile from './pages/auth/UserCompleteProfile'
import CaptainProfile from './pages/auth/captain/CaptainProfile'
import CaptainUploadDocs from './pages/auth/captain/CaptainUploadDocs'
import CaptainVehicle from './pages/auth/captain/CaptainVehicle'
// import ProfilePage from './pages/ProfilePage'
// import MyappointmentPage from './pages/MyappointmentPage'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/features' element = {<FeaturesPage/>}/>
        <Route path='/services' element = {<ServicesPage/>}/>
        <Route path='/about' element = {<AboutPage/>}/>
        <Route path='/contact' element = {<ContactPage/>}/>
        {/* 
        <Route path='/doctors' element = {<DoctorsPage/>}/>
        
        <Route path='/appointment' element = {<AppointmentPage/>}/>
        <Route path='/my-appointments' element = {<MyappointmentPage/>}/>
        <Route path='/profile' element= {<ProfilePage/>}/> 
*/}

        <Route path='/login' element = {<LoginPage/>}/>
        <Route path='/signup' element = {<SignupPage/>}/> 
        <Route path="/user/complete-profile" element={<UserCompleteProfile />} />
        <Route path="/captain/profile" element={<CaptainProfile/>} />
        <Route path="/captain/documents" element={<CaptainUploadDocs/>} />
        <Route path="/captain/vehicle" element={<CaptainVehicle/>} />
        

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
