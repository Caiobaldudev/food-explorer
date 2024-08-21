import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { ShowDish } from "../pages/ShowDish";
import { CreateDish } from "../pages/CreateDish";
import { UpdateDish } from "../pages/UpdateDish";
import { useAuth } from "../hooks/auth";


export function AdminRoutes(){

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/dish" element={<CreateDish/>}/>
      <Route path="/dish/:id" element={<ShowDish/>}/>
      <Route path="/update/:id" element={<UpdateDish/>}/> */}
    </Routes>
  )

}