const getState = ({ getStore, setStore, getAction }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},

		actions: {
			CRUS: async function() {
				try {
					const respu = await fetch("https://playground.4geeks.com/apis/fake/contact", {
						method: "POST",
						body: JSON.stringify({
							full_name: "Dave Bradley",
							email: "dave@gmail.com",
							agenda_slug: "JorgeMRs",
							address: "47568 NW 34ST, 33434 FL, USA",
							phone: "099287051"
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
