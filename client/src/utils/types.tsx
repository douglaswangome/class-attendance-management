export interface Credentials {
	username: string;
	password: string;
}

export interface SignUpCredentials extends Credentials {
	role: string;
	email: string;
}

export interface Theme {
	theme: "light" | "dark";
}

export interface FieldProps {
	name: string;
	value: string;
	fn: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	handleParentBlur?: () => void;
}
