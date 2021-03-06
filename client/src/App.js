import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from './pages/hello.jsx';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import Home from './pages/Home.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="home" element={<Home />} />

        <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
