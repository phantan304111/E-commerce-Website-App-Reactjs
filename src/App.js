import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import RoutesData from "./Routes/Routes";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import HomePage from "./HomePage/HomePage";
function App() {
  //xay dung app voi 1 thanh phan Nav va 1 list route voiws url khai bao trong RoutesData va element chua component tuong ung
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        {RoutesData.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
   
    </div>
  );
}

export default App;
