import { useState } from "react";

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignupForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	// console.log(formFields);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password,
			);

			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();

			// console.log(response);
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("That email address is already in use!");
			} else {
				console.log("user creation encountered an error", error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<FormInput
					required
					label="Display Name"
					type="text"
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>
        <FormInput
					required
					label="Email"
					type="email"
					onChange={handleChange}
					name="email"
					value={email}
				/>
        <FormInput
					required
					label="Password"
					type="password"
					onChange={handleChange}
					name="password"
					value={password}
				/>
        <FormInput
					required
					label="Confirm Password"
					type="password"
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignupForm;