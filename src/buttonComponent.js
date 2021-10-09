import React from 'react';

function Buttoncomponent(props){
    return(
        <button id={props.id}>
          <img src={props.imagesrc} alt={''}/>
        </button>
    );
}

export default Buttoncomponent;