import React, { useState } from "react";
import { FieldProps } from "../utils/types";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Field: React.FC<FieldProps> = ({ handleParentBlur = null, ...props }) => {
	const { name, fn, value, placeholder } = props;

	const [showPassword, setShowPassword] = useState<boolean | null>(
		name === "password" ? false : null
	);

	const handleShowPassword = (): void => {
		setShowPassword(!showPassword);
	};

	return (
		<div
			className="field"
			onBlur={handleParentBlur === null ? () => {} : handleParentBlur}
		>
			<label htmlFor={name}>{name}:</label>
			<div className="input">
				<input
					type={
						name === "password"
							? !showPassword
								? "password"
								: "text"
							: name === "email"
							? "email"
							: "text"
					}
					name={name}
					id={name}
					value={value}
					onChange={fn}
					placeholder={placeholder || ""}
					readOnly={placeholder ? true : false}
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
