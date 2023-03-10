import { useState } from "react";
import "./App.css";
import { DarkModeProvider } from "./components/context/DarkModeContext";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
	const filters = ["all", "active", "completed"];
	const [filter, setFilter] = useState(filters[0]);
	const filterChange = (filter) => {
		setFilter(filter);
	};
	return (
		<DarkModeProvider>
			<Header filters={filters} filter={filter} filterChange={filterChange} />
			<TodoList filter={filter} />
		</DarkModeProvider>
	);
}

export default App;
