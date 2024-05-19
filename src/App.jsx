import Login from './Components/Authentication/Login'
import './App.css'
import Home from './Components/Home/Home'
import { useSelector } from 'react-redux';
import Authentication from './Components/Authentication/Authentication';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {


  const currentUsername = useSelector((state) => state.Form.username);
  const currentPassword = useSelector((state) => state.Form.password);

  const loggedinusername = useSelector((state) => state.Form.loggedinusername)
  const loggedinuserpassword = useSelector((state) => state.Form.loggedinuserpassword)

  console.log("from app.jsx", currentUsername, currentPassword,);
  console.log("from app.jsx", "loggedinusername==>", loggedinusername, loggedinuserpassword,);


  return (
    <>
      <Home/>
      {/* {
        currentUsername && loggedinusername && currentPassword && loggedinuserpassword ? <Home /> : <Authentication />
      } */}
    </>
  )
}

export default App
