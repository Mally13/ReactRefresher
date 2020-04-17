import React,{Component} from 'react'; //since its a class we import react

class Container1 extends Component{
    //Initializing state
    constructor(props){
        super(props)
        this.state={
            stateprop1:"Our initial state"
        }
    }
    render(){
        return(
            <div>
                {this.props.nickname}<br/>
                {this.state.stateprop1}
            </div>
        )}
}
export default Container1;