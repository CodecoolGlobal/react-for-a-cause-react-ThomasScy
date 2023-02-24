import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
	const [displayForm, setDisplayForm] = useState(true);
	const [displayThx, setDisplayThx] = useState(false);
	const [displayBtn, setDisplayBtn] = useState(true);

	const sendContact = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		const formDataObj = {};
		data.forEach((value, key) => (formDataObj[key] = value));
		setDisplayForm(false);
		setDisplayThx(true);
		const timeOutMs = 5000;
		setTimeout(() => {
			setDisplayForm(true);
			setDisplayThx(false);
		}, timeOutMs);

		updateUserDataToServer(formDataObj);
	};
	async function updateUserDataToServer(object) {
		await fetch("http://localhost:3000//ngo-fabio/messages", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(object),
		});
	}

	return (
		<section id="contact" className="contact">
			<h1>Contact us</h1>
			<div className="container">
				{displayForm && (
					<p>Fill out the contact form to get in touch with us.</p>
				)}
				{displayForm && (
					<form onSubmit={sendContact} className="contact-form">
						<input
							id="first-name"
							name="first-name"
							type="text"
							placeholder="First name"
						/>
						<input
							id="last-name"
							name="last-name"
							type="text"
							placeholder="Last name"
						/>
						<input
							id="email"
							name="email"
							type="email"
							placeholder="Email"
						/>
						<input
							id="subject"
							name="subject"
							type="text"
							placeholder="Subject"
						/>
						<textarea
							id="message"
							name="message"
							type="text"
							placeholder="Message"
						/>

						{displayBtn && (
							<button id="sendBtn" type="submit">
								Send
							</button>
						)}
					</form>
				)}
				{displayThx && (
					<p>
						We appreciate you contacting us. One of our colleagues
						will get back in touch with you soon! Have a great day!
					</p>
				)}
			</div>
		</section>
	);
}
