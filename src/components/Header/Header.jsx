import React from "react";
import styles from "./Header.module.css";

export default function Header({ filter, filters, filterChange }) {
	const handleChange = (e) => {
		filterChange(e.target.textContent);
	};
	return (
		<header className={styles.header}>
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
