import React, { useState } from "react";
import { FieldProps } from "../utils/types";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Field: React.FC<FieldProps> = (props) => {
	const { name } = props;

	const [showPassword, setShowPassword] = useState<boolean | null>(
		name === "password" ? false : null
	);

	const handleShowPassword = (): void => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="field">
			<label htmlFor={name}>{name}:</label>
			<div className="input">
				<input
					type={name === "password" && !showPassword ? "password" : "text"}
					name={name}
					id={name}
				/>
				{name === "password" && (
					<div className="eye" onClick={handleShowPassword}>
						{showPassword ? <FaEyeSlash /> : <FaEye />}
					</div>
				)}
			</div>
		</div>
	);
};

export default Field;
