import React from "react";
import styled from "styled-components";

// Decide between 3 fonts
const Heading = styled.h1`
	font-family: "Pacifico", sans-serif;
	font-size: 3em;
	text-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
	transform: rotate(354deg) translate(5px, 1px) skew(-31deg, -6deg);
	color: #fff;
	margin: 0 auto 0 0;
`;

const NavBar = styled.div`
	margin: 2vh auto;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 90%;
`;

const MenuItem = styled.a`
	font-family: "Montserrat", sans-serif;
	color: #fff;
	border-bottom: ${props => (props.active ? "2px solid #f3e072" : "none")};
	font-size: 0.9em;
	padding-bottom: 2px;
	margin: 0 20px;
`;

const Navigation = () => {
	return (
		<header>
			<NavBar>
				<Heading>Timerfy</Heading>
				<MenuItem active>About</MenuItem>
				<MenuItem>Other Work</MenuItem>
				<MenuItem>GitHub</MenuItem>
			</NavBar>
		</header>
	);
};

export default Navigation;
