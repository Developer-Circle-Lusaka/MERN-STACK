import React from 'react'

export const InputField=(props)=>(
    <div className="form-group">
    <label htmlFor={props.id}>{props.label}</label>
    <input value={props.value} onChange={props.whenDataChanges} type="text" id={props.id} className="form-control" placeholder={props.placeholder}/>
 </div>
)

export const Button=(props)=>(
<button type="submit" className="btn btn-primary">{props.name}</button>
)