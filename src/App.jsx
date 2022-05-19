import logo from './logo.svg';
import * as React from 'react'
import './App.css';
import LandingPage from './Views/LandingPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenerateInvoice from './Views/GenerateInvoice';
import { useState, createContext } from "react";

export const InvoiceContext = createContext()
function App() {
  const [invoices, setInvoices] = useState([{ title: "null", qty: 0, rate: 0, total: 0 }]);
  const [history, sethistory] = useState([{ title: "null", qty: 0, rate: 0, total: 0 }]);
  const [names, setNames] = useState(["old", "new"])
  // const []
  React.useEffect(() => {
    var arr = []
    var temp = JSON.parse(window.localStorage.getItem("invhistory"));
    const oldname = temp.name
    const total = temp.subtotal
    delete temp.name
    delete temp.subtotal
    for (var i in temp) {
      arr.push(temp[i])
    }
    setNames([oldname, "new"])
    sethistory(arr)
    // console.log(arr)
  }, [])
  return (
    <InvoiceContext.Provider value={[invoices, setInvoices, history, names, setNames]}>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>} />
          <Route path="/generate" element={<GenerateInvoice></GenerateInvoice>} />
        </Routes>
      </BrowserRouter>
    </InvoiceContext.Provider>
  );
}

export default App;
