import  {createContext} from "react";
const TodoContext=createContext({
    todo:[],
    data:[],
    add:()=>{},
    done:()=>{},
    delete:()=>{},
    edit:()=>{},
})
export default TodoContext;