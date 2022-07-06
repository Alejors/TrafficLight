import React, { useState, useEffect } from "react";

const Trafficlight = () => {
	const [trafficColor, setTrafficColor] = useState("");
	const [show, setShow] = useState(false);

	let toggle = () => {
		(trafficColor === "") ? (setTrafficColor("red")) : (trafficColor === "red") ? (setTrafficColor("yellow")) : (trafficColor === "yellow") ? (setTrafficColor("green")) : (trafficColor === "green") ? ((show === true) ? (setTrafficColor("blue")) : (setTrafficColor("red"))) : (trafficColor === "blue") ? (setTrafficColor("red")) : null;
	}

	return (
		<div className="container d-flex align-items-center flex-column">
			<div className="bg-dark">" "</div>
			<div className="bg-dark rounded-pill p-2">
				<div onClick={() => setTrafficColor("red")} className={"rounded-circle bg-danger mt-1" + ((trafficColor !== "red") ? " bg-opacity-25" : "")}></div>
				<div onClick={() => setTrafficColor("yellow")} className={"rounded-circle bg-warning mt-2" + ((trafficColor !== "yellow") ? " bg-opacity-25" : "")}></div>
				<div onClick={() => setTrafficColor("green")} className={"rounded-circle bg-success mt-2" + ((trafficColor !== "green") ? " bg-opacity-25" : "")}></div>
				<div onClick={() => setTrafficColor("blue")} className={"rounded-circle bg-primary mt-2" + ((trafficColor !== "blue") ? " bg-opacity-25" : "") + ((show === false) ? " d-none" : "")}></div>
			</div>
			<br />
			<button type="button" onClick={(e) => toggle()} className="btn btn-dark">Change me</button>
			<button type="button" onClick={(e) => setShow(!show)} className="btn btn-light mt-2">Toggle extra light</button>

		</div>
	)
};

export default Trafficlight;