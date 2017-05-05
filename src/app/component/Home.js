import React from 'react';

export class Home extends React.Component{
    constructor(props){
        super();
        this.state ={
            age: props.initialAge,
            status:0
    };
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age -3

        });
        console.log(this.age);
    }
    render(){ 
        //console.log(this.props);
        return(
            <div> <p> In a New component</p>
                {"Hello"}
                <p> Your Name is {this.props.name}, your age is{this.state.age} </p>
                <p> user object:Name:{this.props.user.name} </p>
                <p> status: {this.state.status}</p>
                <div>
                        <h4> Hobbies </h4>
                        <ul>
                            {this.props.user.hobbies.map((hobby,i) => <li key ={i}>{hobby}</li>)}
                            </ul>
                    </div>
                    <hr/>
                    {this.props.children}
                    <hr/>
                    <button onClick={() => this.onMakeOlder()}> Make me Younger </button>

             </div>
            
        );
    }
}

// Home.propTypes ={
//     name:React.PropTypes.string,
//     InitialAge:React.PropTypes.number,
//     user:React.PropTypes.object,
//     children: React.PropTypes.children
// };