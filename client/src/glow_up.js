import React from 'react';

const GlowUp =(props) =>  {
    return(
        <div style={{backgroundColor:'yellow'}}>
        {props.children}
    </div>
    );
}

export default GlowUp;