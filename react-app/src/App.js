import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {get} from 'axios'
import {NabvBarComponent} from  './components/navbar'
import AddDeveloperForm from './components/developer-data-entry/AddDeveloperForm'
import {DevelopersList} from  './components/developer-data-display/DevelopersComponent'
const URL_SERVER= 'http://localhost:3100/devs'
export default class AppComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            developers:[]
        }
    }


   whenDataUpdatedReload(){
    get(URL_SERVER).then(response=>{
        const developers=response.data
        console.log(developers)
        this.setState(
            {
                developers:developers
            }
        )

    })

   } 
 componentDidMount(){
     get(URL_SERVER).then(response=>{
         const developers=response.data
         console.log(developers)
         this.setState(
             {
                 developers:developers
             }
         )

     })

 }   

render(){
    return(
        <div>
         <NabvBarComponent/>
         <div className="container">
           <div className="row">
            <div className="col-lg-6">
                <AddDeveloperForm whenDataUpdatedReload={this.whenDataUpdatedReload.bind(this)}/>
            </div>

            <div className="col-lg-6">
            <DevelopersList developers={this.state.developers}/>

            </div>

           </div>

         </div>
        </div>
    )
}

}
