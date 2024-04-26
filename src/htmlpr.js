import React from "react" ;
 const img="https://picsum.photos/200/300";
 const img1="https://picsum.photos/280/300";
 const img2="https://picsum.photos/250/300";
 const link="http://portfoliotarunsagwal.rf.gd";
function Create (){
    return(
        <>
            <h1>html</h1>
            <img src={img1} />
            <img src={img2} />
            <a href={link} >
            <img src={img} />
            </a>
        </>
    )
}
export default Create;