import React, { useState } from "react";

const TrafficLight = () => {
	const [luzRoja, setLuzRoja] = useState("apagado");
	const [luzAmarilla, setLuzAmarilla] = useState("apagado");
	const [luzVerde, setLuzVerde] = useState("apagado");

	const cambiaLuz = color => {
		if (color === "rojo") {
			setLuzRoja("encendido");
			setLuzAmarilla("apagado");
			setLuzVerde("apagado");
		} else if (color === "amarillo") {
			setLuzAmarilla("encendido");
			setLuzVerde("apagado");
			setLuzRoja("apagado");
		} else if (color === "verde") {
			setLuzVerde("encendido");
			setLuzRoja("apagado");
			setLuzAmarilla("apagado");
		}
	};

	return (
		<>
			<div className="bg-dark" />
			<div className="container bg-dark">
				<div
					className={`luz bg-danger ${luzRoja}`}
					onClick={() => cambiaLuz("rojo")}
				/>
				<div
					className={`luz bg-warning ${luzAmarilla}`}
					onClick={() => cambiaLuz("amarillo")}
				/>
				<div
					className={`luz bg-success ${luzVerde}`}
					onClick={() => cambiaLuz("verde")}
				/>
			</div>
		</>
	);
};
export default TrafficLight;