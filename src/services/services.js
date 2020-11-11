import axios from "axios";
const url =
  "https://api.edamam.com/api/food-database/v2/parser?app_id=957d5537&app_key=03b5b00082046318c1c3122981bf5dce";
const getData = async (food) => {
  try {
    const data = await axios.get(`${url}&ingr=${food}`);
    return data;
  } catch (err) {
    console.log(err, "ERROR");
  }
};

const registration = async (user) => {
  try {
    const res = await axios.post("http://localhost:3002/createUser", user);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export { getData, registration };
