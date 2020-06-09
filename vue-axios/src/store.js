import Vue from 'vue';
import Vuex from 'vuex';
import axios from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		idToken: null,
		userId: null,
	},
	mutations: {
		authUser(state, userData) {
			state.idToken = userData.token;
			state.userId = userData.userId;
		},
	},
	actions: {
		signup({ commit }, authData) {
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
				})
				.catch(error => console.log('error'));
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
				.catch(error => console.log('error'));
		},
	},
	getters: {},
});
