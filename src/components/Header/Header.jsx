import React from "react";
import styles from "./Header.module.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";

export default function Header({ filter, filters, filterChange }) {
	const { darkMode, toggleDarkMode } = useDarkMode();
	const handleChange = (e) => {
		filterChange(e.target.textContent);
	};

	return (
		<header className={styles.header}>
			<button onClick={toggleDarkMode} className={styles.button}>
				{darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
			</button>
			<ul className={styles.filters}>
				{filters.map((value, index) => (
					<li key={index}>
						<button
							onClick={handleChange}
							className={`${styles.filter} ${
								filter === value && styles.selected
							}`}
						>
							{value}
						</button>
					</li>
				))}
			</ul>
		</header>
	);
}
