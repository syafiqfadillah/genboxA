import {useState, useEffect} from 'react';

import FormPost from '../Components/FormPost.js';
import FormID from '../Components/FormID.js';
import FormDel from '../Components/FormDel.js';
import FormEdit from '../Components/FormEdit.js';
import Output from '../Components/Output.js';
import OutputALL from "../Components/OutputALL.js"
import Methods from '../Components/Methods.js';

import '../Assets/CSS/App.css';
import '../Assets/CSS/FormPost.css';
import '../Assets/CSS/FormID.css';
import '../Assets/CSS/FormEdit.css';
import '../Assets/CSS/Output.css';
import '../Assets/CSS/OutputALL.css';
import '../Assets/CSS/Methods.css';

function App() {
  const url = "https://book0101.herokuapp.com/v1/book"

  return (
    <div className="App">
        <div className="Wrapper">
          <Methods />
          <div className="Wrapper2">
            <FormPost url={url}/>
            <FormEdit url={url}/>
            <FormDel url={url}/>
            <FormID url={url}/>
          </div>
          <Output url={url}/>
        </div>
        <div className="Wrapper1">
          <OutputALL url={url}/>
        </div>
    </div>
  );
}

export default App;
