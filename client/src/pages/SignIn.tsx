import React, { useState } from "react";
import { Credentials } from "../utils/types";
import Field from "../components/Field";

const SignIn: React.FC = () => {
	const [credentials, setCredentials] = useState<Credentials>({
		username: "",
		password: "",
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

	return (
		<div className="signin">
			<img src="/images/class.png" alt="class" />
			<div className="form">
				<span className="title">Sign In</span>
				<Field name="username" value={credentials.username} />
				<Field name="password" value={credentials.password} />
				<button className="outline">
					<span>Sign In</span>
				</button>
			</div>
		</div>
	);
};

export default SignIn;
