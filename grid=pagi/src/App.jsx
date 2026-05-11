import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserDetails from "./UserDetails";
import Users from "./Users";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users/>} />
        <Route path="/user/:id" element={<UserDetails/>} />
      </Routes>
    </BrowserRouter>
  )
}








