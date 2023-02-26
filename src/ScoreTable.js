import React from "react" ;
import allCountryScores from "./scores";

const ScoresTable =(props)=>{
return(<div>
    <h1>High score per country</h1>
    {props.allCountryScores.map((item,i) =>(
         <table Key ={i}>
        <thead>
      <tr><th>High Score :{item.name}</th></tr>
        </thead>
        <tbody>
            <tr><td></td></tr>
        </tbody>
    </table>
    )

    )};
</div>
  
)

};
export  default ScoresTable;