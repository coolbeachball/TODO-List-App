import ListItem from "./ListItem"

function TodoList() {
  return (
    <div className="todo-list">
        <div className="row">
          <input type="text" className="inputBox" placeholder="add task" />
          <button className="pinBtn">Pin</button>
        </div>
        <ListItem />
    </div>
  )
}

export default TodoList