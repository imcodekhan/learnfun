import React from 'react';
// import ReactDOM from 'react-dom';


const Card = () => {

    return (
        <div className='tc grow bg-light-green br3  ma2 dib bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/1?size=200x200`} />
            <img alt='robots' src={`https://robohash.org/1?size=200x200`} />
            <img alt='robots' src={`https://robohash.org/1?size=200x200`} />
            <img alt='robots' src={`https://robohash.org/1?size=200x200`} />
            <img alt='robots' src={`https://robohash.org/1?size=200x200`} />
            <div style={{overflowX:'overflow'}}>
            </div>
        </div>
    );
}

export default Card;
