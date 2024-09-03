import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { ShowDish } from "../pages/ShowDish/ShowDish";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dishes/:id" element={<ShowDish />} />
    </Routes>
  );
};

export default AppRouter;
