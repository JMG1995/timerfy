import React from "react";
import styled from "styled-components";

// Decide between 3 fonts
const Heading = styled.h1`
	font-family: "Pacifico", sans-serif;
	font-size: 6em;
	text-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
	transform: rotate(354deg) translate(5px, 1px) skew(-31deg, -6deg);
	color: #fff;
	width: 100%;
	margin: 0;
	text-align: center;
`;

const Div = styled.div`
	margin: 10vh auto;
`;

const Title = props => {
	return (
		<Div>
			<Heading>{props.title}</Heading>
		</Div>
	);
};

export default Title;
