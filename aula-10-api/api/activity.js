import axios from 'axios';

export const fetchRandomActivity = async () => axios.get('https://www.boredapi.com/api/activity')
.then(function (response) {
    if (Math.random() > 0.2) {
      throw new Error('Erro forçado')
    }
    return response
  })
  .catch(function (error) {
    throw new Error(error.message)
  })