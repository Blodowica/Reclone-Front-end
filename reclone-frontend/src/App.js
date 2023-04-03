import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginComponent';
import LogoutButton from './components/LogoutComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main className='column'>
          <h1>Login Form</h1>
          <LoginButton />
          <LogoutButton />
        </main>
      </header>
    </div>
  );
}

export default App;
