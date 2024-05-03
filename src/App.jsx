import Login from './Components/login/Login';
import Register from './Components/registar/Register'
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </>

    </div>
  );
}

export default App;
