import React from "react";
import "bootstrap";

// import React, { useState, useCallback, useEffect } from "react";
// import PropTypes from "prop-types";
import useInterval from "./useInterval";

export const TrafficLight = () => {
	return (
		<>
			<div className="bg-dark" />
			<div className="container bg-dark">
				<div className="verde bg-success" />
				<div className="amarillo bg-warning" />
				<div className="rojo bg-danger" />
			</div>
		</>
	);
};
