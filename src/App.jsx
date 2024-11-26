import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/auth/selectors';

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/contacts" /> : <RegisterPage />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/contacts" /> : <LoginPage />}
        />
        <Route
          path="/contacts"
          element={isLoggedIn ? <ContactsPage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
