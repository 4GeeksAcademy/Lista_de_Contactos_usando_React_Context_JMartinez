const getState = ({ getStore, setStore, getAction }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},

		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()

			obtenerInfo: async function() {
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/juana");
					let data = await response.json();
					console.log(data);
					setStore({ contacts: data });
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
