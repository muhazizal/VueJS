import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://vue-axios-484fe.firebaseio.com',
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;
