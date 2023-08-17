const getState = ({ getStore, setStore, getAction }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},

		actions: {
			CRUS: async function(nombre, email, phone, address) {
				try {
					const respu = await fetch("https://playground.4geeks.com/apis/fake/contact", {
						method: "POST",
						body: JSON.stringify({
							full_name: { nombre },
							email: { email },
							agenda_slug: "JorgeMRs",
							address: { address },
							phone: { phone }
						}),
						headers: {
							"Content-Type": "application/json"
						}
					});

					const data = await respu.json();
					console.log(data);
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
