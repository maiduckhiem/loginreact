import './App.css';
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './component/login';
import Layoutadmin from './layout/layoutadmin';
import Signup from './component/signup';
import Signin from './component/signin';
import PrivateAdmin from './api/privateAdmin';
import { getAll, remove, add, update } from './api/productAPI';
import Home from './component/home';
import { useEffect, useState } from 'react';
import Productadmin from './component/productadmin';
import Productadd from './component/productadd';
import Product from './component/product';
function App() {
  const [users, setUsers] = useState([])
  const [products, setProduct] = useState([])
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
    // product
    const getproduct = async () => {
      const { data } = await getAll()
      setProduct(data)
    }
    getproduct()
  }, [])
  //
  const onhandremove = async (id) => {
    try {
      const { data } = await remove(id);
      const newproduct = products.filter((item) => item.id !== data.id);
      setProduct(newproduct,data);
    } catch (error) {
      console.log(error.response.data)
    }
  };
  const onhandadd = async (product) => {
    try {
      const { data } = await add(product);
      setProduct([...products, data]);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const onhandupdate = async (product) => {
    const { data } = await update(product);
    const newproduct = product.map((item) =>
      item.id === data.id ? data : item
    );
  };

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index path="/" element={<Home user={users} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/product" element={<Product product={products} />} />
          </Route>
          <Route path="admin/*" element={<PrivateAdmin><Layoutadmin /></PrivateAdmin>}>
            <Route path="product" element={<Productadmin onremove={onhandremove} product={products} />} />
            <Route path="product/add" element={<Productadd onAdd={onhandadd} />} />
            <Route index path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
