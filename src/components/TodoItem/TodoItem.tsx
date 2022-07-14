import React from "react";
import styles from "./TodoItem.module.scss";
import { ITodoItem } from "../types";
import css from "classnames";

interface TodoItemProps {
  item: ITodoItem;
  onCheckToggle: Function;
  onDelete: Function;
}

const TodoItem: React.FC<TodoItemProps> = props => {
  return (
    <div
      className={css(styles.root, { [styles.isDisabled]: props.item.isCompleted })}
      aria-disabled={props.item.isCompleted}
    >
      <div className={styles.titleSection}>
        <h3 className={styles.title}>{props.item.name}</h3>
        <span className={styles.createdAt}>{props.item.createdAt.toLocaleDateString()}</span>
      </div>

      <div>
        <button style={{ marginRight: 8 }} onClick={() => props.onCheckToggle(props.item.id)}>
          {props.item.isCompleted ? `Not Done` : `Done`}
        </button>
        <button style={{ marginRight: 8 }} onClick={() => props.onDelete(props.item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
