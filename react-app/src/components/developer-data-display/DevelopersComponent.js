import React from 'react'
 
export const  DevelopersList=(props)=>{
    const developers=props.developers

     return <ul className="list-group">
               { 
                developers.map(developer=>(
                  <li className="list-group-item">
                      <h3>{developer.name}</h3>
                      <h6>{developer.age}</h6>
                     </li>
                ))
                    }  
   </ul>
}