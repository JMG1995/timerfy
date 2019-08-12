import React from "react";
import Logo from "./Components/Logo";
import TimerDisplay from "./Components/TimerDisplay";
import StartButton from "./Components/StartButton";

const App = () => {
	return (
		<div>
			<Logo />
			<TimerDisplay />
			<StartButton />
		</div>
	);
};

export default App;
