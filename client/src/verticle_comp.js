import React, { Component } from 'react';
// import './verticle_comp.css';
import Tab from './tab';

class Vert extends Component {


    onButtonClick = (event) => {
        return (
            console.log(event.target.value)
        );
    }


    render() {
        return (
            <div>
                <Tab name={"unit 1"} click={this.props.click} />
                <Tab name={"unit 2"} click={this.props.click} />
                <Tab name={"unit 3"} click={this.props.click} />
                <Tab name={"unit 4"} click={this.props.click} />
                <Tab name={"unit 5"} click={this.props.click} />
                <Tab name={"unit 6"} click={this.props.click} />
            </div>
        
    
        );
    }
}
export default Vert;