import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Modal_Editar } from "../component/Modal_Editar";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		id: undefined
	});

	const [state_e, setStateE] = useState({
		Modal_E: false,
		id_e: undefined
	});

	const { actions, store } = useContext(Context);
	useEffect(function() {
		actions.obtenerInfo();
		console.log(store.contacts);
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((item, index) => {
							return (
								<ContactCard
									name={item.full_name}
									email={item.email}
									address={item.address}
									phone={item.phone}
									key={index}
									onDelete={() => setState({ showModal: true, id: item.id })}
									onDelete_E={() => setStateE({ Modal_E: true, id_e: item.id })}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal id={state.id} show={state.showModal} onClose={() => setState({ showModal: false })} />
			<Modal_Editar
				id={state_e.id}
				name_e={item.full_name}
				email_e={item.email}
				phone_e={item.phone}
				address_e={item.address}
				show={state.Modal_E}
				onClose={() => setState({ Modal_E: false })}
			/>
		</div>
	);
};
