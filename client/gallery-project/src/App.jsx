import './App.css'
import { Route, Routes, BrowserRouter, Outlet } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ImageGallery from './pages/Gallery.jsx';
import Admin from './pages/Admin.jsx';
import Login from './pages/Login.jsx';
import Photo from './pages/Photo.jsx';
import Logout from './pages/Logout.jsx';
import Add from './pages/Add.jsx';
import RUD from './pages/RUD.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<ImageGallery />} />
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/Photo/:id" element={<Photo />} />
      <Route path="/admin/logout" element={<Logout />} />
      <Route path="/admin/add" element={<Add />} />
      <Route path="/admin/rud" element={<RUD />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
