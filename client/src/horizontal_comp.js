import React, { Component } from 'react';
import './horizontal_comp.css'
import Tab from './tab';

class Hori extends Component {


        


    render() {
        return (
            <div className="bg-blue pa2 ">
                
                <div class='container'>
                <div>
                <Tab className='' name={"Theory"} click={this.props.click} />
                </div>
                <div>
                <Tab className='' name={"Questions"} click={this.props.click} />
                </div>
                <div>
                <Tab className='' name={"Key points"} click={this.props.click} />
                </div>
                <div>
                <Tab className='' name={"Discussion"} click={this.props.click} />
                </div>        
                </div>



            </div>
        );
    }
}
export default Hori;