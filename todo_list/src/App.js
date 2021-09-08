import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleNewTodoSubmit = (e) => {
        e.preventDefault();
        if (newTodo === "") {
            return;
        }

        const todoItem = {
            text: newTodo,
            complete: false,
        };

        setTodos([...todos, todoItem]);
        console.log(newTodo);
        setNewTodo("");
    };

    const handleTodoDelete = (delIndex) => {
        console.log("DelIndex: ", delIndex);
        const filterTodos = todos.filter((_todo, i) => i !== delIndex);
        console.log(filterTodos);
        setTodos(filterTodos);
    };

    const handleToggleComplete = (idx) => {
        const updatedTodos = todos.map((todo, i) => {
            if (idx === i) {
                // the line below could cause problems, mutating todo directly
                todo.complete = !todo.complete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div style={{ textAlign: "center" }}>
          <h1>Todo List</h1>
            <form onSubmit={handleNewTodoSubmit}>
                <input
                    className="textInput"
                    type="text"
                    onChange={(e) => setNewTodo(e.target.value)}
                    value={newTodo}
                />
                <div className="addBtn">
                    <button>Add</button>
                </div>
            </form>
            <div className="list">
            {todos.map((todo, i) => {
                
                return <Todo 
                key={i} 
                todo={todo} 
                handleToggleComplete={handleToggleComplete} 
                i={i}
                handleTodoDelete={handleTodoDelete}/>;
            })}
            </div>
        </div>
    );
}

export default App;
