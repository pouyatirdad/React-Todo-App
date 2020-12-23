import React, {useReducer, useState} from "react";
import Header from "./Header";
import Reducer from "../Reduer/TodoReducer";
import TodoContext from "../Context/Todocontext";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../Route/HomeRoute";
import About from "../Route/AboutRoute";
import TodoDetail from "../Route/TodoDetail";
import Eror from "../Route/ERror";
import Login from "./Login";

function App() {
    const [state, dispatch] = useReducer(Reducer, {
        todo: [],
        data: [],
    })
    const [login, setlogin] = useState(false);
    return (
        <BrowserRouter>
            <TodoContext.Provider value={{
                todo: state.todo,
                data: state.data,
                dispatch,

            }}>
                <div>
                    <Header/>

                    {
                        login
                            ? <Switch>
                                <Route path='/home'  component={Home}/>
                                <Route path='/' exact component={About}/>
                                <Route path='/todo/:id' component={TodoDetail}/>
                                <Route path='eror' component={Eror}/>
                                <Route path='' component={Eror}/>
                            </Switch>
                            : <Login dologin={() => setlogin(true)}/>
                    }
                </div>
            </TodoContext.Provider>
        </BrowserRouter>
    )
}

export default App;