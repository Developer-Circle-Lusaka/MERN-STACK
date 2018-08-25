import React,{Component} from 'react'
import {InputField,Button} from './InputComponents'
import {post} from  'axios'
const URL_SERVER= 'http://localhost:3100/insert'

export default class AddDeveloperComponentForm extends Component{

    constructor(props){
        super(props)
        this.state={
            name:null,
            age:null,
            languagues:['html','python']
        }
        this.whenNameDataChanges=this.whenNameDataChanges.bind(this)
        this.whenAgeDataChanges=this.whenAgeDataChanges.bind(this)
        this.sendDataWhenSubmitted=this.sendDataWhenSubmitted.bind(this)
    }

 whenNameDataChanges(e){
     console.log(e.target.value)
     const value=e.target.value;
     this.setState({
         name:value
     })
    }
 whenAgeDataChanges(e){
    console.log(e.target.value)
    const value=e.target.value;
    this.setState({
        age:value
    }) 
     
 } 
 
 sendDataWhenSubmitted(e){
     e.preventDefault()
     const {age,name,languagues}=this.state
     
     const formData={name:name,age,languagues:languagues}
     post(URL_SERVER,formData).then(response=>{
         console.log(response.data)
         this.props.whenDataUpdatedReload()

     }).catch(err=>{
         console.log(err)
     })

 }
render(){
    return(
        <div>
            <h1> {this.state.name} {this.state.age} </h1>
          <form onSubmit={this.sendDataWhenSubmitted}>
              {this.state.name?<span></span>:<span>Name is empty </span>}
              <InputField value={this.state.name} placeholder={'Enter Developer Name'} label={'Name'} id={'name'} whenDataChanges={this.whenNameDataChanges}/>
              {this.state.age?<span></span>:<span>Age is empty </span>}
              <InputField value={this.state.age} placeholder={'Enter Developer Age'} label={'Age'} id={'age'} whenDataChanges={this.whenAgeDataChanges}/>               
             <Button name={'Submit'} type='submit'/>
         </form>      
        </div>
    )
}

}
