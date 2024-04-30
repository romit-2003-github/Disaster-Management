import './App.css';
import HomePage from './screens/HomePage';
import { Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import AdminLogin from './screens/AdminLogin';
import UserPage from './screens/UserPage';
import AdminSignUp from './screens/AdminSignUp';
import AdminPage from './screens/AdminPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/userDashboard" element={<UserPage />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminSignUp" element={<AdminSignUp />} />
        <Route path="/adminDashboard" element={<AdminPage />} />
        <Route path="*" element={<div>The Requested URL is Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
