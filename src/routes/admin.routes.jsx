import { Route, Routes } from "react-router-dom";

import {Home} from "../pages/Home/Home";
import { CreateDish } from "../pages/CreateDishes/CreateDishes";


export function AdminRoutes(){

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="dishes" element={<CreateDish/>}/>
    </Routes>
  )

}