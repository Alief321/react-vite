import './App.css';
import LandingPage from './layouts/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main';

const AppContent: React.FC = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Main>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
