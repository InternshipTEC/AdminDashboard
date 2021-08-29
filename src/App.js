import React from 'react'
import { Admin, fetchUtils, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'
import TransactionCreate from './components/TransactionCreate'
import TransactionList from './components/TransactionList'
import TransactionEdit from './components/TransactionEdit'
import axios from 'axios'

const authProvider = {
    login: ({ username, password }) => {
        return axios.post("https://api.tecinternship2021.com/auth/login",{
            email:username,
            password
        })
        .then(data=>data.data.data)
        .then(data=>{localStorage.setItem('auth',data.accessToken)})
        .catch(
          err=>{
            console.log(err.toString())
          }
        )
        // accept all username/password combinations
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
        localStorage.getItem('auth') ? Promise.resolve() : Promise.reject(),
    getPermissions: () => Promise.reject('Unknown method'),
    getIdentity: () =>
        Promise.resolve({
            id: 'user',
            fullName: 'Admin TEC',
        }),
};

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const accessToken = localStorage.getItem('auth');
  options.headers.set('Authorization', `Bearer ${accessToken}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = restProvider('https://api.tecinternship2021.com',httpClient)

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name='transaction'
        list={TransactionList}
        create={TransactionCreate}
        edit={TransactionEdit}
      />
    </Admin>
  )
}

export default App
