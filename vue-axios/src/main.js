import Vue from 'vue';
import App from './App.vue';
// import axios from 'axios';

import router from './router';
import store from './store';

// axios.defaults.baseURL = 'https://identitytoolkit.googleapis.com/v1';
// axios.defaults.headers.common['Authorization'] = 'Auth';
// axios.defaults.headers.get['Accepts'] = 'application/json';

// const reqInterceptor = axios.interceptors.request.use(config => {
// 	console.log('Request Interceptors', config);
// 	return config;
// });

// const resInterceptors = axios.interceptors.response.use(response => {
// 	console.log('Response Interceptors', response);
// 	return response;
// });

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App),
});
