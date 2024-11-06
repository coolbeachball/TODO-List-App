
function App() {
  return (
    <div className="container">
      <div className="todo-list">
        <div className="row">
          <input type="text" className="inputBox" placeholder="add task" />
          <button className="pinBtn">Pin</button>
        </div>
        <ul className="list-container">
          <li className="listItem"></li>
        </ul>
      </div>
    </div>
  )
}

export default App
