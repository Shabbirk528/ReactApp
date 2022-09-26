import React from 'react';
import JSONDATA from './object.json';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// import { useDispatch } from 'react-redux';
import './App.css';


function App() {
  const [searchTerm, setsearchTerm] = useState('')
  
  return (
      <div>
        
          <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
          <p><input type="text" placeholder="Search for ads.." onChange = {(event) => {setsearchTerm(event.target.value);}} />

          
          <table>
        

          
          
          {JSONDATA.filter((val) =>
          
          {
            if(searchTerm === "") {
              return val.id
          
            }
            else if (val.id.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val.id 
            
            }
            {
            if(searchTerm === "") {
              return val.title
          
            }
            else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val.title 
            
            }
          }
            {
              if(searchTerm === "") {
                return val.url
              }
              else if (val.url.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val.url 
              
              }
  
            
            }
            {
              if(searchTerm === "") {
                return val.text
              }
              else if (val.text.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val.text 
              
              }
  
            
            }
            {
            if(searchTerm === "") {
              return val.headline
            }
            else if (val.headline.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val.headline
            
            }

          
          }

          
          }
          
          ).map((val, key) => {
            return( <div key={key}>

          <th>id</th>
          <th>company</th>
          <th>url</th>
          <th>text</th>
          <th>headline</th>
              
              <tr>
                <td><p>{val.id}</p></td>
                <td><p>{val.title}</p></td>
                <td> <p> {val.url} </p></td>
                <td> <p>{val.text} </p></td>
                <td> <p>{val.headline} </p></td>
               
                </tr>
                  </div>
            );
          })}
 
</table>
          </p>
       
          </header>
        
          </div>
          
        </div>

  );
}
// dispatch(getUsers())

export default App;
