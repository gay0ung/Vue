import axios from 'axios';

const client = axios.create();
client.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = 'api_key=73aec5aab4d1dd1f2f46621795e15d37';

export { client, KEY };
