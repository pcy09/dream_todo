import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
	const [todos, setTodos] = useState([
		{ id: uuidv4(), text: "장보기", status: "active" },
		{ id: uuidv4(), text: "공부하기", status: "active" },
	]);
	const handleUpdate = (updated) => {
		setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
	};
	const handleDelete = (deleted) => {
		setTodos(todos.filter((e) => e.id !== deleted.id));
	};
	const handleAdd = (todo) => {
		setTodos([...todos, todo]);
	};
	const getFilterdItems = (todos, filter) => {
		if (filter === "all") {
			return todos;
		}
		return todos.filter((todo) => todo.status === filter);
	};
	const filterdItems = getFilterdItems(todos, filter);
	return (
		<section className={styles.container}>
			<ul className={styles.list}>
				{filterdItems.map((item) => (
					<Todo
						key={item.id}
						todo={item}
						onUpdate={handleUpdate}
						onDelete={handleDelete}
					/>
				))}
			</ul>

			<AddTodo onAdd={handleAdd} />
		</section>
	);
}
