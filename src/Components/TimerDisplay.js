import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
	margin: 2em auto;
	text-align: center;
	color: white;
`;

const Input = styled.input`
	background: none;
	border: none;
	padding: 5px;
	font-size: 4em;
	font-family: "Montserrat", sans-serif;
	text-align: center;
	color: #fff;
	::placeholder {
		color: #fff;
		opacity: 0.6;
	}
`;

// Create the timer input component
const GetNumber = props => {
	const [count, setCount] = useState();
	return (
		<Input
			type="number"
			id={props.name}
			name={props.name}
			min="0"
			max={props.max}
			placeholder="00"
			onChange={e => {
				// Ensures all numbers are two-digits
				const val = e.target.value;
				val < 10 ? setCount(0 + val) : setCount(val);
			}}
			value={count}
		/>
	);
};

const TimerDisplay = () => {
	// Display timer inputs
	return (
		<Form>
			<GetNumber name="hours" max="23" />:
			<GetNumber name="minutes" max="59" />:
			<GetNumber name="seconds" max="59" />
		</Form>
	);
};

export default TimerDisplay;
