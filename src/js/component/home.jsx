import React, { useState, useEffect } from "react";

const Trafficlight = () => {
	const [trafficColor, setTrafficColor] = useState("");

	const [counter, setCounter] = useState('');

	useEffect(() => {
		if (counter !== '') {
			let interval = setInterval(() => {
				setCounter(counter + 1);
				toggle();
			}, 3000);
		}
	}
	,[counter]);

	let toggle = () => {
		(trafficColor === "") ? (setTrafficColor("red")) : (trafficColor === "red") ? (setTrafficColor("yellow")) : (trafficColor === "yellow") ? (setTrafficColor("green")) : (trafficColor === "green") ? (setTrafficColor("red")) : null;
	}
	return (
		<div className="container d-flex align-items-center flex-column">
			<div className="bg-dark">" "</div>
			<div className="bg-dark rounded-pill p-2">
				<div onClick={() => setTrafficColor("red")} className={"rounded-circle bg-danger mt-1" + ((trafficColor !== "red") ? " bg-opacity-25" : "")}></div>
				<div onClick={() => setTrafficColor("yellow")} className={"rounded-circle bg-warning mt-2" + ((trafficColor !== "yellow") ? " bg-opacity-25" : "")}></div>
				<div onClick={() => setTrafficColor("green")} className={"rounded-circle bg-success mt-2" + ((trafficColor !== "green") ? " bg-opacity-25" : "")}></div>
			</div>
			<br />
			<button type="button" onClick={(e) => setCounter(0)} className="btn btn-dark">Auto-toggle</button>
			{/* <button type="button" className="btn btn-light mt-2">Add purple</button> */}

		</div>
	)
};

export default Trafficlight;