import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.a`
	color: #fff;
	background-color: none;
	border: 2px solid #fff;
	border-radius: 3px;
	padding: 8px 16px;
	font-family: "Montserrat", sans-serif;
`;

export default function StartButton() {
	const [text, setText] = useState("Start");

	function toggle() {
		setText(text === "Start" ? "Stop" : "Start");
	}

	return <Button onClick={toggle}>{text}</Button>;
}
