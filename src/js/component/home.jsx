import React, { useState, useEffect } from "react";

const Trafficlight = () => {
	const [trafficColor, setTrafficColor] = useState("");

	return (
		<div className="container d-flex align-items-center flex-column">
			<div className="bg-dark rounded-pill p-2 mt-4">
				<div onClick={() => setTrafficColor("red")} className={"rounded-circle bg-danger mt-1"+((trafficColor !== "red") ? " bg-opacity-25" : "")}></div>
				<div onClick={() => setTrafficColor("yellow")} className={"rounded-circle bg-warning mt-2"+((trafficColor !== "yellow") ? " bg-opacity-25" : "")}></div>
				<div onClick={() => setTrafficColor("green")} className={"rounded-circle bg-success mt-2"+((trafficColor !== "green") ? " bg-opacity-25" : "")}></div>
			</div>
		</div>
	)
};

export default Trafficlight;