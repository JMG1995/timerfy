import React from "react";
import styled from "styled-components";
import MediaQueries from "../Utils/MediaQueries";

const Heading = styled.h1`
	font-family: "Pacifico", sans-serif;
	text-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
	transform: rotate(354deg) translate(5px, 1px) skew(-31deg, -6deg);
	color: #fff;
	font-size: 5em;
	text-align: center;
	margin: 0;

	${MediaQueries.medium`
		font-size: 3em;
		margin: 0 auto 0 0;
	`}
`;

const NavBar = styled.div`
	margin: 2vh auto;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
`;

const Logo = () => {
	return (
		<header>
			<NavBar>
				<Heading>Timerfy</Heading>
			</NavBar>
		</header>
	);
};

export default Logo;
