import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../../components/button/button.component";



import {
	signInWithGoogle,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const googleSignIn = async () => {
		
		await signInWithGoogle();

		
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password,
			);

			resetFormFields();
		} catch (error) {
			console.log(error);
			if (
				error.code === "auth/wrong-password" ||
				error.code === "auth/user-not-found"
			) {
				alert("Wrong email or password, try again");
			} else {
				alert("Something went wrong, try again");
			}
		}
		console.log("sign in");
	};

	return (
		<div className="sign-up-container">
			<h3>Already have an account?</h3>

			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
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

				<div className="sign-up-button-container">
					<Button type="submit">Sign In</Button>
					<Button
						type="button"
						buttonType="google"
						onClick={googleSignIn}
					>
						Sign In with google
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
