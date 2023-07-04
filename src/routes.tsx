import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';

// Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default AppRoutes