import React, {useContext, useState} from "react";
import TodoContext from "../../Context/Todocontext";
import TodoApi from "../../Api/TodoApi";

function FormAdd() {
    const[text,settext]=useState('');
    const context=useContext(TodoContext);
    const name=context.data.map(i=>i.name)
    let sbm=(e)=>{
        e.preventDefault();
        let todo={done:false,text}
        TodoApi.post(`/user/${name[0]}/todo.json`,todo)
            .then(response=>context.dispatch({type:'addtodo',val:{todo:{...todo,key:response.data.name}}}))
            .catch(err=>console.log(err))
        settext('');
    }
    let chng=(e)=>{
        settext(e.target.value);
    }
    return(
        <form className='container d-flex  justify-content-center ' onSubmit={sbm}>
            <input className='btn-outline-primary' value={text} onChange={chng} placeholder="Write Your Todos" />
            <button className='btn-info' >Add</button>
        </form>
    )
}
export default FormAdd;