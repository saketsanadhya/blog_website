import {Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route path="signup" element={<h1>HIII signup</h1>} />
                <Route path="signin" element={<h1>HIII signin </h1>} />
            </Route>
        </Routes>
       
    )
}

export default App;