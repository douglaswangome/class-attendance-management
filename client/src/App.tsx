import React, { useEffect } from "react";
import "./App.css";
import SignUp from "./pages/SignUp";

const App: React.FC = () => {
	// TODO: Install React Router Dom, Axios, Socket.io Client
	useEffect(() => {
		const handleTheme = (): void => {
			const theme = localStorage.getItem("theme");
			if (theme === "dark") {
				document.body.classList.add("dark");
			} else {
				document.body.classList.remove("dark");
			}
		};

		handleTheme();
	}, []);

	return (
		<div className="app">
			<SignUp />
		</div>
	);
};

export default App;
