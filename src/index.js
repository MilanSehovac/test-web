import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from "./components/Header";
import About from './pages/About';
import Projects from './pages/Projects';
import ErrorPage from './pages/ErrorPage';
import NewProject from './components/NewProject'
import EditProject from './components/EditProject'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


ReactDOM.render(
    <React.StrictMode>
      <Router>   
        <Header/>
         <Routes>
           <Route path="/" element={<App/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/projects" element={<Projects/>}>
             <Route path="NewProject" element={<NewProject/>}/>
             <Route path="EditProject" element={<EditProject/>}/>
             </Route>
           <Route path="/*" element={<ErrorPage/>}/>
         </Routes>
      </Router>
  </React.StrictMode>,
    document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
