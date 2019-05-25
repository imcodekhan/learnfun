import React from 'react';
import './tab.css'

const Tab = ({name,click})=>{
    return(
        <div>
            <input className='bg-light-green' type="button" value={name}
            onClick={click}
            />

        </div>
    );
}

export default Tab;