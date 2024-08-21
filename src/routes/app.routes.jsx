import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../components/Header/Header";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
