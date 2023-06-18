import React from "react";
import Multiselect from "./components/Multiselect";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Multiselect
				value={["Australia", "Canada"]}
				readonly={false}
			/>
		</div>
	);
};

export default App;
