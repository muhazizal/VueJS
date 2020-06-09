import Vue from 'vue';
import Vuex from 'vuex';
import axios from './auth';
import globalAxios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		idToken: null,
		userId: null,
		user: null,
	},

	mutations: {
		authUser(state, userData) {
			state.idToken = userData.token;
			state.userId = userData.userId;
		},

		storeUser(state, user) {
			state.user = user;
		},
	},

	actions: {
		signup({ commit, dispatch }, authData) {
			axios
				.post(`/accounts:signUp?key=AIzaSyCy_8LSBuAabAnzT8-xgc2wHMItYoI87Bo`, {
					email: authData.email,
					password: authData.password,
					returnSecureToken: true,
				})
				.then(response => {
					console.log(response);
					commit('authUser', {
						token: response.data.idToken,
						userId: response.data.localId,
					});
					dispatch('storeUser', authData);
				})
				.catch(error => console.log(error));
		},

		signin({ commit }, authData) {
			axios
				.post(`/accounts:signInWithPassword?key=AIzaSyCy_8LSBuAabAnzT8-xgc2wHMItYoI87Bo`, {
					email: authData.email,
					password: authData.password,
					returnSecureToken: true,
				})
				.then(response => {
					console.log(response);
					commit('authUser', {
						token: response.data.idToken,
						userId: response.data.localId,
					});
				})
				.catch(error => console.log(error));
		},

		storeUser({ commit }, userData) {
			globalAxios
				.post('/users.json', userData)
				.then(response => console.log(response))
				.catch(error => console.log(error));
		},

		fetchUser({ commit }) {
			globalAxios
				.get('/users.json')
				.then(response => {
					const data = response.data;
					const users = [];
					for (let key in data) {
						const user = data[key];
						user.id = key;
						users.push(user);
					}
					console.log(users);
					commit('storeUser', users[0]);
				})
				.catch(error => console.log(error));
		},
	},

	getters: {
		user() {
			return state.user;
		},
	},
});
