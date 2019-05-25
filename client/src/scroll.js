import React from 'react';


const xyz = (props) => {
    return(
        <div style={{overflowY:'scroll',border:'5px light-black solid', height:'500px',}}>
            {props.children}
        </div>
    );
}

export default xyz;