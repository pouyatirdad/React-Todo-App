import React, {useEffect, useState} from "react";
import {useParams,useHistory} from "react-router-dom";
import TodoApi from "../Api/TodoApi";

function TodoDetail(props) {
    const param = useParams();
    const history=useHistory();
    const [todo, settodo] = useState({});
    useEffect(()=>{
        TodoApi.get(`/todo/${param.id}.json`)
            .then(response =>{
                response.data ? settodo({...response.data,key:param.id}) : history.push('/eror')
            })
            .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <h3>Todo Detail</h3>
            <p>{todo.text}</p>
            <span>{todo.done ? 'done' :'undone'}</span>
        </div>
    )
}

export default TodoDetail;