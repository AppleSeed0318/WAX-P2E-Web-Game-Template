import React from "react";
import styles from "./TodoList.module.scss";
import { ITodoItem } from "../types";
import TodoItem from "../TodoItem/TodoItem";

const TodoInput: React.FC<{ onAdd: Function }> = props => {
  const [state, setState] = React.useState("");

  function onInputChange(e: any) {
    const value = e.target.value;
    setState(value);
  }

  function onSubmit() {
    setState("");
    props.onAdd(state);
  }

  return (
    <div className={styles.todoInputSection}>
      <input onChange={onInputChange} placeholder="Enter todo" value={state} />
      <button onClick={onSubmit}>Add</button>
    </div>
  );
};

interface TodoListProps {
  todoItems: ITodoItem[];
  onAdd: Function;
  onEdit: Function;
  onDelete: Function;
}

const TodoList: React.FC<TodoListProps> = props => {
  const { todoItems = [] } = props;

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Todo-list</h3>
      <TodoInput onAdd={props.onAdd} />
      <div className={styles.todoItems}>
        {todoItems.length > 0 ? (
          todoItems.map(item => (
            <TodoItem key={item.id} item={item} onCheckToggle={props.onEdit} onDelete={props.onDelete} />
          ))
        ) : (
          <p>No Todos added</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
