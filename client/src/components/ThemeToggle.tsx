import React, { useState } from "react";
import { BsMoon, BsSunFill } from "react-icons/bs";
import { Theme } from "../utils/types";

const ThemeToggle: React.FC = () => {
	// TODO: Add Theme to App.tsx
	const [theme, setTheme] = useState<Theme>({
		theme: (localStorage.getItem("theme") as "dark" | "light") || "light",
	});

	const changeTheme = (): void => {
		if (theme.theme === "light") {
			localStorage.setItem("theme", "dark");
			setTheme({ theme: "dark" });
			document.body.classList.add("dark");
		} else {
			localStorage.setItem("theme", "light");
			setTheme({ theme: "light" });
			document.body.classList.remove("dark");
		}
	};

	return (
		<div className="theme" onClick={changeTheme}>
			<div className="icon">
				<BsMoon />
				<BsSunFill />
			</div>
		</div>
	);
};

export default ThemeToggle;
