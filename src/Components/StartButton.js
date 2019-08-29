import React, { useState } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	text-align: center;
`;

const Button = styled.a`
	color: #fff;
	background-color: none;
	border: 2px solid #fff;
	border-radius: 3px;
	padding: 8px 16px;
	font-family: "Montserrat", sans-serif;
	:hover {
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
