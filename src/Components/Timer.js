import React from "react";
import styled from "styled-components";
import StartButton from "./StartButton";
import GetNumber from "./GetNumber";

const Form = styled.form`
	margin: 2em auto;
	text-align: center;
	color: white;
	display: flex;
	justify-content: space-around;
`;

export default function Timer() {
	// Display timer inputs

	return (
		<div>
			<Form>
				<GetNumber name="hours" max="23" />
				<GetNumber name="minutes" max="59" />
				<GetNumber name="seconds" max="59" />
			</Form>
			<StartButton />
		</div>
	);
}
