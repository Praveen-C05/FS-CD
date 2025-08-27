import React, { useState } from "react";
import "./App9.css";

function App9() {
	const [email, setEmail] = useState("");
	const [result, setResult] = useState(null);
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setResult(null);
		try {
			const response = await fetch(`http://localhost:3000/student/${email}`);
			const data = await response.json();
			if (data.error) {
				setError(data.error);
				setResult(null);
			} else {
				setResult(data);
			}
		} catch (err) {
			setError("Error fetching student profile");
			setResult(null);
		}
	};

	return (
		<div className="app9-container">
			<h2>Find Student Profile</h2>
			<form onSubmit={handleSubmit} className="app9-form">
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>
				<button type="submit">Search</button>
			</form>
			<div className="app9-result">
				{error && <p className="app9-error">{error}</p>}
				{result && (
					<div>
						<h3>Student Profile</h3>
						<p><b>Name:</b> {result.name}</p>
						<p><b>Email:</b> {result.email}</p>
						<p><b>Program:</b> {result.program}</p>
						<p><b>Age:</b> {result.age}</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default App9;
