import React from 'react'

export const NabvBarComponent=(props)=>(
 <ul className="nav">
       <li className="nav-item">
           <a className="nav-link active" href="#">Active</a>
       </li>
     <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
     </li>
    <li className="nav-item">
       <a className="nav-link" href="#">Link</a>
    </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
)
