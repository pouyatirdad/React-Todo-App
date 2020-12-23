import React, {useContext} from "react";
import TodoContext from "../Context/Todocontext";
function About() {
    const context = useContext(TodoContext)
    const name = context.data.map(i => i.name)
    return(
        <div className='d-flex container flex-column align-items-center'>
            <h3 className='text-success'>About page</h3>
            <h4 className='text-info'>hello {name}</h4>
            <h6 className='text-warning'>if you want to use app , please click <span className='text-danger'>Home</span> in navbar</h6>
        </div>
    )
}
export default About;