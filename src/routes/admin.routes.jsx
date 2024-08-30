import { Route, Routes } from "react-router-dom";

import {Home} from "../pages/Home/Home";
import { CreateDish } from "../pages/CreateDishes/CreateDishes";
import { ShowDish } from "../pages/ShowDish/ShowDish";
import { EditDish } from "../pages/UpdateDish/UpdateDish";


export function AdminRoutes(){

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="dishes" element={<CreateDish/>}/>
      <Route path="dishes/:id" element={<ShowDish/>}/>
      <Route path="/dishes/edit/:id" element={<EditDish />} />
    </Routes>
  )

}