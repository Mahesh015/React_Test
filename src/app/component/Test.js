import React from 'react';

export class TNew extends React.Component{
    constructor(){
        super();
        this.state ={
            name: "Many things"
        }
        this.mouseOver= this.mouseOver.bind(this);
    }

    mouseOver(){
        this.setState({
            name: "Almost all things"
        });
    }

    render(){
        return(
            <div>
             
                <h1 onClick ={this.mouseOver}> woowh finally i understood {this.state.name} </h1>
            </div>
        );
    }
}
