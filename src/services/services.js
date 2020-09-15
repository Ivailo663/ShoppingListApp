import axios from "axios";
const url =
  "https://api.edamam.com/api/food-database/v2/parser?app_id=957d5537&app_key=03b5b00082046318c1c3122981bf5dce";
const getData = (food) => {
  return axios
    .get(`${url}&ingr=${food}`)
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
};

const login = () => {
  return axios.post().then((res) => console.log(res));
};

export const services = {
  getData,
  login,
};
