import React, {useContext, useEffect, useState} from "react";
import TodoApi from "../Api/TodoApi";
import List from "../Components/Todo/TodoList";
import FormAdd from "../Components/Todo/Formaddtodo";
import TodoContext from "../Context/Todocontext";

function Home() {
    const [load, setload] = useState(false)
    const context = useContext(TodoContext)
    const name = context.data.map(i => i.name)
    let intodo = (data) => {
        setload(false)
        let todo = Object.entries(data).map(([key, value]) => {
            return {
                ...value,
                key
            }
        })
        // console.log(todo)
        context.dispatch({type: 'intodo', val: {todo}})
    }
    useEffect(() => {
        setload(true)
        TodoApi.get(`/user/${name[0]}/todo.json`)
            .then(response =>intodo(response.data) )
            .then(err => console.log(err))
    }, [])

    return (
        <div>
            {
                load
                    ? <div className='d-flex justify-content-center'>
                    <span className='spinner spinner-grow '/> <div className='d-flex flex-column align-items-center'>
                        <FormAdd/>
                        <List/>
                    </div>
                    </div>
                    : <div className='d-flex flex-column align-items-center'>
                        <FormAdd/>
                        <List/>
                    </div>
            }
        </div>
    )
}

export default Home;