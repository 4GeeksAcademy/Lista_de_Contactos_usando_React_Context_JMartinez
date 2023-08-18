import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Modal_Editar = () => {
	const { actions, store } = useContext(Context);
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [state_e, setState_E] = useState({
		Modal_e: false,
		id_e: undefined
	});

	//Agregar contacto
	function Cambios() {
		if ((nombre === "") & (email === "") & (phone === "") & (address === "")) {
			alert("No mi loco");
		} else {
			actions.CRUS(nombre, email, phone, address);
		}
	}

	useEffect(function() {
		actions.CargarContact();
	}, []);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							value={nombre}
							onChange={e => setNombre(e.target.value)}
							placeholder="Full Name"
							id="full_name1"
						/>{" "}
						{props.name_e}
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							value={email}
							onChange={e => setEmail(e.target.value)}
							placeholder="Enter email"
							id="email1"
						/>{" "}
						{props.email_e}
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							value={phone}
							onChange={e => setPhone(e.target.value)}
							placeholder="Enter phone"
							id="phone1"
						/>{" "}
						{props.address_es}
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							value={address}
							onChange={e => setAddress(e.target.value)}
							placeholder="Enter address"
							id="address1"
						/>{" "}
						{props.address_es}
					</div>
					<button type="button " onClick={() => Cambios()} className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id_e: PropTypes.string,
	name_e: PropTypes.string,
	email_e: PropTypes.string,
	phone_e: PropTypes.string,
	address_e: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
