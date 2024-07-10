import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Modal from "./Modal";

export default function Rota(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/dashboard" element={<Home/>} />
                <Route path="/modal" element={<Modal/>} />
                <Route path="*" element={<h1>404</h1>}/>
            </Routes>
        </Router>
    )
}