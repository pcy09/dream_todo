import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
	const [todos, setTodos] = useState(() => getLocalStorageTodos());
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
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);
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

function getLocalStorageTodos() {
	const todos = JSON.parse(localStorage.getItem("todos"));
	return todos ? todos : [];
}
