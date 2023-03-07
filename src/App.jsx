import "./App.css";

function App() {
	return (
		<>
			<div className="wrapper">
				<div className="filterContainer">
					<div className="inner">
						<div className="filterWrapper">
							<p>아이콘</p>
							<ul className="filterGroup">
								<li>All</li>
								<li>Active</li>
								<li>Completed</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="todoContainer">
					<div className="inner">
						<ul className="todoGroup">
							<li className="todoList">
								<div className="inputGroup">
									<input type={"checkbox"}></input>
									<p>강의 보기</p>
								</div>
								<p>아이콘</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="formContainer">
					<div className="inner">
						<form className="todoForm">
							<input type={"text"} placeholder="Add Todo"></input>
							<button>Add</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
