import React from 'react';
import arrowleft from './assets/arrowleft.svg';
import arrowright from './assets/arrowright.svg';
import Papers from './papers.js';
import './App.css';
import Buttoncomponent from './buttonComponent.js';

function App() {
  return (
    <React.Fragment>
      <Buttoncomponent id="prev-btn" imagesrc={arrowleft}></Buttoncomponent>
      <div id="book" className="book">
          <Papers/>
      </div>
      <Buttoncomponent id="next-btn" imagesrc={arrowright}></Buttoncomponent>
    </React.Fragment>
  );
}

export default App;
