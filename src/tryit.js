import React from "react";


const name = "Tryit";
const lname = "doit";
const time = new Date().toLocaleTimeString();
function Tryit(){
    return(
        <>
            <h1>web side {time}</h1>
            <h1>web side {`${name} ${lname}` }</h1>
            <p>video Netflix{3+2}</p>
            <ul>
                <li><a>its okay or not okay</a></li>
                <li><a>my gf is aline</a></li>
                <li><a>extra odinary</a></li>
                <li><a>boys flower</a></li>
            </ul>

        </>

    )
}



export default Tryit; 