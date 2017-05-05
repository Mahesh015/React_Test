import React from 'react';
import ReactDom from 'react-dom';

import { Header } from "./component/Header";
import { Home } from "./component/Home";
import { TNew } from "./component/Test";

class App extends React.Component {
    render() {
        var user = {
            name:"Mahesh",
            hobbies:["Sports","Driving"]
        }
        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        }
        return (
        <div>
            <div> Hello Worldfffff New 666666!!!

                <h1> Header </h1>
                <h2 style={myStyle}>  Contents </h2>
                <h3> {5 + 6} </h3>
            </div>
            <div>
                <Header name={"viresh"} />
            </div>
            <div>
                <Home name ={"Mahi"} initialAge = {27} user={user}>
                    <div>This is a paragraph</div>
                </Home>

            </div>

            <div>
                <h1> Started </h1>
                <TNew name ={"ReactTest"} />
            </div>
        </div>
        );
    }
}

//export default app;
ReactDom.render(
    <App />,
    document.getElementById('app')
)

