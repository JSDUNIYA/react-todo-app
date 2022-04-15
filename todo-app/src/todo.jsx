function Todo({todoData}) {
    let element, h;
    const {id, name, done} = todoData;
     h = <h1>{name}</h1>;
    element =  done ?  <strike>{h}</strike> : h;
      return <div data-testid={'data-'+ id}>{element}</div>
}
export default Todo;