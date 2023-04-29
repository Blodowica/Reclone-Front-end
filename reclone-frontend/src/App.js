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
import SideBarComponent from './components/SideBarComponent';
import SearchPage from './View/SearchPageComponent';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="Wrapper">
        <Container fluid>
          <Row>
            <Col xs={12} lg={3} className="sticky-top vh-100 p-0 overflow-auto">
              <SideBarComponent />
            </Col>
            <Col xs={12} lg={9}>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/feed' element={<FeedPage />} />
                <Route path='/upload' element={<UploadPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/testing' element={<div>testing Page</div>} />
                {/* In case the user types a URL that does not exist, return the error component */}
                <Route path='*' element={<ErrorComponent />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
