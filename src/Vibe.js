import React from 'react';

export class Vibe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mood: "vibing"
        };
    }
    render(){
        return <h1> I am {this.state.mood} </h1>;
    }
}