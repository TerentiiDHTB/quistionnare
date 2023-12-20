import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";
import Register from "./components/Register/Register";
import Profile from "./components/UserProfileComponents/pages/Profile/Profile";
import Surveys from "./components/UserProfileComponents/pages/Surveys/Surveys";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile/main" element={<Profile/>}/>
                <Route path="/profile/surveys" element={<Surveys/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
