import Axios, { AxiosResponse } from 'axios'

const connection = Axios.create({
  baseURL: 'http://localhost:8000',
})

const Api = {
  signup: (username: string, password: string, email: string): Number | Error => {
    connection.post('/signup', {
      username,
      password,
      email
    })
      .then((result: AxiosResponse) => {
        return result.status
      })
      .catch((error: Error) => {
        console.log(error);
        return 500
      })
    return -1
  },

  login: (username: string, password: string) => {
    connection.post('/login', {
      username,
      password
    })
      .then((result: AxiosResponse) => {
        return result.status
      })
      .catch((error: Error) => {
        console.log(error);
        return 500
      })
    return -1
  }
}

export default Api