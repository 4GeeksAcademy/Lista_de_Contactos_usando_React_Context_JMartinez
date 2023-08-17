import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const AddContact = () => {
	const { actions, store } = useContext(Context);
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	//Agregar contacto
	function Cambios() {
		if ((nombre === "") & (email === "") & (phone === "") & (address === "")) {
			alert("No mi loco");
		} else {
			actions.CRUS(nombre, email, phone, address);
		}
	}

	useEffect(function() {
		actions.obtenerInfo();
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
						/>
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
						/>
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
						/>
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
						/>
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
