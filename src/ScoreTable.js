import React from "react" ;


const ScoresTable = (props) => {
return(
<div>
    <h2>High score per country</h2>
    {props.allCountryScores.map((item,id) =>(
         <table Key = {id}>
        <thead>
      <tr>
        <th>High scores : {item.name} </th>
    </tr>
        </thead>
        <tbody>
            {item.scores.map(element =>
            <tr>
                <td>{element.n}</td>
                <td>{element.s}</td>
           </tr>
           )
    </tbody>
    </table>
    ))}
</div>
  
);
}
export  default ScoresTable;