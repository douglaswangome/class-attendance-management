import React, { useState } from "react";
import Field from "../components/Field";
import { SignUpCredentials } from "../utils/types";

const SignUp: React.FC = () => {
	const [credentials, setCredentials] = useState<SignUpCredentials>({
		username: "",
		password: "",
		email: "",
		role: "",
	});

	const handleCredentials = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		const { name, value } = event.target;

		setCredentials({
			...credentials,
			[name]: value,
		});
	};

	const handleParentBlur = (): void => {
		if (credentials.email.split("@").length !== 2) {
			return;
		}

		const role = credentials.email.split("@")[1].split(".")[0];

		if (credentials.email) {
			setCredentials({
				...credentials,
				username: credentials.email.split("@")[0],
				role: role === "mksu" ? "admin" : "student",
			});
		}
	};

	// const handleSubmit = ():void => {}

	return (
		<div className="signup">
			<img src="/images/class.png" alt="class" />
			<div className="form">
				<span className="title">Sign Up</span>
				<Field
					name="username"
					value={credentials.username}
					fn={handleCredentials}
					placeholder="Do not edit this field"
				/>
				<Field
					name="role"
					value={credentials.role}
					fn={handleCredentials}
					placeholder="Do not edit this field"
				/>
				<Field
					name="email"
					value={credentials.email}
					fn={handleCredentials}
					handleParentBlur={handleParentBlur}
				/>
				<Field
					name="password"
					value={credentials.password}
					fn={handleCredentials}
				/>
				<button className="solid">
					<span>Sign Up</span>
				</button>
			</div>
		</div>
	);
};

export default SignUp;
