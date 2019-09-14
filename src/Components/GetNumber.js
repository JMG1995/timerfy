import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
	flex-basis: 30%;
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
			className="timer"
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

export default GetNumber;
