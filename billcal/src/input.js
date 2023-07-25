import React from 'react';
export default class input extends React.Component{
    constructor(props){
        super(props)
        this.state={
            text: ""
        }
    }
    printvalue(){
        const{text}=this.state;
    }
    doSomething(){
        const[text]=this.state;
    }
    render(){
        return(
            <>
            <input type="text" onChange={this.printvalue()}></input>
            <button onClick={this.doSomething()}>Click Me</button>
            </>
        )
    }
}