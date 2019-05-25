import React,{Component} from 'react';
import './image';
import {data} from './database';
// import Card from './image';
import GlowUp from './glow_up';
class Content extends Component{

    value(){
        // for (let index = 0; index < data.length; index++) {
        //     const element = data[index];
        //     // if(element.vert === this.props.data.hori){console.log(element)}
        //     // else{console.log("not found")}
         
        // }
        for(let i = 0;i<data.length;i++){
            if(data[i].hori === this.props.data.hori && data[i].vert === this.props.data.vert){
                // console.log(this.props.data.hori)
                // console.log(this.props.data.vert)
                return data[i].content
            }
            
        }
        
        
        
    }




    render(){
        return(
            <div>
                <GlowUp><h1>content</h1></GlowUp>
                
                <p>this is content page</p>
                <p>{this.value()}</p>
               
               
            </div>
        );
    }
}

export default Content;
