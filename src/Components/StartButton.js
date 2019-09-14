import React, { useState } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	text-align: center;
`;

const Button = styled.button`
	color: #fff;
	background-color: rgba(0, 0, 0, 0);
	border: 2px solid #fff;
	font-size: 1.2em;
	width: 70%;
	border-radius: 3px;
	padding: 8px 16px;
	font-family: "Montserrat", sans-serif;
	:hover {
		color: #f77d8d;
		background: #fff;
		cursor: pointer;
	}
`;

export default function StartButton() {
	const [text, setText] = useState("Start");

	const toggleStartStop = () => {
		setText(text === "Start" ? "Stop" : "Start");
	};

	return (
		<ButtonContainer>
			<Button onClick={toggleStartStop}>{text}</Button>
		</ButtonContainer>
	);
}
