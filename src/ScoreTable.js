import React from "react" ;
import "./App.css";

const ScoresTable = (props) => {
return(
<div className="main-text">
    <h2>High score per country</h2>
    {props.allCountryScores.map((item,id) =>(
        <div className="container">
         <table  className="tbl" Key = {id}>
        <thead>
      <tr >
        <th>High scores : {item.name} </th>
    </tr>
        </thead>
        <tbody className="tbody">
            {item.scores.map(element=>
            <tr>
                <td>{element.n}</td>
                <td>{element.s}</td>
           </tr>
           )}
    </tbody>
    </table>
    </div>
    ))}
</div>
  
);
}
export  default ScoresTable;