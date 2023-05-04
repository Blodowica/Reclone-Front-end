import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './View/homepageComponent';
import ErrorComponent from './components/ErrorComponent';
import NavBarComponent from './components/NavBarComponent';
import UploadPage from './View/UploadPageComponent';
import ProfilePage from './View/ProfilePageComponent';
import SideBarComponent from './components/SideBarComponent';
import SearchPage from './View/SearchPageComponent';
import { Col, Container, Row } from 'react-bootstrap';
import ExplorePage from './View/ExplorePageComponent';
import LoginPageComponent from './View/LoginPageComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPageComponent />} />
        <Route
          path='/*'
          element={
            <div className="Wrapper">
              <Container fluid>
                <Row>
                  <Col xs={2} md={3} sm={2} lg={2} xl={2} className="sticky-top vh-100 p-0 overflow-hidden">
                    <SideBarComponent />
                  </Col>
                  <Col xs={10} md={9} sm={10} lg={10} xl={10}>
                    <Routes>
                      <Route path='/home' element={<HomePage />} />
                      <Route path='/Explore' element={<ExplorePage />} />
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
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
