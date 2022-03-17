import './App.css';
import React from 'react';
import styled from 'styled-components';
// import { observable } from 'mobx';
// import { observer } from 'mobx-react';

import MainApp from './Component/MainApp'
import Sidebar from './Component/Sidebar'

// import logo from './logo.svg';
// import { render } from "react-dom"
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import { Link} from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <LeftDiv>
        <Sidebar/>
      </LeftDiv>
      <MainApp/>
    </div>
    
  );
}

export default App;


const LeftDiv = styled.div`
  left:0;
  width: 500px;
  border: 1px solid black;
  min-height: 100vh;
`;