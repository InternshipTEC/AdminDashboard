import React from "react";
import { Admin, fetchUtils, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import AbsenList from "./components/AbsenList";
import AbsenCreate from "./components/AbsenCreate";
import AbsenEdit from "./components/AbsenEdit";
import UserList from "./components/UserList";
import UserCreate from "./components/UserCreate";
import UserEdit from "./components/UserEdit";
import TransactionCreate from "./components/TransactionCreate";
import TransactionList from "./components/TransactionList";
import TransactionEdit from "./components/TransactionEdit";
import axios from "axios";
import EventList from "./components/EventList";
import EventCreate from "./components/EventCreate";
import EventEdit from "./components/EventEdit";
import TugasList from "./components/TugasList";
import TugasCreate from "./components/TugasCreate";
import TugasEdit from "./components/TugasEdit";
import MateriList from "./components/MateriList";
import MateriCreate from "./components/MateriCreate";
import MateriEdit from "./components/MateriEdit";

export const BACKEND_URL = "http://localhost:3000";
// export const BACKEND_URL = "https://api.tecinternship2021.com";

const authProvider = {
  login: ({ username, password }) => {
    return axios
      .post(`${BACKEND_URL}/auth/login`, {
        email: username,
        password,
      })
      .then((data) => data.data.data)
      .then((data) => {
        localStorage.setItem("auth", data.accessToken);
      })
      .catch((err) => {
        console.log(err.toString());
      });
    // accept all username/password combinations
  },
  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("auth") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => Promise.reject("Unknown method"),
  getIdentity: () =>
    Promise.resolve({
      id: "user",
      fullName: "Admin TEC",
    }),
};

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const accessToken = localStorage.getItem("auth");
  options.headers.set("Authorization", `Bearer ${accessToken}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = restProvider(BACKEND_URL, httpClient);

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name="transaction"
        list={TransactionList}
        create={TransactionCreate}
        edit={TransactionEdit}
      />
      <Resource
        name="absen"
        list={AbsenList}
        create={AbsenCreate}
        edit={AbsenEdit}
      />
      <Resource
        name="event"
        list={EventList}
        create={EventCreate}
        edit={EventEdit}
      />
      <Resource
        name="tugas"
        list={TugasList}
        create={TugasCreate}
        edit={TugasEdit}
      />
      <Resource
        name="materi"
        list={MateriList}
        create={MateriCreate}
        edit={MateriEdit}
      />
    </Admin>
  );
}

export default App;
