import React from "react";

const Todo = (props) => {

    const todoClasses = ["bold", "italic", "capital"];
        if (props.todo.complete) {
            todoClasses.push("line-through");
        }

    return (
        <div>
            <input
                onChange={(event) => {
                    props.handleToggleComplete(props.i);
                }}
                checked={props.todo.complete}
                type="checkbox"
            />
            <span className={todoClasses.join(" ")}>{props.todo.text}</span>
            <button
                onClick={(e) => {
                    props.handleTodoDelete(props.i);
                }}
                style={{ marginLeft: "10px" }}
            >
                Delete
            </button>
            <hr />
        </div>
    );
};

export default Todo;
