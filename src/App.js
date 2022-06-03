import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/home/home';
import './App.css';
import Projects from './components/projects/projects';
import Instruction from './components/instruction/instruction';
import Documents from './components/documents/documents';
import Stats from './components/stats/stats';
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}>
          </Route>
          <Route path='/login' element={<Login/>}>
          </Route>
          <Route path='/home' element={<Home/>}>
              <Route path="/home/projects" element={<Projects/>}/>
              <Route path="/home/stats" element={<Stats/>}/>
              <Route path="/home/documents" element={<Documents/>}/>
              <Route path="/home/instruction" element={<Instruction/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
