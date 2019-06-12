import React from 'react'

let Form = (props) =>{
    return(
        <div>
            
                <label>City Search:</label>
                <input id = "search" />
                <button id = "in" onClick = {props.search}> submit</button>
            
        </div>
    )
}

export default Form