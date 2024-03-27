const axios = require("axios");

const api = "https://api.pujakaitem.com/api/products?id="; // Replace with your API URL
const apiUrl = "https://api.pujakaitem.com/api/products";

let Arr = [];
let compArr = [];
const getId = async () => {
  const response = await axios.get(apiUrl);
  const data = response.data;
  const jsonData = JSON.stringify(data, null, 2);

  const compArr = await Promise.all(
    data.map(async (element) => {
      const dt = await axios.get(api + element.id);
      return dt.data;
    })
  );

  const jsonArr = compArr.map((element) => JSON.stringify(element));
  const jsonObjArr = jsonArr.map((jsonString) => JSON.parse(jsonString));

  console.log(jsonArr);
};

getId();
