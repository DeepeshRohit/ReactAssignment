import React  from 'react';
import './App.css';

const App = () =>
{
  const employee = [
  { name: "Charlie   "  ,job: "Janitor" },
  { name: "Mac    "  ,job: "  Bouncer" },
  { name: "Dee   "  , job: "  Aspiring Actoress" },
  { name: "Dennis "  , job: "  Bartender" }
]
  const renderEmployee = (employee,index) =>{
    return(
    <tr key = "index">
      <td>{employee.name}</td>
      <td>{employee.job}</td>
    </tr>
    )
  }
  return (
    <div className="App">
   <table >
  <thead>
    <tr>
      <th>Name  </th>
      <th>Job   </th>
    </tr>
  </thead>
  <tbody>
   
   {employee.map(renderEmployee)}
 
  </tbody>
</table>
    </div>
  );
}


export default App;
