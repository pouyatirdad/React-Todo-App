import React, {useContext, useEffect, useState} from "react";
import TodoContext from "../Context/Todocontext";
import TodoApi from "../Api/TodoApi";


function Login(props) {
    const [name, setname] = useState('')
    const [pass, setpass] = useState('')
    const [repass, setrepass] = useState('')
    const context = useContext(TodoContext)

    let namer = (e) => {
        setname(e.target.value)
    }
    let passer = (e) => {
        setpass(e.target.value)
    }
    let repasser = (e) => {
        setrepass(e.target.value)
    }
    let sbm = (e) => {
        e.preventDefault()
        let data = {name: name, pass: pass}
        if (pass === repass) {
            TodoApi.put(`/user/${name}/login.json`, data)
                .then(response => context.dispatch({type: 'register', val: {data: {...data, key: response.data.name}}}))
                .catch(err => console.log(err))
            props.dologin()
        } else {
            window.alert('passwords isnt match')
        }
    }
    useEffect(()=>{
        TodoApi.get(`/user/${name}/todo.json`)
            .then(response => signtodo(response.data))
            .catch(err=>console.log(err))
    },[])
    let signtodo = (dataa) => {
        let data = Object.entries(dataa).map(([key, value]) => {
            return {
                ...value,
                key
            }
        })
        // console.log(data)
        context.dispatch({type: 'insigntodo', val: {data}})
    }
    return (
        <form className='container d-flex flex-column align-items-center' onSubmit={sbm}>
            <p>Name :</p><input type="text" onChange={namer}/><br/>
            <p>Password :</p><input type="password" onChange={passer}/><br/>
            <p>retype Password :</p><input type="password" onChange={repasser}/><br/>
            <button type="submit">Register</button>
        </form>
    )
}

export default Login;