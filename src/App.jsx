import logo from './logo.svg';
import './App.css';
import LandingPage from './Views/LandingPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenerateInvoice from './Views/GenerateInvoice';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<LandingPage></LandingPage>} />
      <Route path="/generate" element={<GenerateInvoice></GenerateInvoice>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
