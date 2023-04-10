import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginComponent';
import LogoutButton from './components/LogoutComponent';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './View/homepageComponent';
import ErrorComponent from './components/ErrorComponent';
import NavBarComponent from './components/NavBarComponent';
import FeedPage from './View/FeedPageComponent';
import UploadPage from './View/UploadPageComponent';
import ProfilePage from './View/ProfilePageComponent';
function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/feed' element={<FeedPage />} />
        <Route path='/upload' element={<UploadPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/search' element={<HomePage />} />
        <Route path='/testing' element={<div>testing Page</div>} />

        {/* Incase the user types a URL that does not exsist return error component */}
        <Route path='*' element={<ErrorComponent />} />
      </Routes>
    </BrowserRouter>

    /* <LoginButton />
    <LogoutButton /> */

  );
}

export default App;
