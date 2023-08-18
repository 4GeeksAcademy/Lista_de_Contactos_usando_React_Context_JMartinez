const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [],
			prueba: {}
		},

		actions: {
			CRUS: async function(nombre, email, phone, address) {
				try {
					const respu = await fetch("https://playground.4geeks.com/apis/fake/contact", {
						method: "POST",

						headers: {
							"Content-Type": "application/json"
						},

						body: JSON.stringify({
							full_name: nombre,
							email: email,
							agenda_slug: "JorgeMRs",
							address: address,
							phone: phone
						})
					});

					const data = await respu.json();
					console.log("Flux: = CRSU = " + data);
				} catch (error) {
					console.log(error);
				}
			},

			Borrar: async function(id) {
				console.log(id);
				try {
					const respu = await fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
						method: "DELETE",

						headers: {
							"Content-Type": "application/json"
						}
					});

					const data = await respu.json();
					console.log("Flux: = borrar = " + data);
					getActions().obtenerInfo();
				} catch (error) {
					console.log(error);
				}
			},

			CargarContact: async function(id) {
				console.log(id);
				try {
					const respu = await fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
						method: "GET",

						headers: {
							"Content-Type": "application/json"
						}
					});

					const data = await respu.json();

					setStore({ prueba: data });
					console.log("Flux: = borrar = " + data);
					/* getActions().obtenerInfo(); */
				} catch (error) {
					console.log(error);
				}
			},

			obtenerInfo: async function() {
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/JorgeMRs");
					let data = await response.json();

					setStore({ contacts: data });
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
