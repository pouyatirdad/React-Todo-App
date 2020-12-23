import React, {useContext, useState} from "react";
import TodoContext from "../../Context/Todocontext";
import EDit from "./EditTodo";
import {Link} from "react-router-dom";
import TodoApi from "../../Api/TodoApi";

function Add(props) {
    const [edit, setedit] = useState(false);
    const context = useContext(TodoContext);
    const name=context.data.map(i=>i.name)
    let editer = (e) => {
        TodoApi.put(`/user/${name[0]}/todo/${props.item.key}.json`, {done: props.item.done, text: e})
            .then(response => context.dispatch({type: 'edittodo', val: {key: props.item.key, text: e}}))
            .catch(err => console.log(err))
        setedit(false)
    }
    let doner = () => {
        TodoApi.put(`/user/${name[0]}/todo/${props.item.key}.json`, {done: !props.item.done, text: props.text})
            .then(response => context.dispatch({type: 'donetodo', val: {key: props.item.key}}))
            .catch(err => console.log(err))
    }
    let deleter = () => {
        TodoApi.delete(`/user/${name[0]}/todo/${props.item.key}.json`, {key: props.item.key})
            .then(response => context.dispatch({type: 'deletetodo', val: {key: props.item.key}}))
            .catch(err => console.log(err))
    }
    return (
        <div>
            {
                edit
                    ? <EDit text={props.text} edit={editer}/>
                    :
                    <div className='container d-flex align-items-center justify-content-between border border-3 rounded-pill m-1'>
                        <div>
                            <Link to={`/todo/${props.item.key}`}>{props.text}</Link>
                        </div>
                        <div className='p-3'>
                            <button className={`btn btn-sm m-1 ${!props.item.done ? 'btn-success' : 'btn-warning'}`} onClick={doner}>{!props.item.done ? 'done' : 'undone'}</button>
                            <button className='btn btn-sm m-1 btn-danger' onClick={deleter}>delete</button>
                            <button className='btn btn-sm m-1 btn-info' onClick={() => setedit(true)}>edit</button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Add;