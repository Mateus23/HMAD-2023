import axios from 'axios';

export const fetchRandomActivity = async () => axios.get('https://www.boredapi.com/api/activity')
.then(function (response) {
    if (Math.random() > 0.6) {
      throw new Error('Erro forçado')
    }
    return response
  })
  .catch(function (error) {
    throw new Error(error.message)
  })


  axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })

  axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })

  async function getUser() {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  axios.post('/user', {
    firstName: 'Senhor',
    lastName: 'Professor'
  })
  .then(function (response) {
    console.log(response);
  })

  const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  