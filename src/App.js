import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Useref from './Useref';
// import UseReducer from './UseReducer';`


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Useref/> */}
      {/* <UseReducer/> */}
    </div>
  );
}

export default App;
