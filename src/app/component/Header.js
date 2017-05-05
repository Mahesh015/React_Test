import React from 'react';

export class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            name:"viresh"
        }
        this.handleCLick = this.handleCLick.bind(this);
    }

   handleCLick() {
       var one = "mahesh"
        this.setState({
            name: one
        })
    }

    render(){
        return(
            <div>
                <h1 onClick={this.handleCLick}>Welcome {this.state.name} </h1>
            </div>
        );
    }
}