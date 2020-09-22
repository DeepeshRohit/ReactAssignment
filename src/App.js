import React , {useState} from 'react';
import './App.css';


const App = ()=> {
  let time= new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  var  dayOfWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

  const [Currtime , setCurrtime] = useState(time);
  const updatetime=() =>{
     time= new Date().toLocaleTimeString();
     setCurrtime(time);
  }
  setInterval(updatetime, 1000)
  return (
      <div id ="Clock">
      <p id = "time">{time}</p>
  <p id="date">{dayOfWeek[new Date().getDay()]},{date}</p>
    
      </div>
    
  );
}

export default App;
