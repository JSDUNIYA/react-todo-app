import Todo from "./todo";
function TodoList() {
  let data = [{
      id:1,
      name: "My first task",
      done:true,
  },
  {
    id:2,
    name: "My Second task",
    done:false,
},
{
    id:3,
    name: "My third task",
    done:false,
}]
    return (
        <div>
        <h3>TODO LIST:</h3>
      
         { data.map( (todo) => (
                <Todo key={"uni"+todo.id} todoData={todo}/>
          ))
         }
          </div>
    )
}
export default TodoList;