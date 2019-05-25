import React, { Component } from 'react';
import Hori from './horizontal_comp';
import Vert from './verticle_comp';
import Content from './content';
import './App.css';
// import xyz from './scroll';



class App extends Component {
    constructor() {
        super()
        this.state = {
            hori: '',
            vert: ''
        }
    }
    
 

    onXButtonClick = (event) => {
        if (this.state.vert === '') {
            return (
                this.setState({
                    hori: event.target.value,
                    vert: 'unit 1',
                })

            );
        } else {
            return (
                this.setState({
                    hori: event.target.value,
                })
            );
        }

    }


    onYButtonClick = (event) => {
        if (this.state.hori === '') {
            return (
                this.setState({
                    hori: 'Theory',
                    vert: event.target.value,
                })
            );
        } else {
            return (
                this.setState({
                    vert: event.target.value,
                })
            );
        }
    }



















    render() {

        return (
            <div>
                <div>
                    <Hori click={this.onXButtonClick} />
                </div>
                <div class='row'>
                    <div class='col-3'>
                        <Vert click={this.onYButtonClick} />

                    </div>
                    
                        <div class='col-9'>

                            <Content data={this.state} />


                        </div>
                    

                </div>

            </div>


        );
    }




}


export default App;