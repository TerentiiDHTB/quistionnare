import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";
import Register from "./components/Register/Register";
import Profile from "./components/UserProfileComponents/pages/Profile/Profile";
import Surveys from "./components/UserProfileComponents/pages/Surveys/Surveys";
import CreateSurvey from "./components/UserProfileComponents/pages/CreateSurveys/CreateSurveys";
import LoginInterviewer from "./components/InterviewerLogin/InterviewerLogin";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/loginint" element={<LoginInterviewer/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<Navigate to={"/profile/main"}/>}/>
                <Route path="/profile/main" element={<Profile/>}/>
                <Route path="/profile/surveys" element={<Surveys/>}/>
                <Route path="/profile/surveys/create" element={<CreateSurvey/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
