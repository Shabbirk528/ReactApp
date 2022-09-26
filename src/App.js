import React from 'react';
import JSONDATA from './object.json';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import './App.css';


function App() {
  const [searchTerm, setsearchTerm] = useState('')
  
  return (
      <div>
          <p><input type="text" placeholder="Search for financial.." onChange = {(event) => {setsearchTerm(event.target.value);}} />
          {JSONDATA.filter((val) =>
          {
            if(searchTerm === "") {
              return val.title
            }
            else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val.title
            }
          }).map((val, key) => {
            return( <div key={key}>
              <p>{val.title} </p>
                  </div>
            );
          })}
          </p>
        </div>

  );
}
// dispatch(getUsers())

export default App;
