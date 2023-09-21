
import './App.css';
import HomePage from './pages/HomePage';
import { Outlet,createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup'

import { UserProvider } from './userContext'; 
import Saves from './pages/Saves';
const Layout =()=>{
  return (
    <div className="app flex jcc aic h-100">
      {/* <Navbar/> */}
      <Outlet/>
      {/* <Footer/> */}

    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",

    
    element:   
    <UserProvider>
  <Layout/>
  </UserProvider>,
    
    
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/auth/login",
        element:<Login/>
      },
      {
        path:"/auth/signup",
        element:<Signup/>
      },
      {
        path:"/articles/saved",
        element:<Saves/>
      },

    ]
  },
 
])

function App() {
  return (
    <div >
     < RouterProvider router={router}/>
    </div>
  );
}

export default App;
