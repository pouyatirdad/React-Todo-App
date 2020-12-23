import React, {useState} from "react";
function EDit(props) {
    const[text,settext]=useState(props.text)
    let chng=(e)=>{
        settext(e.target.value)
    }
    return(
        <div>
            <input value={text} onChange={chng} />
            <button onClick={()=>props.edit(text)}>Editing</button>
        </div>
    )
}
export default EDit;