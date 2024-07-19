import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';

// On lines 1-4, files and components are imported from their directories.


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <LoginForm />
      </header>
    </div>
  );
}

export default App;

// On lines 9-20, a React component is declared. The component is called "App" and it returns JSX. The container of "App" is located 
// where the "div" is. The "Navbar" component is then created inside the "App". The "LoginForm" component is created inside the header.
// The component known as "App" is then exported.

 