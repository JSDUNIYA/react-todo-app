import Todo from "./todo";



function TodoList() {
  let data = [{
      id:1,
      name: "My first task",
  },
  {
    id:2,
    name: "My Second task",
},
{
    id:3,
    name: "My third task",
}]
    return (
          data.map(todo => (
                <Todo key={todo.id} name={todo.name}/>
          ))
    )
}
export default TodoList;