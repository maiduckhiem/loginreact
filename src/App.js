import './App.css';
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './component/login';
import Layoutadmin from './layout/layoutadmin';
import Signup from './component/signup';
import Signin from './component/signin';
import PrivateAdmin from './api/privateAdmin';
import Home from './component/home';
import { useEffect, useState } from 'react';
import { getAll } from './api/authAPI';
function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await getAll()
        setUsers(data)
      }
      catch (error) {
        toast.error(error.response.data)
      }
    }
    getUser()
  }, [])
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index path="/" element={<Home user={users}/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Route>
          <Route path="admin/*" element={<PrivateAdmin><Layoutadmin /></PrivateAdmin>}>
            <Route index path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
