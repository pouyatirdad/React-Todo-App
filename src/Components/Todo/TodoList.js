import React, {useContext, useState} from "react";
import TodoContext from "../../Context/Todocontext";
import Add from "./Addtodo";

function List() {
    const [done, setdone] = useState(false);
    const context = useContext(TodoContext);
    let filtertodo = context.todo.filter(i => i.done === done);
    return (
        <div>
            <div className='container d-flex justify-content-center mt-1 nav'>
                <button className={`btn btn-sm nav-link ${!done ? 'active btn-dark text-white' : ''}`}
                        onClick={() => setdone(false)}>undone
                </button>
                <button className={`btn btn-sm nav-link ${done ? 'active btn-dark text-white' : ''}`}
                        onClick={() => setdone(true)}>done
                </button>
            </div>
            <div >
                {
                    filtertodo.length === 0
                        ? <h3>Nothing</h3>
                        : filtertodo.map(i =>
                            <Add
                                text={i.text}
                                item={i}
                            />
                        )
                }
            </div>
        </div>
    )
}

export default List;