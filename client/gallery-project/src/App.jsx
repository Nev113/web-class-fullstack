import './App.css'
import { Route, Routes, BrowserRouter, Outlet } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ImageGallery from './pages/Gallery';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Photo from './pages/Photo';
import Logout from './pages/Logout';
import Add from './pages/Add';
import RUD from './pages/RUD';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<ImageGallery />} />
      <Route path="/admin" element={<Admin/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/Photo/:id' element={<Photo />} />
      <Route path="/admin/logout" element={<Logout />} />
      <Route path='/admin/add' element={<Add />} />
      <Route path='/admin/rud' element={<RUD />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
